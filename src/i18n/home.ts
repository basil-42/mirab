import type { Lang } from './nav';

export interface HowItWorksStep {
  title: string;
  description: string;
}

export const howItWorks: Record<Lang, { heading: string; subheading: string; steps: HowItWorksStep[] }> = {
  ar: {
    heading: 'كيف يعمل النظام',
    subheading: 'من لحظة استقبال السيارة حتى تحصيل الفاتورة — أربع خطوات بلا أوراق.',
    steps: [
      {
        title: 'استقبال السيارة وفتح بطاقة عمل',
        description: 'سجّل بيانات العميل والسيارة، وابدأ بطاقة عمل رقمية خلال ثوانٍ — بلا نماذج ورقية.',
      },
      {
        title: 'فحص السيارة وتوثيق الحالة',
        description: 'وثّق حالة السيارة على مخطط فحص تفاعلي، يُرفق تلقائيًا ببطاقة العمل ويظهر في المستندات المطبوعة.',
      },
      {
        title: 'عرض السعر والموافقة',
        description: 'أرسل عرض السعر فورًا عبر واتساب أو البريد، وحوّله إلى فاتورة بضغطة واحدة عند موافقة العميل.',
      },
      {
        title: 'التحصيل ومتابعة الأداء',
        description: 'استلم الدفعة وسجّلها في رصيد العميل، وتابع الأداء المالي لحظيًا من لوحة التحكم.',
      },
    ],
  },
  en: {
    heading: 'How It Works',
    subheading: 'From the moment a car arrives to the moment the invoice is paid — four paperless steps.',
    steps: [
      {
        title: 'Vehicle intake & job card creation',
        description: 'Log the customer and vehicle, and open a digital job card in seconds — no paper forms.',
      },
      {
        title: 'Vehicle inspection & condition report',
        description: "Document the car's condition on an interactive inspection diagram, auto-attached to the job card and printed documents.",
      },
      {
        title: 'Quotation & approval',
        description: 'Send the quotation instantly via WhatsApp or email, and convert it to an invoice in one click once approved.',
      },
      {
        title: 'Collection & performance tracking',
        description: "Collect payment and record it against the customer's balance, and track financial performance live from the dashboard.",
      },
    ],
  },
};

export const productPreview: Record<
  Lang,
  {
    heading: string;
    subheading: string;
    jobCard: {
      badge: string;
      customer: string;
      vehicle: string;
      items: { label: string; price: string }[];
      total: string;
      totalValue: string;
    };
    inspection: {
      badge: string;
      legend: { label: string; color: 'ok' | 'warn' | 'urgent' }[];
      points: { status: 'ok' | 'warn' | 'urgent'; label: string }[];
      summary: string;
    };
  }
