export type Lang = 'ar' | 'en';

export interface NavItem {
  label: string;
  slug: string; // '' for home, otherwise path segment without leading slash
}

export interface FeatureItem extends NavItem {
  blurb: string;
}

export const siteName: Record<Lang, { full: string; short: string }> = {
  ar: { full: 'مِرآب', short: 'مِرآب' },
  en: { full: 'Mirab', short: 'Mirab' },
};

export const tagline: Record<Lang, string> = {
  ar: 'نظام إدارة كراج شامل',
  en: 'Complete Garage Management System',
};

export const nav: Record<Lang, { home: string; features: string; pricing: string; why: string; faq: string; contact: string; tryFree: string; login: string; migrationGuide: string; comparison: string; about: string }> = {
  ar: {
    home: 'الرئيسية',
    features: 'المميزات',
    pricing: 'التسعير',
    why: 'لماذا هذا النظام',
    faq: 'الأسئلة الشائعة',
    contact: 'تواصل معنا',
    tryFree: 'جرّب الآن مجانًا',
    login: 'تسجيل الدخول',
    migrationGuide: 'دليل الانتقال',
    comparison: 'المقارنة',
    about: 'عن مِرآب',
  },
  en: {
    home: 'Home',
    features: 'Features',
    pricing: 'Pricing',
    why: 'Why This System',
    faq: 'FAQ',
    contact: 'Contact',
    tryFree: 'Try It Free',
    login: 'Log In',
    migrationGuide: 'Migration Guide',
    comparison: 'Comparison',
    about: 'About',
  },
};

export const featureItems: Record<Lang, FeatureItem[]> = {
  ar: [
    { slug: 'features', label: 'المميزات الأساسية', blurb: 'إدارة العملاء، السيارات، بطاقات العمل والفواتير' },
    { slug: 'billing', label: 'الفوترة والتقارير المالية', blurb: 'لوحة تحكم حية وتقارير قابلة للتصدير' },
    { slug: 'inspection', label: 'فحص السيارة والصيانة', blurb: 'مخطط فحص تفاعلي وتذكيرات صيانة' },
    { slug: 'automation', label: 'الأتمتة والتواصل', blurb: 'إرسال عبر البريد وواتساب، إجراءات جماعية' },
    { slug: 'security', label: 'الأمان وإدارة الصلاحيات', blurb: 'أدوار دقيقة، 2FA، نسخ احتياطي سحابي' },
    { slug: 'data', label: 'استيراد وتصدير البيانات', blurb: 'استيراد CSV جماعي مع معاينة قبل التنفيذ' },
    { slug: 'integrations', label: 'التكاملات', blurb: 'واتساب، البريد، Excel/CSV، والنسخ الاحتياطي السحابي' },
  ],
  en: [
    { slug: 'features', label: 'Core Features', blurb: 'Customers, vehicles, job cards & invoices' },
    { slug: 'billing', label: 'Billing & Financial Reports', blurb: 'Live dashboard and exportable reports' },
    { slug: 'inspection', label: 'Vehicle Inspection & Maintenance', blurb: 'Interactive diagram and service reminders' },
    { slug: 'automation', label: 'Automation & Communication', blurb: 'Email & WhatsApp delivery, bulk actions' },
    { slug: 'security', label: 'Security & Access Control', blurb: 'Fine-grained roles, 2FA, cloud backups' },
    { slug: 'data', label: 'Data Import & Export', blurb: 'Bulk CSV import with dry-run preview' },
    { slug: 'integrations', label: 'Integrations', blurb: 'WhatsApp, email, Excel/CSV, and cloud backups' },
  ],
};

export const footerText: Record<Lang, { rights: string; sitemap: string; company: string }> = {
  ar: {
    rights: 'جميع الحقوق محفوظة',
    sitemap: 'خريطة الموقع',
    company: 'نظام سحابي ثنائي اللغة لإدارة ورش ومراكز صيانة السيارات في قطر والخليج.',
  },
  en: {
    rights: 'All rights reserved',
    sitemap: 'Sitemap',
    company: 'A bilingual cloud system for managing auto garages and service centers across Qatar and the Gulf.',
  },
};

export const legalNav: Record<Lang, { privacy: string; terms: string }> = {
  ar: { privacy: 'سياسة الخصوصية', terms: 'الشروط والأحكام' },
  en: { privacy: 'Privacy Policy', terms: 'Terms & Conditions' },
};
