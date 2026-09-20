import type { Lang } from './nav';

export interface DifferentiatorItem {
  icon: 'grid' | 'cycle' | 'chart' | 'support' | 'dev' | 'onboarding';
  title: string;
  description: string;
}

export const aboutPage: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    description: string;
    problem: {
      label: string;
      heading: string;
      body: string;
    };
    evolve: {
      heading: string;
      startLabel: string;
      startBody: string;
      nowLabel: string;
      nowBody: string;
    };
    differentiators: {
      heading: string;
      items: DifferentiatorItem[];
    };
    ctaBannerTitle: string;
    ctaBannerLabel: string;
  }
> = {
  ar: {
    eyebrow: 'عن مِرآب',
    title: 'من حل بسيط لمشكلة الورقيات، إلى نظام متكامل لإدارة الكراج',
    description: 'قصة مِرآب تبدأ من مشكلة واحدة يعرفها كل صاحب ورشة — الورقيات. اليوم هو نظام يدير دورة العمليات كاملة.',
    problem: {
      label: 'المشكلة التي بدأنا منها',
      heading: 'معالجة مشكلة الورقيات في مراكز الصيانة',
      body: 'صُمم مِرآب لمعالجة مشكلة الورقيات في مراكز الصيانة — الطلبات والفواتير والسجلات المتناثرة بين دفاتر وأوراق منفصلة. الهدف كان توحيد كل هذه العمليات داخل نظام رقمي واحد متكامل، بما ينسجم مع توجه دولة قطر نحو التحول الرقمي الذي تقوده وزارة التجارة والصناعة.',
    },
    evolve: {
      heading: 'كيف تطورت الفكرة',
      startLabel: 'البداية',
      startBody: 'نظام بسيط يستقبل طلب صيانة العميل، يطبع بطاقة العمل، ثم يحوّلها إلى فاتورة.',
      nowLabel: 'اليوم',
      nowBody: 'منصة متكاملة تدير دورة عمليات الكراج بالكامل — من استقبال السيارة حتى التحصيل والتقارير المالية.',
    },
    differentiators: {
      heading: 'ما يميّز مِرآب',
      items: [
        { icon: 'grid', title: 'سهولة الاستخدام', description: 'واجهة بسيطة وسهلة لا تحتاج تدريبًا معقدًا لبدء العمل بها.' },
        { icon: 'cycle', title: 'تغطية كاملة لدورة العمليات', description: 'من استقبال الطلب حتى التحصيل، داخل نظام واحد بلا فجوات بين أدوات متفرقة.' },
        { icon: 'chart', title: 'تقارير واضحة', description: 'رؤية فعلية لأداء الورشة، تساعد صاحب العمل على اتخاذ قرارات مبنية على أرقام حقيقية.' },
        { icon: 'support', title: 'دعم فني متواصل ٢٤ ساعة', description: 'فريق دعم متاح دائمًا لحل أي مشكلة تواجه فريق عملك في أي وقت.' },
        { icon: 'dev', title: 'فريق تطوير مخصص', description: 'يتابع باستمرار مع كل عميل ويطوّر حلولًا تلائم احتياجاته الفعلية.' },
        { icon: 'onboarding', title: 'تسليم احترافي متكامل', description: 'من الديمو التوضيحي، إلى تدريب الطاقم الكامل على النظام، إلى متابعة دعم مستمرة بعد الإطلاق.' },
      ],
    },
    ctaBannerTitle: 'اكتشف الفرق بنفسك — جرّب مِرآب اليوم.',
    ctaBannerLabel: 'ابدأ الآن مجانًا',
  },
  en: {
    eyebrow: 'About Mirab',
    title: 'From a simple fix for paperwork, to a complete garage management platform',
    description: "Mirab's story starts with one problem every garage owner knows — paperwork. Today it's a complete system that runs the entire operation.",
    problem: {
      label: 'The problem we started from',
      heading: 'Solving the paperwork problem in service centers',
      body: "Mirab was built to solve the paperwork problem in service centers — requests, invoices, and records scattered across separate notebooks and papers. The goal was to unify all of these operations inside one integrated digital system, in line with Qatar's national direction toward digital transformation, led by the Ministry of Commerce and Industry.",
    },
    evolve: {
      heading: 'How the idea evolved',
      startLabel: 'The start',
      startBody: "A simple system that took in a customer's service request, printed the job card, then converted it into an invoice.",
      nowLabel: 'Today',
      nowBody: "A complete platform that runs the garage's entire operation — from vehicle intake to collection and financial reporting.",
    },
    differentiators: {
      heading: 'What sets Mirab apart',
      items: [
        { icon: 'grid', title: 'Ease of use', description: "A simple, straightforward interface that doesn't require complex training to get started." },
        { icon: 'cycle', title: 'Full process coverage', description: 'From intake to collection, inside one system with no gaps between disconnected tools.' },
        { icon: 'chart', title: 'Clear reporting', description: 'Real visibility into how the garage is performing, helping owners make decisions based on actual numbers.' },
        { icon: 'support', title: 'Round-the-clock technical support', description: "A support team that's always available to resolve any issue your team runs into, at any time." },
        { icon: 'dev', title: 'A dedicated development team', description: "Continuously following up with every customer and building solutions that fit their actual needs." },
        { icon: 'onboarding', title: 'A complete, professional rollout', description: 'From a live demo, to training the full staff on the system, to ongoing support after launch.' },
      ],
    },
    ctaBannerTitle: 'See the difference for yourself — try Mirab today.',
    ctaBannerLabel: 'Try It Free',
  },
};