> = {
  ar: {
    heading: 'شاهد النظام أثناء العمل',
    subheading: 'بطاقة العمل ومخطط الفحص كما يراهما فريقك — لا شاشات تخيلية.',
    jobCard: {
      badge: 'بطاقة عمل #1025',
      customer: 'أحمد الكواري — تويوتا كامري 2022',
      vehicle: 'لوحة: 34521 · دخول: اليوم 9:40 ص',
      items: [
        { label: 'فحص وتبديل تيل الفرامل الأمامي', price: '180 ر.ق' },
        { label: 'تغيير زيت المحرك + فلتر', price: '95 ر.ق' },
        { label: 'فحص عام (25 نقطة)', price: 'مجاني' },
      ],
      total: 'الإجمالي المستحق',
      totalValue: '275 ر.ق',
    },
    inspection: {
      badge: 'مخطط الفحص التفاعلي',
      legend: [
        { label: 'سليم', color: 'ok' },
        { label: 'يحتاج متابعة', color: 'warn' },
        { label: 'يتطلب إجراء فوري', color: 'urgent' },
      ],
      points: [
        { status: 'ok', label: 'الإطار الأمامي' },
        { status: 'warn', label: 'المصباح الأمامي' },
        { status: 'ok', label: 'الباب الجانبي' },
        { status: 'urgent', label: 'الفرامل الخلفية' },
        { status: 'ok', label: 'العادم' },
      ],
      summary: 'يشمل المخطط الكامل ٢٩ منطقة قابلة للنقر، على كل جوانب السيارة.',
    },
  },
  en: {
    heading: 'See It In Action',
    subheading: 'The job card and inspection diagram exactly as your team sees them — no mockups.',
    jobCard: {
      badge: 'Job Card #1025',
      customer: 'Ahmed Al-Kuwari — Toyota Camry 2022',
      vehicle: 'Plate: 34521 · Checked in: Today 9:40 AM',
      items: [
        { label: 'Front brake pad inspection & replacement', price: 'QAR 180' },
        { label: 'Engine oil change + filter', price: 'QAR 95' },
        { label: 'General inspection (25 points)', price: 'Free' },
      ],
      total: 'Total Due',
      totalValue: 'QAR 275',
    },
    inspection: {
      badge: 'Interactive Inspection Diagram',
      legend: [
        { label: 'Good', color: 'ok' },
        { label: 'Needs attention', color: 'warn' },
        { label: 'Urgent action', color: 'urgent' },
      ],
      points: [
        { status: 'ok', label: 'Front tire' },
        { status: 'warn', label: 'Headlight' },
        { status: 'ok', label: 'Side door' },
        { status: 'urgent', label: 'Rear brakes' },
        { status: 'ok', label: 'Exhaust' },
      ],
      summary: 'The full diagram covers 29 clickable zones across every side of the vehicle.',
    },
  },
};

export const featureHub: Record<Lang, { heading: string; subheading: string; cta: string }> = {
  ar: {
    heading: 'استكشف كل ما يقدمه النظام',
    subheading: 'كل قسم مبني ليعمل بمفرده أو ضمن التدفق الكامل — تصفّح التفاصيل.',
    cta: 'التفاصيل',
  },
  en: {
    heading: 'Explore Everything The System Offers',
    subheading: 'Every module works standalone or as part of the full flow — browse the details.',
    cta: 'Details',
  },
};

export interface TrustItem {
  title: string;
  description: string;
}

export const trustBar: Record<Lang, { heading: string; subheading: string; cardLabel: string; items: TrustItem[] }> = {
  ar: {
    heading: 'مصمم ليتماشى مع طريقة عمل الورش في الخليج فعليًا',
    subheading: 'ستة أمور يسأل عنها كل فريق قبل تغيير نظامه — مُجاب عنها من البداية.',
    cardLabel: 'جاهزية النظام — قائمة تحقق',
    items: [
      { title: 'ثنائي اللغة بالكامل', description: 'العربية والإنجليزية في كل شاشة ومستند وإشعار.' },
      { title: 'إرسال مباشر عبر واتساب', description: 'الفواتير وعروض الأسعار تُرسل مباشرة للعميل، بدون أي تطبيق إضافي.' },
      { title: 'مصمم لسوق قطر والخليج', description: 'العملة وسير العمل واللغة متوافقة مع طبيعة السوق المحلي.' },
      { title: 'مصادقة ثنائية العامل', description: 'خطوة تحقق إضافية عند تسجيل الدخول، مما يعزز الأمان — لكل حساب، وليست ميزة اختيارية.' },
      { title: 'نسخ احتياطي يومي تلقائي', description: 'نسخة محلية وسحابية كل يوم، دون أي خطوة يدوية.' },
      { title: 'صلاحيات دقيقة لكل مستخدم', description: 'كل مستخدم ودور يرى فقط ما يخصه بالضبط.' },
    ],
  },
  en: {
    heading: 'Built for how garages in the Gulf actually work',
    subheading: 'Six things every team asks about before they switch systems — answered up front.',
    cardLabel: 'System readiness — checklist',
    items: [
      { title: 'Fully bilingual', description: 'Arabic & English on every screen, document, and notification.' },
      { title: 'Direct WhatsApp delivery', description: 'Invoices and quotes sent straight to the customer, no app needed.' },
      { title: 'Built for Qatar & the Gulf', description: 'Currency, workflows, and language matched to your market.' },
      { title: 'Two-factor authentication', description: 'An extra verification step at login, which strengthens security — for every account, not an optional add-on.' },
      { title: 'Automatic daily backups', description: 'Local and cloud copies, every day, with no manual step.' },
      { title: 'Fine-grained permissions', description: 'Every user and role sees exactly what they should.' },
    ],
  },
};

export interface ComparisonPoint {
  before: string;
  after: string;
}

export const comparison: Record<Lang, { heading: string; subheading: string; beforeLabel: string; afterLabel: string; moreDetailsLabel: string; points: ComparisonPoint[] }> = {
  ar: {
    heading: 'الطريقة التقليدية مقابل مِرآب',
    subheading: 'نفس العمل اليومي لورشتك — بأثر مختلف تمامًا على وقتك ودقتك.',
    beforeLabel: 'الطريقة التقليدية',
    afterLabel: 'مع مِرآب',
    moreDetailsLabel: 'تفاصيل أكثر',
    points: [
      { before: 'دفاتر وأوراق متناثرة لكل سيارة', after: 'بطاقة عمل رقمية موحدة لكل سيارة وعميل' },
      { before: 'رسائل واتساب متفرقة بلا سجل منظم', after: 'إرسال المستندات من النظام مباشرة مع سجل كامل' },
      { before: 'حساب الفواتير يدويًا وعرضة للخطأ', after: 'فواتير محسوبة تلقائيًا بحالة محدثة لحظيًا' },
      { before: 'ملاحظات فحص نصية قابلة للنسيان أو سوء الفهم', after: 'مخطط فحص بصري تفاعلي موثّق لكل سيارة' },
      { before: 'نسخ احتياطي يدوي أو غير موجود أصلاً', after: 'نسخ احتياطي تلقائي يومي محلي وسحابي' },
      { before: 'تتبع رصيد العميل يدويًا بين دفاتر متعددة', after: 'رصيد العميل محدث تلقائيًا مع كل معاملة' },
    ],
  },
  en: {
    heading: 'The Old Way vs. Mirab',
    subheading: "Same daily garage work — completely different impact on your time and accuracy.",
    beforeLabel: 'The Old Way',
    afterLabel: 'With Mirab',
    moreDetailsLabel: 'More Details',
    points: [
      { before: 'Scattered notebooks and paper for each car', after: 'One unified digital job card per car and customer' },
      { before: 'Scattered WhatsApp messages with no organized record', after: 'Documents sent straight from the system with a full log' },
      { before: 'Invoices calculated by hand, prone to errors', after: 'Invoices calculated automatically, status updated live' },
      { before: 'Text inspection notes that get forgotten or misread', after: 'A documented, visual inspection diagram for every car' },
      { before: 'Manual backups, or none at all', after: 'Automatic daily local and cloud backups' },
      { before: 'Customer balances tracked by hand across notebooks', after: "Customer balance updated automatically with every transaction" },
    ],
  },
};

export interface SegmentItem {
  title: string;
  description: string;
  features: string[];
}

export const segments: Record<Lang, { heading: string; subheading: string; items: SegmentItem[] }> = {
  ar: {
    heading: 'مصمم أيضًا ليلائم ورشتك، أيًا كان حجمها',
    subheading: 'نفس النظام، يتكيف مع طريقة عملك — من الورشة الواحدة إلى الفروع المتعددة.',
    items: [
      {
        title: 'ورشة مستقلة صغيرة',
        description: 'تدير كل شيء بنفسك أو مع فريق صغير، وتحتاج نظامًا يعمل من اليوم الأول بلا تعقيد.',
        features: ['بطاقة عمل رقمية جاهزة خلال ثوانٍ', 'تحويل عرض السعر إلى فاتورة بضغطة واحدة', 'إرسال المستندات مباشرة عبر واتساب'],
      },
      {
        title: 'ورشة متعددة الفروع',
        description: 'تدير أكثر من فرع وتحتاج رؤية موحدة لأداء كل فرع دون فقدان السيطرة على الصلاحيات.',
        features: ['لوحة تحكم مالية حية لكل الفروع', 'صلاحيات دقيقة لكل مستخدم ودور', 'عدد غير محدود من الفنيين والمستخدمين'],
      },
      {
        title: 'مركز صيانة متخصص',
        description: 'عملك يعتمد على توثيق دقيق لحالة كل سيارة قبل وبعد كل عملية — دهان، كهرباء، إطارات، أو غيرها.',
        features: ['مخطط فحص تفاعلي بـ٢٩ منطقة قابلة للنقر', 'سجل صيانة كامل لكل سيارة', 'تذكيرات صيانة قادمة تلقائية'],
      },
    ],
  },
  en: {
    heading: 'Also built to fit your garage, whatever its size',
    subheading: 'The same system adapts to how you work — from a single garage to multiple branches.',
    items: [
      {
        title: 'A small independent garage',
        description: 'You run everything yourself or with a small team, and need a system that works from day one with no setup complexity.',
        features: ['A digital job card ready in seconds', 'Convert a quotation to an invoice in one click', 'Send documents straight over WhatsApp'],
      },
      {
        title: 'A multi-branch garage',
        description: 'You run more than one branch and need a unified view of performance across all of them without losing control over permissions.',
        features: ['A live financial dashboard across all branches', 'Fine-grained permissions per user and role', 'Unlimited technicians and users'],
      },
      {
        title: 'A specialized service center',
        description: "Your work depends on precise documentation of every vehicle's condition before and after each job — paint, electrical, tires, or otherwise.",
        features: ['An interactive inspection diagram with 29 clickable zones', "A full service history for every vehicle", 'Automatic upcoming-maintenance reminders'],
      },
    ],
  },
};

export interface IntegrationItem {
  title: string;
  description: string;
}

export const integrations: Record<Lang, { heading: string; subheading: string; moreDetailsLabel: string; items: IntegrationItem[] }> = {
  ar: {
    heading: 'يتكامل مع الأدوات التي يستخدمها فريقك بالفعل',
    subheading: 'لا حاجة لتعلم أنظمة جديدة أو الاعتماد على حلول خارجية إضافية — القنوات والملفات التي تعمل بها يوميًا مدمجة في النظام.',
    moreDetailsLabel: 'تفاصيل أكثر',
    items: [
      { title: 'واتساب', description: 'إرسال عروض الأسعار والفواتير والإيصالات مباشرة برابط آمن، دون الحاجة لحساب أو تسجيل دخول من العميل.' },
      { title: 'البريد الإلكتروني', description: 'إرسال أي مستند عبر بريدك الخاص بقوالب رسائل قابلة للتخصيص الكامل.' },
      { title: 'Excel / CSV', description: 'استيراد جماعي لبياناتك القديمة بمعاينة كاملة قبل التنفيذ، وتصدير أي تقرير أو قائمة بضغطة واحدة.' },
      { title: 'Cloudflare R2 / Amazon S3', description: 'نسخ احتياطي سحابي متوافق، إضافة إلى النسخ المحلي التلقائي اليومي.' },
    ],
  },
  en: {
    heading: 'Integrates with the tools your team already uses',
    subheading: "No new systems to learn and no extra third-party tools required — the channels and files you already work with every day are built in.",
    moreDetailsLabel: 'More Details',
    items: [
      { title: 'WhatsApp', description: 'Send quotations, invoices, and receipts directly via a secure link — no account or login required from the customer.' },
      { title: 'Email', description: 'Send any document through your own email with fully customizable message templates.' },
      { title: 'Excel / CSV', description: 'Bulk-import your old data with a full preview before committing, and export any report or list in one click.' },
      { title: 'Cloudflare R2 / Amazon S3', description: 'Compatible cloud backup, alongside automatic daily local backups.' },
    ],
  },
};
