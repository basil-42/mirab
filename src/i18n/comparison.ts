import type { Lang } from './nav';

export interface ComparisonRow {
  before: string;
  after: string;
  afterDetail: string;
}

export const comparisonPage: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    rows: ComparisonRow[];
    ctaBannerTitle: string;
    ctaBannerLabel: string;
  }
> = {
  ar: {
    eyebrow: 'مقارنة تفصيلية',
    title: 'الطريقة التقليدية مقابل مِرآب',
    description: 'نفس العمل اليومي لورشتك — بأثر مختلف تمامًا على وقتك ودقتك.',
    beforeLabel: 'الطريقة التقليدية',
    afterLabel: 'مع مِرآب',
    rows: [
      {
        before: 'دفاتر وأوراق متناثرة لكل سيارة',
        after: 'بطاقة عمل رقمية موحدة لكل سيارة وعميل',
        afterDetail: 'تتحول بضغطة واحدة إلى فاتورة عند اكتمال العمل، مع ربط تلقائي بعرض السعر الأصلي إن وُجد.',
      },
      {
        before: 'رسائل واتساب متفرقة بلا سجل منظم',
        after: 'إرسال المستندات من النظام مباشرة مع سجل كامل',
        afterDetail: 'رابط مباشر للمستند دون الحاجة لتسجيل دخول العميل، بنص رسالة جاهز وقابل للتخصيص الكامل.',
      },
      {
        before: 'حساب الفواتير يدويًا وعرضة للخطأ',
        after: 'فواتير محسوبة تلقائيًا بحالة محدثة لحظيًا',
        afterDetail: 'الحالة تُحسب تلقائيًا (مسودة، مُرسلة، جزئية، مسدَّدة، متأخرة) بناءً على المدفوعات الفعلية.',
      },
      {
        before: 'ملاحظات فحص نصية قابلة للنسيان أو سوء الفهم',
        after: 'مخطط فحص بصري تفاعلي موثّق لكل سيارة',
        afterDetail: '٢٩ منطقة قابلة للنقر على كل جوانب السيارة، تظهر كاملة داخل بطاقة العمل المطبوعة.',
      },
      {
        before: 'نسخ احتياطي يدوي أو غير موجود أصلاً',
        after: 'نسخ احتياطي تلقائي يومي محلي وسحابي',
        afterDetail: 'مع إمكانية استرداد كامل من أي نسخة سابقة، ومدة احتفاظ قابلة للتخصيص.',
      },
      {
        before: 'تتبع رصيد العميل يدويًا بين دفاتر متعددة',
        after: 'رصيد العميل محدث تلقائيًا مع كل معاملة',
        afterDetail: 'رصيد إضافي (Credit) يُستخدم تلقائيًا في معاملات العميل القادمة، بدل تتبع يدوي عرضة للخطأ.',
      },
    ],
    ctaBannerTitle: 'اكتشف الفرق بنفسك — جرّب مِرآب اليوم.',
    ctaBannerLabel: 'ابدأ الآن مجانًا',
  },
  en: {
    eyebrow: 'Detailed Comparison',
    title: 'The Old Way vs. Mirab',
    description: "Same daily garage work — completely different impact on your time and accuracy.",
    beforeLabel: 'The Old Way',
    afterLabel: 'With Mirab',
    rows: [
      {
        before: 'Scattered notebooks and paper for each car',
        after: 'One unified digital job card per car and customer',
        afterDetail: 'Converts to an invoice in a single click once work is complete, with automatic linkage back to the originating quotation.',
      },
      {
        before: 'Scattered WhatsApp messages with no organized record',
        after: 'Documents sent straight from the system with a full log',
        afterDetail: 'A direct link to the document with no customer login required, using a ready, fully customizable message text.',
      },
      {
        before: 'Invoices calculated by hand, prone to errors',
        after: 'Invoices calculated automatically, status updated live',
        afterDetail: 'Status is computed automatically (draft, sent, partial, paid, overdue) based on actual payments received.',
      },
      {
        before: 'Text inspection notes that get forgotten or misread',
        after: 'A documented, visual inspection diagram for every car',
        afterDetail: '29 clickable zones covering every side of the vehicle, appearing in full inside the printed job card.',
      },
      {
        before: 'Manual backups, or none at all',
        after: 'Automatic daily local and cloud backups',
        afterDetail: 'With full restore from any previous backup when needed, and a configurable retention period.',
      },
      {
        before: 'Customer balances tracked by hand across notebooks',
        after: "Customer balance updated automatically with every transaction",
        afterDetail: "An additional credit balance used automatically in the customer's future transactions, instead of error-prone manual tracking.",
      },
    ],
    ctaBannerTitle: 'See the difference for yourself — try Mirab today.',
    ctaBannerLabel: 'Try It Free',
  },
};
