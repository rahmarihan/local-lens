import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, MapPin, ChevronRight } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import { categories } from '@/data/places';

const AddPlaceScreen = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', category: '', description: '', tips: '', dishes: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [images, setImages] = useState<string[]>([]);

  const validateStep = () => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!form.name) errs.name = 'Name is required';
      if (!form.category) errs.category = 'Select a category';
      if (!form.description) errs.description = 'Description is required';
    }
    if (step === 2 && images.length === 0) errs.images = 'Please upload at least one image';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => { if (validateStep()) setStep(step + 1); };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="px-5 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center">
            <ArrowLeft size={18} />
          </button>
          <h1 className="text-lg font-extrabold">Add a Place</h1>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex-1 h-1.5 rounded-full transition-all ${s <= step ? 'bg-primary' : 'bg-muted'}`} />
          ))}
        </div>
        <p className="text-xs text-muted-foreground mb-4">Step {step} of 3</p>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-muted-foreground">Place Name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Café El-Fishawy" className={`w-full mt-1 px-4 py-3 rounded-xl bg-muted text-sm border ${errors.name ? 'border-destructive' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-primary/30`} />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">Category</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {categories.map((c) => (
                  <button key={c.id} onClick={() => setForm({ ...form, category: c.label })} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold ${form.category === c.label ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    {c.emoji} {c.label}
                  </button>
                ))}
              </div>
              {errors.category && <p className="text-destructive text-xs mt-1">{errors.category}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">Description</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Tell us about this place..." className={`w-full mt-1 px-4 py-3 rounded-xl bg-muted text-sm border ${errors.description ? 'border-destructive' : 'border-transparent'} focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-28`} />
              {errors.description && <p className="text-destructive text-xs mt-1">{errors.description}</p>}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="text-xs font-semibold text-muted-foreground">Upload Images or Video</label>
            <div
              onClick={() => setImages(['uploaded'])}
              className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors ${errors.images ? 'border-destructive' : 'border-border hover:border-primary/50'}`}
            >
              <Upload size={32} className="text-muted-foreground mb-3" />
              <p className="text-sm font-semibold">Tap to upload</p>
              <p className="text-xs text-muted-foreground mt-1">JPG, PNG, MP4 (max 10MB)</p>
            </div>
            {errors.images && <p className="text-destructive text-xs mt-1">{errors.images}</p>}
            {images.length > 0 && (
              <div className="flex gap-2">
                <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center text-2xl">📸</div>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-muted-foreground">Local Tips</label>
              <textarea value={form.tips} onChange={(e) => setForm({ ...form, tips: e.target.value })} placeholder="Share insider tips..." className="w-full mt-1 px-4 py-3 rounded-xl bg-muted text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-24" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">Recommended Dishes</label>
              <textarea value={form.dishes} onChange={(e) => setForm({ ...form, dishes: e.target.value })} placeholder="What should visitors try?" className="w-full mt-1 px-4 py-3 rounded-xl bg-muted text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none h-20" />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">Pin Location</label>
              <div className="mt-2 h-40 rounded-xl bg-beige-warm flex items-center justify-center">
                <MapPin size={32} className="text-primary" />
              </div>
            </div>
          </div>
        )}

        <button
          onClick={step < 3 ? next : () => navigate('/home')}
          className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm mt-6 flex items-center justify-center gap-1"
        >
          {step < 3 ? <> Next <ChevronRight size={16} /></> : 'Submit Place'}
        </button>
      </div>
      <BottomNav />
    </div>
  );
};

export default AddPlaceScreen;
