import type { Lang } from './nav';

export type IntegrationIcon = 'whatsapp' | 'email' | 'excel' | 'cloud' | 'link';

export interface IntegrationRow {
  icon: IntegrationIcon;
  title: string;
  points: string[];
}

export const integrationsPage: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    description: string;
    rows: IntegrationRow[];
    ctaBannerTitle: string;
    ctaBannerLabel: string;
  }
> = {
  ar: {
    eyebrow: 'التكاملات',
    title: 'يتكامل مع الأدوات التي يستخدمها فريقك بالفعل',
    description:
      'لا حاجة لتعلم أنظمة جديدة أو الاعتماد على حلول خارجية إضافية — القنوات والملفات التي تعمل بها يوميًا مدمجة في النظام.',
    rows: [
      {
        icon: 'whatsapp',
        title: 'واتساب',
        points: [
          'إرسال عروض الأسعار والفواتير والإيصالات مباشرة برابط آمن، دون الحاجة لحساب أو تسجيل دخول من العميل.',
          'نص رسالة جاهز وقابل للتخصيص الكامل، مع رابط مباشر للمستند.',
        ],
      },
      {
        icon: 'email',
        title: 'البريد الإلكتروني',
        points: [
          'إرسال أي مستند (عرض سعر، فاتورة، بطاقة عمل، إيصال، كشف حساب) مباشرة للعميل عبر بريدك الخاص.',
          'قوالب رسائل قابلة للتخصيص الكامل لكل نوع مستند.',
        ],
      },
      {
        icon: 'excel',
        title: 'Excel / CSV',
        points: [
          'استيراد جماعي لبياناتك القديمة (عملاء، فواتير، بطاقات عمل، عروض أسعار) بمعاينة كاملة قبل التنفيذ (Dry Run).',
          'تصدير أي تقرير أو قائمة بيانات مباشرة إلى Excel أو CSV بضغطة واحدة.',
        ],
      },
      {
        icon: 'cloud',
        title: 'Cloudflare R2 / Amazon S3',
        points: [
          'نسخ احتياطي سحابي متوافق، إضافة إلى النسخ المحلي التلقائي اليومي.',
          'استرداد كامل من أي نسخة سابقة، ومدة احتفاظ قابلة للتخصيص.',
        ],
      },
      {
        icon: 'link',
        title: 'روابط مشاركة آمنة',
        points: [
          'رابط آمن ومحدود الصلاحية لكل مستند، يسمح للعميل بعرض وتحميل الفاتورة أو العرض دون أي حساب أو كلمة مرور.',
        ],
      },
    ],
    ctaBannerTitle: 'جاهز لربط أدواتك بمِرآب؟',
    ctaBannerLabel: 'ابدأ الآن مجانًا',
  },
  en: {
    eyebrow: 'Integrations',
    title: 'Integrates with the tools your team already uses',
    description:
      "No new systems to learn and no extra third-party tools required — the channels and files you already work with every day are built in.",
    rows: [
      {
        icon: 'whatsapp',
        title: 'WhatsApp',
        points: [
          'Send quotations, invoices, and receipts directly via a secure link — no account or login required from the customer.',
          'A ready, fully customizable message text, with a direct link to the document.',
        ],
      },
      {
        icon: 'email',
        title: 'Email',
        points: [
          'Send any document (quotation, invoice, job card, receipt, statement) directly to the customer via your own email.',
          'Fully customizable message templates for every document type.',
        ],
      },
      {
        icon: 'excel',
        title: 'Excel / CSV',
        points: [
          'Bulk-import your old data (customers, invoices, job cards, quotations) with a full preview before committing (dry run).',
          'Export any report or data list directly to Excel or CSV in one click.',
        ],
      },
      {
        icon: 'cloud',
        title: 'Cloudflare R2 / Amazon S3',
        points: [
          'Compatible cloud backup, alongside automatic daily local backups.',
          'Full restore from any previous backup, and a configurable retention period.',
        ],
      },
      {
        icon: 'link',
        title: 'Secure Share Links',
        points: [
          'A secure, scoped link for every document, allowing the customer to view and download the invoice or quotation without any account or password.',
        ],
      },
    ],
    ctaBannerTitle: 'Ready to connect your tools to Mirab?',
    ctaBannerLabel: 'Try It Free',
  },
};
