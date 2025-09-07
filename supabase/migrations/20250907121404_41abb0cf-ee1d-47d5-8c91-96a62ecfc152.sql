-- Create contact messages table
CREATE TABLE public.contact_messages (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create menu categories table
CREATE TABLE public.menu_categories (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    display_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create menu items table
CREATE TABLE public.menu_items (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    category_id UUID REFERENCES public.menu_categories(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url TEXT,
    is_available BOOLEAN NOT NULL DEFAULT true,
    is_featured BOOLEAN NOT NULL DEFAULT false,
    allergens TEXT[],
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create customer reviews table
CREATE TABLE public.reviews (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title TEXT,
    review_text TEXT NOT NULL,
    is_approved BOOLEAN NOT NULL DEFAULT false,
    is_featured BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create newsletter subscriptions table
CREATE TABLE public.newsletter_subscriptions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    name TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Enable RLS on all tables
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact messages
CREATE POLICY "Anyone can create contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Staff and admin can view contact messages" 
ON public.contact_messages 
FOR SELECT 
USING (is_staff_or_admin(auth.uid()));

CREATE POLICY "Staff and admin can update contact messages" 
ON public.contact_messages 
FOR UPDATE 
USING (is_staff_or_admin(auth.uid()));

-- Create policies for menu categories (public read, admin manage)
CREATE POLICY "Anyone can view active menu categories" 
ON public.menu_categories 
FOR SELECT 
USING (is_active = true);

CREATE POLICY "Staff and admin can manage menu categories" 
ON public.menu_categories 
FOR ALL 
USING (is_staff_or_admin(auth.uid()))
WITH CHECK (is_staff_or_admin(auth.uid()));

-- Create policies for menu items (public read, admin manage)
CREATE POLICY "Anyone can view available menu items" 
ON public.menu_items 
FOR SELECT 
USING (is_available = true);

CREATE POLICY "Staff and admin can manage menu items" 
ON public.menu_items 
FOR ALL 
USING (is_staff_or_admin(auth.uid()))
WITH CHECK (is_staff_or_admin(auth.uid()));

-- Create policies for reviews (public can create, only approved are visible)
CREATE POLICY "Anyone can create reviews" 
ON public.reviews 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view approved reviews" 
ON public.reviews 
FOR SELECT 
USING (is_approved = true);

CREATE POLICY "Staff and admin can manage reviews" 
ON public.reviews 
FOR ALL 
USING (is_staff_or_admin(auth.uid()))
WITH CHECK (is_staff_or_admin(auth.uid()));

-- Create policies for newsletter subscriptions
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscriptions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Staff and admin can view newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR SELECT 
USING (is_staff_or_admin(auth.uid()));

CREATE POLICY "Staff and admin can update newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR UPDATE 
USING (is_staff_or_admin(auth.uid()));

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_contact_messages_updated_at
BEFORE UPDATE ON public.contact_messages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_menu_categories_updated_at
BEFORE UPDATE ON public.menu_categories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_menu_items_updated_at
BEFORE UPDATE ON public.menu_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at
BEFORE UPDATE ON public.reviews
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample menu categories
INSERT INTO public.menu_categories (name, description, display_order) VALUES
('Appetizers', 'Start your dining experience with our exquisite appetizers', 1),
('Main Courses', 'Our signature main dishes crafted with finest ingredients', 2),
('Desserts', 'Sweet endings to complete your meal', 3),
('Beverages', 'Carefully selected wines and beverages', 4);

-- Insert sample menu items
INSERT INTO public.menu_items (category_id, name, description, price, is_featured, display_order) VALUES
((SELECT id FROM public.menu_categories WHERE name = 'Appetizers'), 'Oysters Rockefeller', 'Fresh blue point oysters with spinach, herbs, and champagne butter', 18.00, false, 1),
((SELECT id FROM public.menu_categories WHERE name = 'Appetizers'), 'Foie Gras Terrine', 'House-made terrine with fig compote and brioche toast', 24.00, false, 2),
((SELECT id FROM public.menu_categories WHERE name = 'Appetizers'), 'Tuna Tartare', 'Yellowfin tuna with avocado, citrus, and sesame oil', 22.00, false, 3),
((SELECT id FROM public.menu_categories WHERE name = 'Appetizers'), 'Burrata Caprese', 'Imported burrata with heirloom tomatoes and basil oil', 16.00, false, 4),

((SELECT id FROM public.menu_categories WHERE name = 'Main Courses'), 'Beef Tenderloin', 'Prime cut beef with truffle sauce, roasted vegetables, and herb-infused jus', 48.00, true, 1),
((SELECT id FROM public.menu_categories WHERE name = 'Main Courses'), 'Wagyu Beef Tenderloin', '8oz tenderloin with truffle sauce and roasted vegetables', 65.00, false, 2),
((SELECT id FROM public.menu_categories WHERE name = 'Main Courses'), 'Atlantic Salmon', 'Fresh grilled salmon with citrus glaze, seasonal vegetables, and lemon butter', 36.00, true, 3),
((SELECT id FROM public.menu_categories WHERE name = 'Main Courses'), 'Lobster Thermidor', 'Maine lobster with cognac cream sauce and gruyere', 58.00, false, 4),
((SELECT id FROM public.menu_categories WHERE name = 'Main Courses'), 'Duck Confit', 'Slow-cooked duck leg with cherry gastrique and wild rice', 42.00, false, 5),
((SELECT id FROM public.menu_categories WHERE name = 'Main Courses'), 'Rack of Lamb', 'Herb-crusted lamb with ratatouille and red wine reduction', 48.00, false, 6),
((SELECT id FROM public.menu_categories WHERE name = 'Main Courses'), 'Vegetarian Risotto', 'Mushroom risotto with truffle oil and parmesan', 28.00, false, 7),

((SELECT id FROM public.menu_categories WHERE name = 'Desserts'), 'Chocolate Soufflé', 'Decadent dark chocolate soufflé with vanilla bean ice cream and berry coulis', 16.00, true, 1),
((SELECT id FROM public.menu_categories WHERE name = 'Desserts'), 'Crème Brûlée', 'Vanilla custard with caramelized sugar and fresh berries', 14.00, false, 2),
((SELECT id FROM public.menu_categories WHERE name = 'Desserts'), 'Tiramisu', 'Traditional Italian tiramisu with espresso and mascarpone', 12.00, false, 3),
((SELECT id FROM public.menu_categories WHERE name = 'Desserts'), 'Lemon Tart', 'Tart lemon curd with meringue and raspberry coulis', 13.00, false, 4);