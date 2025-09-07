import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    partySize: "",
    time: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const timeSlots = [
    "17:00", "17:30", "18:00", "18:30", 
    "19:00", "19:30", "20:00", "20:30", "21:00"
  ];

  const partySize = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTimeSelect = (time: string) => {
    setFormData({
      ...formData,
      time
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.date || !formData.partySize || !formData.time) {
        toast({
          title: "خطأ في البيانات",
          description: "يرجى ملء جميع الحقول المطلوبة",
          variant: "destructive"
        });
        return;
      }

      const { error } = await supabase
        .from('reservations')
        .insert([
          {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            reservation_date: formData.date,
            reservation_time: formData.time,
            guests: parseInt(formData.partySize),
            notes: formData.notes || null
          }
        ]);

      if (error) throw error;

      toast({
        title: "تم إرسال طلب الحجز بنجاح!",
        description: "شكراً لك. سنتواصل معك قريباً لتأكيد الحجز."
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        partySize: "",
        time: "",
        notes: ""
      });
    } catch (error) {
      console.error('Error creating reservation:', error);
      toast({
        title: "خطأ في إرسال طلب الحجز",
        description: "حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-elegant border-0">
      <CardContent className="p-8">
        <h2 className="text-3xl font-serif font-bold text-burgundy mb-6">
          Book Your Table
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                First Name *
              </label>
              <input 
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-amber/50 focus:border-amber transition-smooth"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Last Name *
              </label>
              <input 
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-amber/50 focus:border-amber transition-smooth"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input 
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-amber/50 focus:border-amber transition-smooth"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone Number *
            </label>
            <input 
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-amber/50 focus:border-amber transition-smooth"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Date *
              </label>
              <input 
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-amber/50 focus:border-amber transition-smooth"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Party Size *
              </label>
              <select 
                name="partySize"
                required
                value={formData.partySize}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-amber/50 focus:border-amber transition-smooth"
              >
                <option value="">Select party size</option>
                {partySize.map(size => (
                  <option key={size} value={size}>
                    {size} {size === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Preferred Time *
            </label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map(time => (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeSelect(time)}
                  className={`px-3 py-2 text-sm border rounded-md transition-smooth ${
                    formData.time === time 
                      ? 'bg-amber text-foreground border-amber' 
                      : 'border-border hover:bg-amber/10 hover:border-amber'
                  }`}
                >
                  {time.replace(':', ':')}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Special Requests
            </label>
            <textarea 
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-amber/50 focus:border-amber transition-smooth"
              placeholder="Any special occasions, dietary restrictions, or preferences..."
            />
          </div>

          <Button 
            type="submit" 
            variant="reserve" 
            className="w-full text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Reserving..." : "Reserve Table"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReservationForm;