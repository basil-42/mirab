import type { Lang } from './nav';

export interface FAQItem {
  q: string;
  a: string;
}

export const faqPage: Record<Lang, { eyebrow: string; title: string; description: string; items: FAQItem[]; ctaTitle: string }> = {
  ar: {
    eyebrow: 'الأسئلة الشائعة',
    title: 'أسئلة يطرحها أصحاب الورش قبل البدء',
    description: 'إجابات مباشرة على أكثر الأسئلة تكرارًا حول الأمان، النقل من نظام قديم، والعمل اليومي.',
    items: [
      {
        q: 'هل بيانات ورشتنا وعملائنا آمنة؟',
        a: 'نعم. النظام يعتمد أدوارًا وصلاحيات دقيقة لكل مستخدم، مصادقة ثنائية العامل (2FA)، حماية من هجمات CSRF وجلسات آمنة، بالإضافة إلى نسخ احتياطي تلقائي يومي محلي وسحابي (متوافق مع Cloudflare R2 / Amazon S3) مع إمكانية استرداد كامل.',
      },
      {
        q: 'هل يمكن نقل بياناتنا الحالية من Excel أو نظام قديم؟',
        a: 'نعم. يدعم النظام استيرادًا جماعيًا عبر ملفات CSV/Excel لمئات أو آلاف السجلات دفعة واحدة (عملاء، فواتير، بطاقات عمل)، مع معاينة كاملة قبل التنفيذ (Dry Run) ومطابقة ذكية تمنع تكرار العملاء أثناء النقل. راجع دليل الانتقال لتفاصيل كل خطوة.',
      },
      {
        q: 'النظام سحابي — ماذا لو انقطع الاتصال بالإنترنت؟',
        a: 'مِرآب نظام سحابي يتطلب اتصالاً بالإنترنت للعمل، مثل أي نظام SaaS حديث. لحماية بياناتك بشكل مستقل عن ذلك، يحتفظ النظام بنسخ احتياطية تلقائية محلية وسحابية بشكل دوري، بمدة احتفاظ قابلة للتخصيص.',
      },
      {
        q: 'هل يدعم النظام العربية والإنجليزية بشكل كامل؟',
        a: 'نعم، الواجهة بالكامل ثنائية اللغة (عربي/إنجليزي) — المستندات، التقارير، والفواتير قابلة للإصدار بأي من اللغتين حسب الحاجة.',
      },
      {
        q: 'هل يوجد حد لعدد المستخدمين أو الفنيين؟',
        a: 'لا. النظام مصمم للتوسع مع نمو الورشة — عدد غير محدود من الفنيين والمستخدمين والأدوار المخصصة، دون قيود اصطناعية على النمو.',
      },
      {
        q: 'ما تكلفة الاشتراك في مِرآب؟',
        a: 'تختلف التكلفة حسب حجم الورشة. راجع صفحة التسعير واحجز موعدًا مباشرًا للحصول على عرض توضيحي مجاني وعرض سعر مخصص.',
      },
    ],
    ctaTitle: 'لم تجد إجابة سؤالك؟ تواصل معنا مباشرة.',
  },
  en: {
    eyebrow: 'FAQ',
    title: 'Questions garage owners ask before getting started',
    description: 'Direct answers to the most common questions about security, migrating from an old system, and day-to-day use.',
    items: [
      {
        q: 'Is our garage and customer data secure?',
        a: 'Yes. The system uses fine-grained roles and permissions per user, two-factor authentication (2FA), CSRF protection and secure sessions, plus automatic daily local and cloud backups (compatible with Cloudflare R2 / Amazon S3) with full restore capability.',
      },
      {
        q: 'Can we migrate our existing data from Excel or an old system?',
        a: 'Yes. The system supports bulk CSV/Excel import for hundreds or thousands of records at once (customers, invoices, job cards), with a full preview before execution (dry run) and smart customer matching to prevent duplicates during migration. See the migration guide for a full step-by-step walkthrough.',
      },
      {
        q: "It's a cloud system — what happens if the internet connection drops?",
        a: 'Mirab is a cloud system and requires an internet connection to operate, like any modern SaaS platform. To protect your data independently of connectivity, the system keeps automatic local and cloud backups on a regular schedule, with a configurable retention period.',
      },
      {
        q: 'Does the system fully support both Arabic and English?',
        a: 'Yes, the entire interface is bilingual (Arabic/English) — documents, reports, and invoices can be generated in either language as needed.',
      },
      {
        q: 'Is there a limit on the number of users or technicians?',
        a: 'No. The system is built to scale as your garage grows — unlimited technicians, users, and custom roles, with no artificial growth limits.',
      },
      {
        q: 'How much does Mirab cost?',
        a: "Pricing depends on your garage's size. Check the pricing page and book a meeting directly for a free demo and a custom quote.",
      },
    ],
    ctaTitle: "Didn't find your answer? Reach out directly.",
  },
};
