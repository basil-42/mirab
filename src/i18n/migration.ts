import type { Lang } from './nav';

export interface MigrationStep {
  title: string;
  description: string;
}

export const migrationPage: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    description: string;
    steps: MigrationStep[];
    reassuranceTitle: string;
    reassuranceDescription: string;
    ctaBannerTitle: string;
    ctaBannerLabel: string;
  }
> = {
  ar: {
    eyebrow: 'استيراد وتصدير البيانات',
    title: 'انتقل لمِرآب دون فقدان بياناتك القديمة',
    description: 'استيراد آمن بمعاينة كاملة قبل التنفيذ، ومطابقة ذكية تمنع تكرار العملاء أثناء النقل.',
    steps: [
      {
        title: 'ارفع ملف Excel/CSV',
        description: 'استيراد مئات أو آلاف السجلات دفعة واحدة — عملاء، فواتير، بطاقات عمل، عروض أسعار.',
      },
      {
        title: 'عاين قبل التنفيذ (Dry Run)',
        description: 'معاينة كاملة للنتائج قبل أي تنفيذ فعلي — لا تغييرات مفاجئة على بياناتك.',
      },
      {
        title: 'مطابقة تلقائية للعملاء',
        description: 'مطابقة السجلات المستوردة مع العملاء الحاليين عبر رقم الهاتف، لمنع التكرار.',
      },
      {
        title: 'جاهز للعمل',
        description: 'بياناتك القديمة الآن داخل مِرآب، منظمة وجاهزة من أول يوم.',
      },
    ],
    reassuranceTitle: 'بياناتك تبقى لك دائمًا',
    reassuranceDescription:
      'تصدير كامل لأي قائمة أو تقرير — العملاء، الفواتير، سجل التدقيق — إلى ملفات CSV أو Excel جاهزة للاستخدام خارج النظام، في أي وقت تحتاجه.',
    ctaBannerTitle: 'انقل بيانات ورشتك بأمان في دقائق.',
    ctaBannerLabel: 'ابدأ الآن مجانًا',
  },
  en: {
    eyebrow: 'Data Import & Export',
    title: 'Switch to Mirab without losing your old data',
    description: 'Safe import with a full preview before committing, and smart matching that prevents duplicate customers during the move.',
    steps: [
      {
        title: 'Upload your Excel/CSV file',
        description: 'Import hundreds or thousands of records at once — customers, invoices, job cards, quotations.',
      },
      {
        title: 'Preview before committing (dry run)',
        description: 'A full preview of the outcome before anything is actually executed — no surprise changes to your data.',
      },
      {
        title: 'Automatic customer matching',
        description: 'Imported records are matched against existing customers by phone number, preventing duplicates.',
      },
      {
        title: 'Ready to work',
        description: 'Your old data is now inside Mirab, organized and ready from day one.',
      },
    ],
    reassuranceTitle: 'Your data always stays yours',
    reassuranceDescription:
      'Full export of any list or report — customers, invoices, audit log — to ready-to-use CSV or Excel files outside the system, whenever you need it.',
    ctaBannerTitle: "Move your garage's data safely, in minutes.",
    ctaBannerLabel: 'Try It Free',
  },
};
