import type { Lang } from './nav';

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalPage {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
  ctaTitle: string;
}

export const privacyPage: Record<Lang, LegalPage> = {
  ar: {
    eyebrow: 'سياسة الخصوصية',
    title: 'سياسة الخصوصية',
    description: 'كيف نجمع بيانات زوار موقعنا ومستخدمي نظام مِرآب، وكيف نستخدمها ونحميها.',
    lastUpdated: 'آخر تحديث: سبتمبر 2026',
    ctaTitle: 'لديك سؤال حول خصوصية بياناتك؟',
    sections: [
      {
        title: 'نطاق هذه السياسة',
        paragraphs: [
          'تشرح هذه السياسة كيفية تعاملنا مع البيانات في حالتين منفصلتين: بياناتك كزائر لموقعنا التسويقي، وبيانات ورشتك وعملائها عند استخدامك نظام مِرآب فعليًا.',
          'عند استخدامك نظام مِرآب لإدارة ورشتك، تبقى أنت (صاحب الورشة) الجهة المسؤولة عن بيانات عملائك التي تُدخلها في النظام (المتحكم بالبيانات)، بينما نقوم نحن بتخزين هذه البيانات ومعالجتها نيابة عنك بصفتنا معالج بيانات، وفق تعليماتك واتفاقية الاستخدام.',
        ],
      },
      {
        title: 'البيانات التي نجمعها',
        paragraphs: ['نجمع نوعين مختلفين من البيانات:'],
        bullets: [
          'بيانات زوار الموقع: فقط عند إرسالك نموذج التواصل طوعًا (الاسم، رقم الهاتف، ونص رسالتك). لا نستخدم حاليًا أدوات تحليل زوار أو ملفات تعريف ارتباط للتتبع على هذا الموقع.',
          'بيانات استخدام نظام مِرآب: البيانات التي يُدخلها فريقك في النظام أثناء العمل — بيانات العملاء والسيارات، بطاقات العمل، عروض الأسعار، الفواتير والمدفوعات — بالإضافة لبيانات حساب مستخدمي النظام (الاسم، البريد الإلكتروني، الدور الوظيفي).',
        ],
      },
      {
        title: 'كيف نستخدم البيانات',
        bullets: [
          'الرد على استفساراتك المرسلة عبر نموذج التواصل.',
          'تشغيل نظام مِرآب وتوفير وظائفه لورشتك (تخزين، بحث، إصدار مستندات، تقارير).',
          'إرسال المستندات (عروض أسعار، فواتير، إيصالات) عبر البريد الإلكتروني أو واتساب بناءً على طلبك المباشر.',
          'حماية النظام من الاستخدام غير المصرح به ومراقبة الأداء التقني.',
        ],
      },
      {
        title: 'أمان البيانات',
        paragraphs: ['نعتمد على مجموعة من الإجراءات التقنية الحقيقية لحماية البيانات المخزّنة في النظام:'],
        bullets: [
          'صلاحيات دقيقة لكل مستخدم حسب دوره الوظيفي.',
          'مصادقة ثنائية العامل (2FA) لتسجيل الدخول.',
          'حماية من هجمات CSRF وجلسات دخول آمنة (Secure Cookies).',
          'نسخ احتياطي تلقائي يومي، محليًا وسحابيًا (متوافق مع Cloudflare R2 / Amazon S3).',
        ],
      },
      {
        title: 'مشاركة البيانات مع أطراف ثالثة',
        paragraphs: [
          'لا نبيع بياناتك أو بيانات عملائك لأي طرف ثالث. تُشارك البيانات فقط عند إرسالك مستندًا لعميلك عبر البريد الإلكتروني أو واتساب بناءً على طلبك المباشر، أو عند التزامنا بمتطلبات قانونية من جهة رسمية مختصة.',
        ],
      },
      {
        title: 'الاحتفاظ بالبيانات',
        paragraphs: [
          'نحتفظ ببياناتك طوال فترة استخدامك النشط لنظام مِرآب. عند إنهاء الاشتراك، يمكنك طلب تصدير بياناتك أو حذفها نهائيًا وفق مدة احتفاظ قابلة للتخصيص يتم الاتفاق عليها معك.',
        ],
      },
      {
        title: 'حقوقك تجاه بياناتك',
        paragraphs: ['يحق لك في أي وقت:'],
        bullets: [
          'طلب نسخة من بياناتك المخزّنة لدينا.',
          'طلب تصحيح أي بيانات غير دقيقة.',
          'طلب حذف بياناتك نهائيًا، مع مراعاة أي التزامات احتفاظ قانونية أو محاسبية سارية.',
        ],
      },
      {
        title: 'ملفات تعريف الارتباط (Cookies)',
        paragraphs: [
          'لا يستخدم هذا الموقع التسويقي حاليًا ملفات تعريف ارتباط للتتبع أو الإعلانات. عند استخدامك نظام مِرآب الفعلي، يُستخدم ملف تعريف ارتباط واحد فقط لإدارة جلسة تسجيل الدخول الآمنة، وهو ضروري لعمل النظام ولا يُستخدم لأي غرض تسويقي.',
        ],
      },
      {
        title: 'التعديلات على هذه السياسة',
        paragraphs: ['قد نحدّث هذه السياسة من وقت لآخر لتعكس تغييرات في خدماتنا أو المتطلبات القانونية. سيظهر تاريخ آخر تحديث أعلى هذه الصفحة.'],
      },
      {
        title: 'التواصل معنا',
        paragraphs: ['لأي استفسار بخصوص هذه السياسة أو بياناتك، يمكنك التواصل معنا عبر صفحة التواصل.'],
      },
    ],
  },
  en: {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    description: 'How we collect data from our website visitors and Mirab system users, and how we use and protect it.',
    lastUpdated: 'Last updated: September 2026',
    ctaTitle: 'Have a question about your data privacy?',
    sections: [
      {
        title: 'Scope of this policy',
        paragraphs: [
          'This policy explains how we handle data in two separate situations: your data as a visitor to our marketing website, and your garage’s and customers’ data when you actually use the Mirab system.',
          'When you use Mirab to run your garage, you (the garage owner) remain responsible for the customer data you enter into the system (the data controller), while we store and process that data on your behalf as a data processor, under your instructions and the usage agreement.',
        ],
      },
      {
        title: 'Data we collect',
        paragraphs: ['We collect two distinct types of data:'],
        bullets: [
          'Website visitor data: only when you voluntarily submit the contact form (your name, phone number, and message). We do not currently use visitor analytics tools or tracking cookies on this website.',
          'Mirab system usage data: the data your team enters into the system during daily work — customer and vehicle records, job cards, quotations, invoices, and payments — plus account data for system users (name, email, role).',
        ],
      },
      {
        title: 'How we use data',
        bullets: [
          'Responding to inquiries submitted through the contact form.',
          "Operating the Mirab system and providing its functionality to your garage (storage, search, document generation, reports).",
          'Sending documents (quotations, invoices, receipts) via email or WhatsApp at your direct request.',
          'Protecting the system from unauthorized use and monitoring technical performance.',
        ],
      },
      {
        title: 'Data security',
        paragraphs: ['We rely on a set of real, implemented technical measures to protect data stored in the system:'],
        bullets: [
          'Fine-grained permissions for each user based on their role.',
          'Two-factor authentication (2FA) for login.',
          'CSRF attack protection and secure login sessions (secure cookies).',
          'Automatic daily backups, both local and cloud (Cloudflare R2 / Amazon S3 compatible).',
        ],
      },
      {
        title: 'Sharing data with third parties',
        paragraphs: [
          'We do not sell your data or your customers’ data to any third party. Data is only shared when you send a document to your customer via email or WhatsApp at your direct request, or when we are legally required to do so by a competent authority.',
        ],
      },
      {
        title: 'Data retention',
        paragraphs: [
          'We retain your data for as long as you actively use the Mirab system. Once you end your subscription, you may request an export of your data or its permanent deletion, subject to a configurable retention period agreed with you.',
        ],
      },
      {
        title: 'Your rights over your data',
        paragraphs: ['At any time, you have the right to:'],
        bullets: [
          'Request a copy of the data we hold about you.',
          'Request correction of any inaccurate data.',
          'Request permanent deletion of your data, subject to any applicable legal or accounting retention obligations.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: [
          'This marketing website does not currently use tracking or advertising cookies. When you use the actual Mirab system, a single cookie is used to manage a secure login session — it is required for the system to function and is not used for any marketing purpose.',
        ],
      },
      {
        title: 'Changes to this policy',
        paragraphs: ['We may update this policy from time to time to reflect changes to our services or legal requirements. The "last updated" date at the top of this page will change accordingly.'],
      },
      {
        title: 'Contact us',
        paragraphs: ['For any question about this policy or your data, you can reach us through the contact page.'],
      },
    ],
  },
};

