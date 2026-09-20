import type { Lang } from './nav';

export interface PricingStep {
  title: string;
  description: string;
}

export const pricingPage: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaNote: string;
    stepsHeading: string;
    steps: PricingStep[];
    includedHeading: string;
    includedSubheading: string;
    ctaBannerTitle: string;
    ctaBannerLabel: string;
  }
> = {
  ar: {
    eyebrow: 'التسعير',
    title: 'تسعير يناسب حجم ورشتك',
    description:
      'السعر يختلف حسب حجم ورشتك — من ورشة مستقلة واحدة إلى شبكة فروع متعددة. احجز موعدًا مباشرًا، وسنجهز لك عرضًا توضيحيًا (ديمو) مجانيًا على نظامك الفعلي، ونقترح الخطة الأنسب لك.',
    ctaLabel: 'احجز موعدًا مباشرًا الآن',
    ctaNote: 'نافذة حجز فورية — اختر الوقت المناسب لك، بلا انتظار رد.',
    stepsHeading: 'كيف تحصل على السعر المناسب؟',
    steps: [
      {
        title: 'احجز موعدًا مباشرًا',
        description: 'اختر الوقت المناسب لك من التقويم مباشرة — بلا انتظار رد على رسالة.',
      },
      {
        title: 'نجهز لك عرضًا توضيحيًا',
        description: 'ديمو مجاني على النظام الفعلي، مخصص لحجم ورشتك واحتياجك.',
      },
      {
        title: 'نقترح خطة تناسبك',
        description: 'عرض سعر يعكس حجمك الفعلي، بلا التزام مبدئي.',
      },
    ],
    includedHeading: 'ما يشمله كل اشتراك بغض النظر عن الحجم',
    includedSubheading: 'هذه أساسيات لكل عميل، وليست ميزات مدفوعة إضافية.',
    ctaBannerTitle: 'جاهز لمعرفة السعر المناسب لورشتك؟',
    ctaBannerLabel: 'احجز موعدًا الآن',
  },
  en: {
    eyebrow: 'Pricing',
    title: "Pricing that fits your garage's size",
    description:
      "Pricing depends on your garage's size — from a single independent garage to a multi-branch network. Book a meeting directly, and we'll prepare a free demo on the real system, then suggest the plan that fits you.",
    ctaLabel: 'Book a Meeting Now',
    ctaNote: 'Instant booking — pick a time that works for you, no waiting for a reply.',
    stepsHeading: 'How do you get the right price?',
    steps: [
      {
        title: 'Book a meeting directly',
        description: "Pick a time that works for you straight from the calendar — no waiting for a reply.",
      },
      {
        title: 'We prepare a live demo for you',
        description: "A free demo on the real system, tailored to your garage's size and needs.",
      },
      {
        title: 'We suggest a plan that fits',
        description: 'A quote that reflects your actual size, with no upfront commitment.',
      },
    ],
    includedHeading: 'What every subscription includes, regardless of size',
    includedSubheading: 'These are baseline essentials for every customer, not paid add-ons.',
    ctaBannerTitle: "Ready to find out the right price for your garage?",
    ctaBannerLabel: 'Book a Meeting Now',
  },
};