export const termsPage: Record<Lang, LegalPage> = {
  ar: {
    eyebrow: 'الشروط والأحكام',
    title: 'الشروط والأحكام',
    description: 'الشروط التي تحكم استخدامك لموقعنا ولنظام مِرآب لإدارة الكراجات.',
    lastUpdated: 'آخر تحديث: سبتمبر 2026',
    ctaTitle: 'لديك سؤال حول الشروط والأحكام؟',
    sections: [
      {
        title: 'قبول الشروط',
        paragraphs: ['باستخدامك موقعنا أو تسجيلك للاشتراك في نظام مِرآب، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق عليها، يُرجى عدم استخدام الموقع أو النظام.'],
      },
      {
        title: 'وصف الخدمة',
        paragraphs: ['مِرآب نظام سحابي لإدارة ورش ومراكز صيانة السيارات، يشمل إدارة العملاء والسيارات، بطاقات العمل، عروض الأسعار، الفواتير والمدفوعات، والتقارير المالية. يتطلب النظام اتصالًا بالإنترنت للعمل.'],
      },
      {
        title: 'حسابات المستخدمين',
        bullets: [
          'أنت مسؤول عن الحفاظ على سرية بيانات تسجيل الدخول الخاصة بحسابك وحسابات فريقك.',
          'يجب إبلاغنا فورًا عند الاشتباه بأي استخدام غير مصرح به لحسابك.',
          'أنت مسؤول عن صحة البيانات التي يُدخلها فريقك في النظام.',
        ],
      },
      {
        title: 'الاستخدام المقبول',
        paragraphs: ['يُمنع استخدام النظام لأي غرض غير قانوني، أو لمحاولة الوصول غير المصرح به لبيانات مستخدمين آخرين، أو لأي نشاط قد يعطّل عمل النظام أو يضر بمستخدمين آخرين.'],
      },
      {
        title: 'الاشتراك والدفع',
        paragraphs: ['تختلف رسوم الاشتراك حسب حجم الورشة واحتياجاتها. للحصول على عرض سعر مخصص، تواصل معنا عبر صفحة التواصل. أي تفاصيل دفع محددة (دورية الفوترة، طرق الدفع المقبولة، سياسة الاسترجاع) ستُحدَّد في اتفاقية الاشتراك الموقّعة معك.'],
      },
      {
        title: 'الملكية الفكرية',
        paragraphs: ['جميع الحقوق المتعلقة بنظام مِرآب، بما في ذلك التصميم والشيفرة البرمجية والعلامة التجارية، مملوكة لنا. لا يمنحك استخدام النظام أي حق ملكية عليه.'],
      },
      {
        title: 'بيانات ورشتك',
        paragraphs: ['تبقى بيانات عملائك وسياراتك وفواتيرك التي تُدخلها في النظام ملكًا لك. نحن نخزّنها ونعالجها فقط لتقديم الخدمة لك، ولا نستخدمها لأي غرض آخر دون إذنك.'],
      },
      {
        title: 'حدود المسؤولية',
        paragraphs: ['نبذل قصارى جهدنا لضمان توفر النظام وعمله بشكل صحيح، لكننا لا نضمن عملًا خاليًا من الانقطاع أو الأخطاء بنسبة 100%. لا نتحمل مسؤولية أي خسائر غير مباشرة تنتج عن استخدام النظام أو تعطّله، ضمن الحدود التي يسمح بها القانون المعمول به.'],
      },
      {
        title: 'الإنهاء',
        paragraphs: ['يمكنك إنهاء اشتراكك في أي وقت. نحتفظ بالحق في تعليق أو إنهاء أي حساب يخالف هذه الشروط، بعد إشعار مسبق متى أمكن ذلك.'],
      },
      {
        title: 'القانون الحاكم',
        paragraphs: ['تخضع هذه الشروط وتُفسَّر وفقًا لقوانين دولة قطر.'],
      },
      {
        title: 'التعديلات على هذه الشروط',
        paragraphs: ['قد نحدّث هذه الشروط من وقت لآخر. سيظهر تاريخ آخر تحديث أعلى هذه الصفحة، واستمرارك في استخدام الخدمة بعد أي تعديل يُعدّ موافقة عليه.'],
      },
      {
        title: 'التواصل معنا',
        paragraphs: ['لأي استفسار بخصوص هذه الشروط، يمكنك التواصل معنا عبر صفحة التواصل.'],
      },
    ],
  },
  en: {
    eyebrow: 'Terms & Conditions',
    title: 'Terms & Conditions',
    description: 'The terms that govern your use of our website and the Mirab garage management system.',
    lastUpdated: 'Last updated: September 2026',
    ctaTitle: 'Have a question about these terms?',
    sections: [
      {
        title: 'Acceptance of terms',
        paragraphs: ['By using our website or registering for a Mirab subscription, you agree to be bound by these terms and conditions. If you do not agree, please do not use the website or the system.'],
      },
      {
        title: 'Description of the service',
        paragraphs: ['Mirab is a cloud system for managing auto garages and service centers, covering customer and vehicle management, job cards, quotations, invoices and payments, and financial reports. The system requires an internet connection to operate.'],
      },
      {
        title: 'User accounts',
        bullets: [
          'You are responsible for keeping your account credentials, and those of your team, confidential.',
          'You must notify us immediately if you suspect any unauthorized use of your account.',
          'You are responsible for the accuracy of the data your team enters into the system.',
        ],
      },
      {
        title: 'Acceptable use',
        paragraphs: ['You may not use the system for any unlawful purpose, attempt unauthorized access to other users’ data, or engage in any activity that could disrupt the system or harm other users.'],
      },
      {
        title: 'Subscription & payment',
        paragraphs: ['Subscription fees vary by garage size and needs. Contact us through the contact page for a custom quote. Specific payment details (billing cycle, accepted payment methods, refund policy) will be set out in the subscription agreement signed with you.'],
      },
      {
        title: 'Intellectual property',
        paragraphs: ['All rights related to the Mirab system, including its design, source code, and brand, belong to us. Using the system does not grant you any ownership rights over it.'],
      },
      {
        title: 'Your garage’s data',
        paragraphs: ['The customer, vehicle, and invoice data you enter into the system remains yours. We store and process it only to provide the service to you, and do not use it for any other purpose without your permission.'],
      },
      {
        title: 'Limitation of liability',
        paragraphs: ['We make every reasonable effort to keep the system available and working correctly, but we do not guarantee 100% uninterrupted or error-free operation. We are not liable for indirect losses arising from use of, or disruption to, the system, to the extent permitted by applicable law.'],
      },
      {
        title: 'Termination',
        paragraphs: ['You may cancel your subscription at any time. We reserve the right to suspend or terminate any account that violates these terms, with prior notice where reasonably possible.'],
      },
      {
        title: 'Governing law',
        paragraphs: ['These terms are governed by and construed in accordance with the laws of the State of Qatar.'],
      },
      {
        title: 'Changes to these terms',
        paragraphs: ['We may update these terms from time to time. The "last updated" date at the top of this page will change accordingly, and continued use of the service after a change constitutes acceptance of it.'],
      },
      {
        title: 'Contact us',
        paragraphs: ['For any question about these terms, you can reach us through the contact page.'],
      },
    ],
  },
};
