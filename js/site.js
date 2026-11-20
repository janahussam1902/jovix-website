(function () {
  "use strict";
  document.getElementById("year").textContent = new Date().getFullYear();

  var AR = {
    nav1: "خدماتنا", nav2: "AI لفريقك", nav3: "شغلنا", nav4: "ليه Jovix", nav5: "تواصل معنا", wa: "واتساب",
    h_label: "بنحل مشاكل الشغل في شركتك",
 h_2: "والحل علينا.",
    h_lead: "احكيلنا إيه اللي معطّل شغلك، وإحنا نبني الحل: وكلاء ذكاء اصطناعي، أتمتة، موقع أقوى، أو أدوات تشتغل فوق الـ Odoo اللي عندك. شغل كان بياخد ساعات يخلص في دقايق، وبنفضل معاك بعد التسليم.",
    fx_label: "بنحل إيه", fx_h: "أي حاجة في شركتك بطيئة، أو يدوية، أو بتضيّع عليك عملاء، بنبنيلها حل.",
    fx1t: "أتمتة", fx1p: "ساعات بتضيع في نقل بيانات بين الشيتات والسيستم", fx1s: "الأتمتة تخلّصه في دقايق ومن غير غلط",
    fx2t: "وكلاء AI", fx2p: "العملاء بيستنوا ساعات لحد ما حد يرد على الواتساب", fx2s: "وكيل AI بيرد فورًا، ليل ونهار",
    fx3t: "مواقع", fx3p: "موقع ضعيف ومش بروفيشنال والعملاء بتمشي بسببه", fx3s: "موقع قوي معمول على مقاس شغلك يكسب ثقتهم",
    fx4t: "Odoo", fx4p: "عندك Odoo بس الفريق لسه بيشتغل بره السيستم", fx4s: "بنظبطه ونزوّد عليه لحد ما يمشي على طريقة شغلك",
    fxs1: "تشرحلنا المشكلة", fxs2: "نبنيلك الحل على مقاسها", fxs3: "ونفضل معاك بعد التسليم",
    h_cta1: "ابدأ مشروعك", h_cta2: "شوف شغلنا", h_s1: "أول مكالمة مجانية", h_s2: "عرض مكتوب", h_s3: "عربي وإنجليزي",
    h_cap: "وكيل خدمة عملاء بيرد على الطلبات في واتساب", demo: "بيانات تجريبية",
    f1b: "Odoo من 14 لـ 19", f1s: "تسطيب وموديولات مخصصة وتحديث نسخ",
    f2b: "عربي وإنجليزي", f2s: "الشاشات والمستندات والدعم",
    f3b: "سعر ثابت ومكتوب", f3s: "متفق عليه قبل ما الشغل يبدأ",
    f4b: "ملكك من أول يوم", f4s: "الكود والبيانات والحسابات باسمك",
    sv_label: "بنعمل إيه", sv_h: "خمس أنواع شغل، وفريق واحد شايف إزاي بيتربطوا ببعض",
    sv_p: "أغلب المشاكل بتلمس أكتر من نوع. مشكلة في المبيعات ممكن تحتاج تعديل في النظام وأتمتة وفورم على الموقع، علشان كده بنبص على الصورة كاملة الأول.",
    s1h: "Odoo وأنظمة إدارة الأعمال", s1p: "المبيعات والمخازن والحسابات والتصنيع والموارد البشرية والمرتبات، متظبطة على طريقة شغلك، وموديولات مخصصة لما الجاهز ميكفيش.",
    s1t1: "تسطيب وتشغيل", s1t2: "موديولات مخصصة", s1t3: "تحديث نسخ", s1t4: "تقارير",
    s2h: "الأتمتة", s2p: "الخطوات المتكررة بتمشي لوحدها: المستندات بتتقري، والسجلات بتتعمل، والموافقات بتتطلب، والتقارير بتوصل في ميعادها.",
    s2t1: "إدخال بيانات", s2t2: "موافقات", s2t3: "تقارير مجدولة", s2t4: "ربط الأنظمة",
    s3h: "وكلاء الذكاء الاصطناعي", s3p: "كل وكيل ليه مهمة واحدة واضحة، بيشتغل جوه أنظمتك بالعربي أو الإنجليزي، وكل خطوة بيعملها متسجلة للمراجعة.",
    s3t1: "واتساب", s3t2: "خدمة العملاء", s3t3: "التوظيف", s3t4: "إدخال البيانات",
    s4h: "حلول AI مناسبة لدورك", s4p: "ذكاء اصطناعي متفصّل على شغل فريق بعينه، من الـ HR للحسابات للإدارة، وبيشتغل من بياناتك إنت.",
    s4t1: "الموارد البشرية", s4t2: "المبيعات", s4t3: "الحسابات", s4t4: "التشغيل", s4t5: "الإدارة",
    s5h: "مواقع الشركات", s5p: "مواقع بلغتين وبهوية شركتك، بتجيب طلبات وتبعتها على طول للواتساب أو نظام العملاء.",
    s5t1: "عربي وإنجليزي", s5t2: "استقبال الطلبات", s5t3: "صفحات التوظيف",
    ro_label: "AI لفريقك", ro_h: "ذكاء اصطناعي مناسب للشغل اللي بتعمله فعلًا",
    ro_p: "اختار الفريق وشوف إحنا عادةً بنبنيله إيه. كل حل بيبدأ صغير على بياناتك، وبيكبر لما يثبت إنه مفيد.",
    wk_label: "شغلنا", wk_h: "معمول لشركات حقيقية، وشغال كل يوم",
    wk_p: "أسماء العملاء بنحافظ على سريتها. الفيديوهات تسجيل لنفس نوع الشاشات ببيانات تجريبية.",
    pr_label: "المشروع بيمشي إزاي", pr_h: "أربع خطوات، وإنت شايف كل واحدة",
    pr_p: "دايمًا عارف بيتعمل إيه، وهيتكلف كام، وهيخلص إمتى.",
    p1b: "نفهم", p1p: "مكالمة مجانية، وبعدها وقت مع الناس اللي بتعمل الشغل، علشان نعرف الوقت بيضيع فين.",
    p2b: "نعرض", p2p: "النطاق والمدة وسعر ثابت مكتوب. مفيش حاجة بتبدأ غير بموافقتك.",
    p3b: "نبني", p3p: "نسخة شغالة بدري، وبعدها عرض كل أسبوع علشان توجّه الشغل.",
    p4b: "بنسلّم ونفضل معاك", p4p: "ننقل البيانات وندرّب فريقك، ونفضل معاك على الواتساب بعد التشغيل.",
    tr_label: "ليه Jovix", tr_h: "ليه الشركات بتأمّنا على أنظمتها",
    c1: "تجزئة", c2: "أغذية ومشروبات", c3: "تصنيع", c4: "توزيع", c5: "عقارات", c6: "إعلام وسينما", c7: "تعليم", c8: "موارد بشرية ومرتبات",
    v1b: "المهندس اللي بتكلمه هو اللي بيبني الحل", v1p: "مفيش طبقة مبيعات، ولا تسليم الشغل لناس عمرك ما قابلتهم.",
    v2b: "بتشوف التقدم كل أسبوع", v2p: "عرض حي على بياناتك، فدايمًا عارف الشغل وصل لفين.",
    v3b: "السعر ثابت قبل ما نبدأ", v3p: "أي تغيير بيتفق عليه كتابةً الأول، فالفاتورة عمرها ما هتفاجئك.",
    v4b: "بياناتك سرية", v4p: "صلاحيات على قد اللي الشغل محتاجه بس، واتفاقية سرية وقت ما تطلب.",
    v5b: "عمرك ما هتبقى مربوط بينا", v5p: "الكود والبيانات والحسابات باسمك وموثّقة، فأي مطوّر يقدر يكمّل عليها.",
    fq_label: "أسئلة", fq_h: "قبل ما تكلمنا",
    q1: "إنتوا شركاء Odoo؟", a1: "لأ. إحنا فريق هندسي مستقل. بنشتغل على Odoo كل يوم، وبنستخدم أدوات تانية لما تكون أنسب للمشكلة.",
    q2: "المشروع بيتكلف كام؟", a2: "على حسب النطاق. بعد أول مكالمة مجانية بيوصلك عرض مكتوب بسعر ثابت، فبتبقى عارف الإجمالي قبل أي حاجة تبدأ.",
    q3: "بياخد وقت قد إيه؟", a3: "الأتمتة البسيطة ممكن تجهز في أيام، والنظام الكامل بياخد أسابيع. العرض فيه جدول زمني بمراحل واضحة.",
    q4: "ينفع تشتغلوا على النظام اللي عندنا؟", a4: "أيوه. كتير أسرع نتيجة بتيجي من تطوير أو ربط أو أتمتة اللي بتستخدمه بالفعل.",
    q5: "الذكاء الاصطناعي آمن على بياناتنا؟", a5: "كل وكيل بياخد صلاحية على قد مهمته بس، وكل خطوة بيعملها متسجلة، وأي قرار مهم بيوافق عليه شخص من عندك.",
    q6: "بتعملوا مواقع بالعربي؟", a6: "أيوه، عربي وإنجليزي بتصميم صحيح من اليمين للشمال، ومربوط بالواتساب وباقي أنظمتك.",
    ct_label: "تواصل معنا", ct_h: "قولنا إيه اللي معطّلك", ct_p: "سطرين كفاية. هنرد عليك بطريقة الحل وهياخد إيه.",
    copy: "نسخ", mail: "الإيميل", phone: "الموبايل",
    fn: "اسمك", fc: "الشركة", fneed: "محتاج إيه؟",
    o1: "Odoo أو نظام لإدارة الشركة", o2: "أتمتة الشغل المتكرر", o3: "وكيل ذكاء اصطناعي", o4: "حل AI لفريقي", o5: "موقع للشركة", o6: "لسه مش متأكد",
    fm: "المشكلة في سطرين", fph: "مثلًا: فريقنا بيدخّل 300 فاتورة موردين بإيده كل شهر.",
    fsend: "ابعت على الواتساب", fnote: "رسالتك هتفتح في الواتساب جاهزة للإرسال.",
    ft: "Odoo · موارد بشرية · أتمتة · وكلاء AI · حلول AI · مواقع",
    sv_h: "ست أنواع شغل، وفريق واحد شايف إزاي بيتربطوا ببعض",
    s1p: "التصنيع والحسابات والمبيعات والمشتريات والمخازن واللوجستيات، متظبطة على طريقة شغلك، وموديولات مخصصة لما الجاهز ميكفيش.",
    s1t4: "تصنيع", s1t5: "حسابات", s1t6: "لوجستيات",
    s6h: "الموارد البشرية والمرتبات والتوظيف", s6p: "سياسات الحضور وقواعد المرتبات والـ KPIs والتأمينات متظبطة صح، ومعاها نظام توظيف بيفرز السير الذاتية ويعمل المقابلات الأولى لوحده.",
    s6t1: "الحضور", s6t2: "المرتبات", s6t3: "KPIs", s6t4: "توظيف بالـ AI",
    fl_label: "الأتمتة وهي شغالة", fl_h: "شغل بيمشي لوحده، وكل خطوة متسجلة",
    fl_p: "كل خط تحت ده خطوة كان حد بيعملها بإيده. وكلها متسجلة، فدايمًا عارف إيه اللي حصل وإمتى.",
    fn1: "فورم الموقع", fn1s: "طلب جديد", fn2: "PDF من مورد", fn2s: "فاتورة على الإيميل", fn3: "شيت", fn3s: "استيراد يومي", fn4: "واتساب", fn4s: "طلب من عميل",
    fn5: "دورة الشغل", fn5s: "قواعد ومراجعة وموافقات", fn6: "سجل في Odoo", fn6s: "فاتورة أو عميل أو طلب", fn7: "موافقة", fn7s: "للشخص المناسب",
    fn8: "تنبيه واتساب", fn8s: "للفريق أو العميل", fn9: "تقرير يومي", fn9s: "كل يوم الساعة 8:00",
    ev_h: "اللي بيحصل", ev_live: "مثال حي",
    st1: "موديول ومشروع اتسلموا", st2: "نسخ Odoo، من 14 لـ 19", st3: "مجالات اشتغلنا فيها", st4: "لغتين، عربي وإنجليزي",
    nav6: "أتمتة التوظيف", o0: "أتمتة التوظيف",
    rc_label: "أتمتة التوظيف", rc_h: "توظيف بيمشي لوحده، من الإعلان للقائمة المختصرة",
    rc_p: "بيحل محل عملية التوظيف اليدوية من أولها لآخرها. الـ HR مش هيقرا أكوام سير ذاتية ولا يجري ورا متقدمين، وبيدخل بس في القرار الأخير.",
    rc_one: "مسؤول توظيف واحد كفاية يدير التوظيف للشركة كلها.",
    rc1b: "إعلان الوظيفة بيتكتب لوحده", rc1s: "باسم شركتك، وبيتنشر بلينك تقديم تقدر تشاركه.",
    rc2b: "كل CV بيتفرز", rc2s: "على الوظيفة نفسها، بالعربي أو الإنجليزي، لوظايف المكاتب والحرف زي بعض.",
    rc3b: "المقابلات الأولى بتتعمل لوحدها", rc3s: "بالصوت، في الوقت اللي يناسب المتقدم، والدعوات والتذكيرات بتتبعت بدالك.",
    rc4b: "بتوصلك قائمة مرتبة", rc4s: "بملخص وتقييم لكل متقدم، جاهزة للمقابلة النهائية.",
    rc_watch: "شوفه وهو شغال", rc_bk: "قبل", rc_bv: "أيام في قراية السير الذاتية وحجز المكالمات لكل وظيفة",
    rc_ak: "بعد", rc_av: "قائمة مرتبة مستنياك، من غير ما تتعب",
    rc_w1: "جوه الـ Odoo بتاعك", rc_w1p: "بيتسطب على Odoo بتاعك وبيشتغل مع وظايفك وموقعك وموظفينك.", rc_w1t: "متاح دلوقتي",
    rc_w2: "كمنتج سحابي", rc_w2p: "من غير Odoo. سجّل، انشر وظيفة، وابدأ توظيف.", rc_w2t: "قريبًا",
    rc_cta: "احجز عرض تجريبي", rc_cta2: "سجّل في القائمة الأولى",
    priv: "الخصوصية",
    nav7: "وكلاء AI", skip: "روح للمحتوى", cta_site: "الموقع ده تصميم وتنفيذ فريق Jovix، وموقع شركتك ممكن يطلع كده أو أحسن.",
    cs1: "تبعتلنا المشكلة", cs2: "نكلمك ونفهم الشغل", cs3: "يوصلك عرض مكتوب بسعر ثابت", cs_h: "اللي هيحصل بعد ما تبعت", cube_pre: "بنبني", sysv_cta: "عايز السيستم ده", open_sys: "ادخل جوه السيستم",
    more_link: "شوف الشغل", rc_more: "شوف بيشتغل إزاي", wk_p2: "أكتر من 25 مشروع في Odoo والموارد البشرية والأتمتة والوكلاء والـ AI والمواقع. ودول تلاتة منهم.", wk_all: "شوف كل شغلنا",
    w_t1: "مبيعات العربيات لمصنع مكرونة", w_m1: "Odoo", w_t2: "التوظيف من الإعلان للقائمة المختصرة", w_m2: "الموارد البشرية والتوظيف", w_t3: "وكيل واتساب لموزّع أغذية", w_m3: "وكيل AI",
    br_tag: "بياناتك بتدخل، والقرارات بتطلع",
    hp_h: 'توظيف <span class="warm">بيمشي لوحده</span>', hw_h: "من الإعلان للقائمة المختصرة، في أربع خطوات", hw_p: "الـ HR بيظبط الوظيفة مرة واحدة، وكل اللي بعد كده بيمشي لوحده لحد المقابلة النهائية.",
    who_h: "معمول على طريقة التوظيف في مصر", who1b: "وظايف المكاتب والحرف", who1p: "محاسبين ومندوبين، وسواقين وجزارين وفنيين. الـ CV العربي القصير بيتقري بنفس الاهتمام زي الإنجليزي الطويل.",
    who2b: "عربي وإنجليزي، بالصوت", who2p: "المقابلات الأولى بالعربي المصري أو الإنجليزي، في الوقت اللي يناسب المتقدم.",
    who3b: "الكلمة الأخيرة للـ HR", who3p: "كل تقييم معاه أسبابه، وكل قرار نهائي بياخده شخص من فريقك.",
    hq_h: "أسئلة فرق الـ HR بتسألها", hq1: "لازم يكون عندنا Odoo؟", ha1: "شغال جوه Odoo دلوقتي، ونسخة سحابية للشركات اللي معندهاش Odoo جاية قريب.",
    hq2: "بيقرا السير الذاتية العربي؟", ha2: "أيوه، عربي وإنجليزي، ومعاهم الـ CV القصير لوظايف الحرف والعمالة.",
    hq3: "المتقدم محتاج يسطّب حاجة؟", ha3: "لأ. بيقدّم من لينك، وبيعمل المقابلة من متصفح الموبايل أو اللاب.",
    hq4: "الـ HR يقدر يغيّر القرار؟", ha4: "دايمًا. السيستم بيرتّب ويشرح، والـ HR بيوافق أو يرفض أو ينقل أي متقدم.",
    cta_h: 'قولنا <span class="warm">المشكلة.</span> وهنوريك الحل.', cta_form: "ابعتلنا التفاصيل",
    h_1: 'احكيلنا <span class="warm">المشكلة.</span>',
    ft_tag: 'احكيلنا <span class="warm">المشكلة.</span> <strong class="good">والحل علينا.</strong>', ft_h1: "الخدمات", ft_h2: "الشركة", ft_h3: "تواصل",
    ft_l1: "Odoo وأنظمة الأعمال", ft_l2: "أتمتة التوظيف", ft_l3: "الأتمتة", ft_l4: "وكلاء AI", ft_l5: "AI لفريقك", ft_l6: "مواقع الشركات", ft_l7: "طريقة شغلنا", ft_l8: "الأسئلة", ft_base: "عربي وإنجليزي · مصر", ag_label: "وكلاء الذكاء الاصطناعي", ag_h: "أكتر أربع وكلاء الشركات بتطلبهم مننا",
    ag_p: "كل وكيل مربوط ببياناتك وأنظمتك، وبيشتغل بالعربي أو الإنجليزي، وبيحوّل لشخص من فريقك لما يكون ده الصح.", ag_live: "مثال توضيحي",
    pr_label: "بنشتغل معاك إزاي", pr_h: "بنسمعك، ونحل المشكلة معاك خطوة بخطوة، ونتابع معاك لحد ما تتأكد إن كل حاجة بقت أحسن",
    pr_p: "معاك من أول مكالمة لحد ما الشغل يمشي لوحده، وبعدها كمان. اختار أي خطوة أو سيبها تعرض نفسها.",
    j1b: "بنسمعك", j1s: "مشكلتك بكلامك إنت", j2b: "بنخطط مع بعض", j2s: "النطاق والخطوات وسعر ثابت", j3b: "بنبني خطوة بخطوة", j3s: "عرض كل أسبوع",
    j4b: "بنسلّمك الشغل وإحنا جنبك", j4s: "البيانات اتنقلت والفريق اتدرب", j5b: "بنتابع معاك", j5s: "متابعة شهرية وتحسينات",
    c9: "لوجستيات", o7: "موارد بشرية أو مرتبات أو توظيف"
  };

  var ROLES = {
    en: [
      { k: "HR", t: "For HR teams", w: "Works with Odoo Recruitment, e-mail and WhatsApp", items: [
        ["CV screening against the real job", "Every CV read and scored against the job post, in Arabic or English, with the reasons written out."],
        ["First interviews by voice", "Candidates interview when it suits them. HR gets a summary and a score."],
        ["Job posts and letters drafted", "Posts, offer letters and replies written in your company's tone."]] },
      { k: "Sales", t: "For sales teams", w: "Works with Odoo CRM and Sales, and WhatsApp Business", items: [
        ["Follow-ups that never slip", "Quotes chased on time, with a reminder to the rep or a message to the customer."],
        ["Customer replies on WhatsApp", "Real prices, stock and order status, answered in seconds."],
        ["A weekly pipeline summary", "What moved, what stalled and where to focus, in plain words."]] },
      { k: "Finance", t: "For finance and accounting", w: "Works with Odoo Accounting, bank statements and Excel", items: [
        ["Supplier bills entered for you", "Read from PDFs and photos, matched to the purchase order and sent for approval."],
        ["Payments matched to invoices", "Bank lines reconciled automatically, with exceptions flagged for a person."],
        ["Unusual spending caught early", "Alerts before month end, while there is still time to act."]] },
      { k: "Operations", t: "For operations and inventory", w: "Works with Odoo Inventory, Purchase and Delivery", items: [
        ["Warnings before stock runs out", "Per branch and per product, based on how fast each one sells."],
        ["Reorder suggestions", "Quantities proposed for approval, ready to become a purchase order."],
        ["Delivery updates for customers", "Customers know where their order is without calling."]] },
      { k: "Customer service", t: "For customer service", w: "Works with WhatsApp, website chat and Odoo Helpdesk", items: [
        ["Answers at any hour", "Common questions answered in your tone, in Arabic or English."],
        ["A clean hand-over to people", "Harder cases passed to your team with the full conversation."],
        ["Complaints turned into tickets", "Logged, assigned and followed up until they are closed."]] },
      { k: "Management", t: "For owners and managers", w: "Works with Odoo, Excel and Google Sheets", items: [
        ["Ask your data a question", "\"Why is Branch 3 below target?\" answered from your own numbers."],
        ["A morning report on WhatsApp", "Sales, cash and stock in one short message every day."],
        ["What changed, and why", "Shifts in sales or costs pointed out with the likely cause."]] }
    ],
    ar: [
      { k: "الموارد البشرية", t: "لفرق الموارد البشرية", w: "بيشتغل مع Odoo Recruitment والإيميل والواتساب", items: [
        ["فرز السير الذاتية على الوظيفة الحقيقية", "كل CV بيتقري ويتقيّم على إعلان الوظيفة، بالعربي أو الإنجليزي، والأسباب مكتوبة."],
        ["مقابلات أولى بالصوت", "المتقدم بيعمل المقابلة في الوقت اللي يناسبه، والـ HR بيوصله ملخص وتقييم."],
        ["إعلانات وخطابات جاهزة", "إعلانات الوظائف وخطابات العروض والردود مكتوبة بأسلوب شركتك."]] },
      { k: "المبيعات", t: "لفرق المبيعات", w: "بيشتغل مع Odoo CRM والمبيعات وواتساب بيزنس", items: [
        ["متابعات عمرها ما بتتنسي", "عروض الأسعار بتتابع في وقتها، بتذكير للمندوب أو رسالة للعميل."],
        ["الرد على العملاء في واتساب", "أسعار ومخزون وحالة طلبات حقيقية، في ثواني."],
        ["ملخص أسبوعي للصفقات", "إيه اللي اتحرك، وإيه اللي واقف، وتركّز فين، بكلام بسيط."]] },
      { k: "الحسابات", t: "للحسابات والمالية", w: "بيشتغل مع Odoo Accounting وكشوف البنك والإكسل", items: [
        ["فواتير الموردين بتدخل لوحدها", "بتتقري من PDF أو صورة، وتتطابق مع أمر الشراء، وتتبعت للموافقة."],
        ["مطابقة المدفوعات مع الفواتير", "حركات البنك بتتسوّى أوتوماتيك، والحالات الغريبة بتروح لشخص يراجعها."],
        ["مصروفات غير طبيعية بتبان بدري", "تنبيهات قبل آخر الشهر، والوقت لسه يسمح تتصرف."]] },
      { k: "التشغيل والمخازن", t: "للتشغيل والمخازن", w: "بيشتغل مع Odoo Inventory والمشتريات والتوصيل", items: [
        ["تنبيه قبل ما المخزون يخلص", "لكل فرع ولكل صنف، على حسب سرعة بيعه."],
        ["اقتراحات إعادة الطلب", "كميات مقترحة للموافقة، جاهزة تتحول لأمر شراء."],
        ["تحديثات التوصيل للعملاء", "العميل يعرف طلبه فين من غير ما يتصل."]] },
      { k: "خدمة العملاء", t: "لخدمة العملاء", w: "بيشتغل مع واتساب وشات الموقع وOdoo Helpdesk", items: [
        ["ردود في أي وقت", "الأسئلة المتكررة بتترد بأسلوبك، بالعربي أو الإنجليزي."],
        ["تحويل منظّم لفريقك", "الحالات الأصعب بتتحول لفريقك ومعاها المحادثة كاملة."],
        ["الشكاوى بتتحول لتذاكر", "بتتسجل وتتوزع وتتابع لحد ما تتقفل."]] },
      { k: "الإدارة", t: "لأصحاب الشركات والمديرين", w: "بيشتغل مع Odoo والإكسل وGoogle Sheets", items: [
        ["اسأل بياناتك سؤال", "\"ليه فرع 3 تحت التارجت؟\" وتيجيلك الإجابة من أرقامك إنت."],
        ["تقرير الصبح على الواتساب", "المبيعات والكاش والمخزون في رسالة قصيرة كل يوم."],
        ["إيه اللي اتغير وليه", "أي تغيير في المبيعات أو التكاليف بيتوضح ومعاه السبب المحتمل."]] }
    ]
  };
  var ROLE_RESULT = {
    en: [["4 of 46 applicants shortlisted", "Interview score 86 / 100", "Post published in minutes"],
         ["Quote reminder sent on day 3", "Order status answered in seconds", "Pipeline summary every Sunday"],
         ["Bill matched to PO-1043", "112 bank lines matched", "Unknown 8,000 EGP flagged"],
         ["Dairy alert for Branch 3", "Reorder: 40 cases, ready to approve", "Delivery 5512 tracked to the door"],
         ["38 questions answered this morning", "Hand-over with the full chat", "Ticket T-201 assigned to quality"],
         ["Why Branch 3 dropped, in one line", "Sales, cash and stock at 8:00", "Enquiries up 22%, bookings down 9%"]],
    ar: [["4 من 46 متقدم في القائمة المختصرة", "تقييم المقابلة 86 / 100", "الإعلان بيتنشر في دقايق"],
         ["تذكير بعرض السعر في اليوم التالت", "حالة الطلب بتترد في ثواني", "ملخص الصفقات كل أحد"],
         ["الفاتورة اتطابقت مع PO-1043", "112 حركة بنك اتطابقت", "تحويل مجهول بـ 8,000 جنيه اتعلّم عليه"],
         ["تنبيه ألبان لفرع 3", "إعادة طلب 40 كرتونة جاهزة للموافقة", "الشحنة 5512 متتبعة لحد الباب"],
         ["38 سؤال اترد عليهم الصبح", "تحويل لفريقك ومعاه المحادثة كاملة", "الشكوى T-201 اتحوّلت للجودة"],
         ["ليه فرع 3 نزل، في سطر واحد", "المبيعات والكاش والمخزون الساعة 8", "الاستفسارات +22% والحجوزات -9%"]]
  };
  var ROLE_UI = { en: { cta: "Talk about this for my team", n: "Solution" }, ar: { cta: "كلمنا عن ده لفريقك", n: "حل" } };

  var WORK = {
    en: {
      tabs: { odoo: "Odoo", hr: "HR and hiring", automation: "Automation", agents: "Agents", ai: "AI solutions", web: "Websites" },
      lbl: { problem: "The problem", built: "What we built", watch: "Watch the clip", turn: "Details", back: "Back", want: "Want this for your company?", ask: "Ask us about it" },
      odoo: { meta: "Food manufacturing · Odoo", t: "Van sales for a pasta factory",
        p: "Reps sold from vans with paper invoices, so stock and cash were only known at the end of the day.",
        b: "Every van works as its own warehouse: loading, sales on the route, returns, stock counts and invoices, with a GPS location on every visit.",
        more: [
          ["Logistics and shipment tracking", "Shipments, carriers, routes and delivery costs tracked from the order to proof of delivery.", "Logistics"],
          ["Job post automation", "Job posts, cover images and evaluation criteria written and published from the job itself.", "Recruitment · Odoo 18"],
          ["Purchase and manufacturing for a food and beverage group", "Factory purchasing, production orders and quality checks connected to the POS branches.", "Manufacturing · Odoo 19"],
          ["By-product cost allocation", "Costs split between main products and by-products, manually or by rule, with live percentages.", "Manufacturing · Odoo 19"],
          ["Budget control, credit limits and guarantees", "Purchase budgets enforced, credit-limit exceptions approved and payment guarantees tracked.", "Accounting · Odoo 18"],
          ["Projects under construction", "Large purchases routed to a work-in-progress account and released to assets when the project closes.", "Accounting · Odoo 19"],
          ["Unified bank dashboard", "Every bank transaction across accounts in one view, read straight from journal entries.", "Accounting · Odoo 16"],
          ["Vendor checks with manual numbering", "Check books with manual numbers of any length, and a proper cancel flow.", "Accounting · Odoo 19"],
          ["Sales commission on net profit", "Paid only on fully collected invoices, in USD, with a penalty for late collection.", "Sales · Odoo 19"],
          ["Tender lines on CRM opportunities", "Quotation lines shown and printed on the opportunity at the tendering stage.", "CRM · Odoo 19"],
          ["Purchase control for an industrial group", "Approval limits by amount, over-receipt tolerance and a request flow for indirect materials.", "Purchase · Odoo 18"],
          ["Statements and analytics for a film distributor", "Distributor statements with net, VAT and collections, plus distribution dashboards.", "Media · Odoo 17"],
          ["Unit reservations for a real estate developer", "Reservation forms, unit availability and tax rules per project.", "Real estate"],
          ["Document management", "Folders, access rules and approvals for company documents.", "Documents"],
          ["Task access control", "Who can see and edit which tasks, set per user.", "Project"]] },
      hr: { meta: "HR · Ready to use", t: "Hiring from job post to shortlist",
        p: "HR spent days reading CVs, calling candidates and booking first interviews.",
        b: "The job post is written and published, every CV is scored against the job, first interviews run by voice in Arabic or English, and HR gets a ranked shortlist with summaries.",
        more: [
          ["Attendance policies by department", "Shifts, lateness rules and overtime set per department and applied automatically.", "HR · Odoo 19"],
          ["Family medical insurance", "Employees and their families covered, with the cost flowing into payroll.", "HR · Odoo 19"],
          ["KPI reviews with approvals", "Monthly KPIs scored, approved by managers and linked to pay.", "HR · Odoo 19"],
          ["Penalties and deductions", "Penalty rules that land correctly on the payslip every month.", "Payroll"],
          ["Absence and insurance on payslips", "Absence deductions corrected so net salary never goes below zero.", "Payroll"],
          ["Leave accruals and reports", "Leave balances accrued correctly and reported per employee.", "HR"],
          ["Arabic CVs for skilled trades", "Reads Arabic CVs and short profiles for roles like drivers, butchers and technicians.", "Hiring"],
          ["Interview summaries and scoring", "Every interview turned into strengths, concerns and a score HR can review.", "Hiring"],
          ["Careers pages with apply links", "Job pages in the company's brand, with one link to apply and no access to the system.", "Hiring"]] },
      automation: { meta: "Finance · Automation", t: "Supplier bills that enter themselves",
        p: "The accounts team typed every supplier invoice by hand and checked it against the purchase order line by line.",
        b: "Invoices are read from PDFs and photos, matched to the purchase order, checked for totals and VAT, then sent to the accountant to approve.",
        more: [
          ["Daily quality reports for a support team", "Team activity counted from shared sheets and sent as a report every morning.", "Google Workspace"],
          ["Weekly reviews drafted from call recordings", "Each team member's weekly review prepared from the week's calls and notes, ready for a quick check.", "Automation and AI"],
          ["Calls picked for quality review", "Recorded calls chosen fairly each day from Drive for the quality team.", "Google Workspace"],
          ["Job posts published on their own", "From an approved job to a published post with its image and criteria.", "Odoo"],
          ["Interview follow-ups", "Invites, reminders and expiry handled for every candidate without HR lifting a finger.", "Hiring"],
          ["Producer reports with preview", "Excel reports previewed in Odoo before download, so mistakes are caught first.", "Odoo 17"]] },
      agents: { meta: "Distribution · AI agent", t: "A WhatsApp agent for a food distributor",
        p: "Shops called and messaged all day to ask about orders, prices and delivery times.",
        b: "An agent answers on WhatsApp with live order status, prices and stock, and updates orders and invoices directly in the system.",
        more: [
          ["A hiring agent for HR teams", "Screens CVs against the job and runs first interviews in Arabic and English.", "Coming as a cloud product"],
          ["A voice interviewer", "Talks with candidates in Egyptian Arabic or English and writes the summary.", "Hiring"],
          ["A data entry agent", "Turns documents and spreadsheets into clean, checked records in the system.", "Odoo"]] },
      ai: { meta: "Retail · AI solution", t: "Sales insights for a hypermarket chain",
        p: "Managers had the numbers but no time to find out why a branch was falling behind.",
        b: "Sales, stock and HR data in one place. Managers ask in plain words and get the reason with the next step, ready to approve.",
        more: [
          ["Answers from your own documents", "Ask in plain words and get the answer with the source shown.", "AI"],
          ["A talent platform", "Matches people to roles from their skills, with a clear reason for each match.", "AI"],
          ["CV and job matching in both directions", "The job is checked against the CV and the CV against the job, so the score is fair.", "HR"]] },
      web: { meta: "Website · Sample design", t: "A bilingual site for a food brand",
        p: "A wholesale brand needed a site that takes orders from shops and sends them straight to sales.",
        b: "Arabic and English with a proper right-to-left layout, a product catalogue and an enquiry form that goes straight to the sales team.",
        more: [
          ["Careers pages with shareable apply links", "Job pages in the company's brand, with one link to apply and no access to the system.", "Odoo Website"],
          ["Company data on every page", "Logo, phone, e-mail and colours pulled from the company settings, so the site stays correct.", "Odoo Website"],
          ["The site you are on", "Bilingual, light and dark, and built by our team.", "Jovix"]] }
    },
    ar: {
      tabs: { odoo: "Odoo", hr: "الموارد البشرية والتوظيف", automation: "الأتمتة", agents: "الوكلاء", ai: "حلول AI", web: "المواقع" },
      lbl: { problem: "المشكلة", built: "اللي عملناه", watch: "شوف الفيديو", turn: "التفاصيل", back: "رجوع", want: "عايز حاجة زي دي لشركتك؟", ask: "اسألنا عنها" },
      odoo: { meta: "تصنيع أغذية · Odoo", t: "مبيعات العربيات لمصنع مكرونة",
        p: "المندوبين كانوا بيبيعوا من العربيات بفواتير ورق، فالمخزون والكاش مكانوش بيتعرفوا غير آخر اليوم.",
        b: "كل عربية بقت مخزن لوحدها: تحميل، وبيع على خط السير، ومرتجعات، وجرد، وفواتير، وموقع GPS مع كل زيارة.",
        more: [
          ["لوجستيات وتتبع الشحنات", "الشحنات وشركات النقل وخطوط السير وتكلفة التوصيل متتبعة من الطلب لحد إثبات الاستلام.", "لوجستيات"],
          ["أتمتة إعلانات الوظائف", "إعلان الوظيفة وصورته ومعايير التقييم بتتكتب وتتنشر من بيانات الوظيفة نفسها.", "التوظيف · Odoo 18"],
          ["مشتريات وتصنيع لمجموعة أغذية ومشروبات", "مشتريات المصنع وأوامر الإنتاج وفحص الجودة مربوطين بفروع الكاشير.", "تصنيع · Odoo 19"],
          ["توزيع تكلفة المنتجات الثانوية", "التكلفة بتتوزع بين المنتج الأساسي والثانوي يدوي أو بقاعدة، والنسب بتتحدث لحظيًا.", "تصنيع · Odoo 19"],
          ["رقابة الموازنة وحدود الائتمان والضمانات", "موازنة المشتريات بتتطبق، واستثناءات حد الائتمان بتتوافق، وخطابات الضمان متتبعة.", "حسابات · Odoo 18"],
          ["مشروعات تحت التنفيذ", "المشتريات الكبيرة بتروح لحساب مشروعات تحت التنفيذ وتتحول لأصول لما المشروع يخلص.", "حسابات · Odoo 19"],
          ["لوحة موحدة للبنوك", "كل حركات البنوك في شاشة واحدة، مقرية مباشرة من القيود.", "حسابات · Odoo 16"],
          ["شيكات الموردين بترقيم يدوي", "دفاتر شيكات بأرقام يدوية بأي طول، وإلغاء شيك بشكل صحيح.", "حسابات · Odoo 19"],
          ["عمولة مبيعات على صافي الربح", "بتتحسب على الفواتير المحصلة بالكامل بس، بالدولار، ومعاها خصم على التحصيل المتأخر.", "مبيعات · Odoo 19"],
          ["بنود المناقصات على فرص البيع", "بنود عرض السعر بتظهر وتتطبع على الفرصة في مرحلة المناقصة.", "CRM · Odoo 19"],
          ["رقابة المشتريات لمجموعة صناعية", "حدود موافقة حسب المبلغ، وسماحية في الاستلام الزيادة، ودورة طلب للخامات غير المباشرة.", "مشتريات · Odoo 18"],
          ["كشوف وتحليلات لموزّع أفلام", "كشوف حساب الموزّع بالصافي والضريبة والتحصيل، ولوحات متابعة للتوزيع.", "إعلام · Odoo 17"],
          ["حجز الوحدات لمطوّر عقاري", "فورم الحجز وحالة الوحدات وقواعد الضرايب لكل مشروع.", "عقارات"],
          ["إدارة المستندات", "فولدرات وصلاحيات وموافقات لمستندات الشركة.", "مستندات"],
          ["صلاحيات المهام", "مين يشوف ويعدّل أنهي مهام، متظبط لكل مستخدم.", "مشاريع"]] },
      hr: { meta: "موارد بشرية · جاهز للاستخدام", t: "التوظيف من الإعلان للقائمة المختصرة",
        p: "الـ HR كان بيقضي أيام يقرا سير ذاتية ويكلم متقدمين ويحجز مقابلات أولى.",
        b: "إعلان الوظيفة بيتكتب ويتنشر، وكل CV بيتقيّم على الوظيفة، والمقابلات الأولى بتتعمل بالصوت بالعربي أو الإنجليزي، والـ HR بيوصله قائمة مرتبة بملخصات.",
        more: [
          ["سياسات حضور لكل قسم", "الورديات وقواعد التأخير والإضافي متظبطة لكل قسم وبتتطبق أوتوماتيك.", "HR · Odoo 19"],
          ["تأمين طبي للعيلة", "الموظف وعيلته متغطيين، والتكلفة بتنزل على المرتب.", "HR · Odoo 19"],
          ["تقييم KPI بموافقات", "مؤشرات الأداء الشهرية بتتقيّم ويوافق عليها المدير وتترتبط بالمرتب.", "HR · Odoo 19"],
          ["الجزاءات والخصومات", "قواعد الجزاءات بتنزل صح على قسيمة المرتب كل شهر.", "مرتبات"],
          ["الغياب والتأمينات في المرتب", "خصم الغياب اتظبط بحيث صافي المرتب عمره ما يبقى بالسالب.", "مرتبات"],
          ["رصيد الإجازات وتقاريرها", "رصيد الإجازات بيتحسب صح وبيطلع تقرير لكل موظف.", "HR"],
          ["سير ذاتية عربي للحرف والمهن", "بيفهم الـ CV العربي والملفات القصيرة لوظايف زي السواقين والجزارين والفنيين.", "التوظيف"],
          ["ملخصات وتقييم للمقابلات", "كل مقابلة بتتحول لنقاط قوة وملاحظات وتقييم يراجعه الـ HR.", "التوظيف"],
          ["صفحات توظيف بلينك تقديم", "صفحات وظايف بهوية الشركة، ولينك واحد للتقديم من غير أي دخول على النظام.", "التوظيف"]] },
      automation: { meta: "حسابات · أتمتة", t: "فواتير موردين بتدخل لوحدها",
        p: "فريق الحسابات كان بيكتب كل فاتورة مورد بإيده ويراجعها على أمر الشراء سطر بسطر.",
        b: "الفواتير بتتقري من PDF أو صورة، وتتطابق مع أمر الشراء، ويتراجع الإجمالي والضريبة، وبعدها تروح للمحاسب يوافق.",
        more: [
          ["تقارير جودة يومية لفريق دعم", "نشاط الفريق بيتعد من الشيتات المشتركة ويتبعت تقرير كل يوم الصبح.", "Google Workspace"],
          ["تقييمات أسبوعية من تسجيلات المكالمات", "تقييم كل فرد في الفريق بيتجهز من مكالمات الأسبوع والملاحظات، جاهز لمراجعة سريعة.", "أتمتة و AI"],
          ["اختيار مكالمات للمراجعة", "مكالمات متسجلة بتتختار بعدل كل يوم من Drive لفريق الجودة.", "Google Workspace"],
          ["إعلانات وظايف بتتنشر لوحدها", "من وظيفة متوافق عليها لإعلان منشور بصورته ومعاييره.", "Odoo"],
          ["متابعة المقابلات", "الدعوات والتذكيرات وانتهاء المواعيد بتتعمل لكل متقدم من غير ما الـ HR يتدخل.", "التوظيف"],
          ["تقارير المنتجين بمعاينة", "تقارير الإكسل بتتعاين في Odoo قبل التحميل، فالأخطاء بتبان الأول.", "Odoo 17"]] },
      agents: { meta: "توزيع · وكيل AI", t: "وكيل واتساب لموزّع أغذية",
        p: "المحلات كانت بتتصل وتبعت طول اليوم تسأل عن الطلبات والأسعار ومواعيد التوصيل.",
        b: "وكيل بيرد على الواتساب بحالة الطلب والأسعار والمخزون لحظيًا، وبيعدّل الطلبات والفواتير في النظام مباشرة.",
        more: [
          ["وكيل توظيف لفرق الـ HR", "بيفرز السير الذاتية على الوظيفة وبيعمل المقابلات الأولى بالعربي والإنجليزي.", "قريبًا كمنتج سحابي"],
          ["محاور صوتي", "بيكلم المتقدمين بالعربي المصري أو الإنجليزي وبيكتب الملخص.", "التوظيف"],
          ["وكيل إدخال بيانات", "بيحوّل المستندات والشيتات لسجلات نضيفة ومتراجعة في النظام.", "Odoo"]] },
      ai: { meta: "تجزئة · حل AI", t: "تحليل مبيعات لسلسلة هايبر ماركت",
        p: "المديرين كانت الأرقام قدامهم، بس مفيش وقت يعرفوا ليه فرع معين متأخر.",
        b: "بيانات المبيعات والمخزون والموارد البشرية في مكان واحد. المدير بيسأل بكلام عادي وتيجيله السبب والخطوة الجاية جاهزة للموافقة.",
        more: [
          ["إجابات من مستنداتك", "اسأل بكلام عادي وتيجيلك الإجابة ومعاها المصدر.", "AI"],
          ["منصة مواهب", "بتربط الناس بالوظايف حسب مهاراتهم، ومع كل ترشيح سبب واضح.", "AI"],
          ["مطابقة الـ CV والوظيفة في الاتجاهين", "الوظيفة بتتقارن بالـ CV والـ CV بالوظيفة، فالتقييم بيبقى عادل.", "HR"]] },
      web: { meta: "موقع · تصميم تجريبي", t: "موقع بلغتين لبراند أغذية",
        p: "براند جملة كان محتاج موقع ياخد طلبات من المحلات ويبعتها للمبيعات على طول.",
        b: "عربي وإنجليزي بتصميم صحيح من اليمين للشمال، وكتالوج منتجات، وفورم طلبات بيوصل لفريق المبيعات على طول.",
        more: [
          ["صفحات توظيف بلينك تقديم", "صفحات وظايف بهوية الشركة، ولينك واحد للتقديم من غير أي دخول على النظام.", "Odoo Website"],
          ["بيانات الشركة في كل صفحة", "اللوجو والتليفون والإيميل والألوان بتتسحب من إعدادات الشركة، فالموقع دايمًا مظبوط.", "Odoo Website"],
          ["الموقع اللي إنت عليه", "بلغتين، فاتح وغامق، ومعمول بإيد فريقنا.", "Jovix"]] }
    }
  };
  var EVENTS = {
    en: ["Supplier bill 7731 read and matched to PO-1043", "New website enquiry added to the CRM", "Stock alert sent to Branch 3 on WhatsApp", "Morning sales report sent to management", "Leave request approved and added to payroll", "Order 5512 updated from a WhatsApp message", "12 new CVs screened for Sales Representative"],
    ar: ["فاتورة المورد 7731 اتقرت واتطابقت مع PO-1043", "طلب جديد من الموقع اتضاف للـ CRM", "تنبيه مخزون اتبعت لفرع 3 على الواتساب", "تقرير مبيعات الصبح اتبعت للإدارة", "طلب إجازة اتوافق عليه واتضاف للمرتبات", "الطلب 5512 اتعدّل من رسالة واتساب", "12 CV جديد اتفرزوا لوظيفة مندوب مبيعات"]
  };

  var lang = "en", role = 0, tab = "odoo";
  try { lang = localStorage.getItem("jovix-lang") || ((navigator.language || "").toLowerCase().indexOf("ar") === 0 ? "ar" : "en"); } catch (e) {}

  var EN = {}, textNodes = document.querySelectorAll("[data-i18n]"), htmlNodes = document.querySelectorAll("[data-i18n-html]"), phNodes = document.querySelectorAll("[data-i18n-ph]");
  textNodes.forEach(function (n) { EN[n.dataset.i18n] = n.textContent; });
  htmlNodes.forEach(function (n) { EN[n.dataset.i18nHtml] = n.innerHTML; });
  phNodes.forEach(function (n) { EN[n.dataset.i18nPh] = n.getAttribute("placeholder"); });
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var tr = function (k) { return (lang === "ar" ? AR : EN)[k]; };

  function setLang(next) {
    lang = next === "ar" ? "ar" : "en";
    var root = document.documentElement, d = lang === "ar" ? AR : EN;
    root.lang = lang; root.dir = lang === "ar" ? "rtl" : "ltr";
    textNodes.forEach(function (n) { if (d[n.dataset.i18n] != null) n.textContent = d[n.dataset.i18n]; });
    htmlNodes.forEach(function (n) { if (d[n.dataset.i18nHtml] != null) n.innerHTML = d[n.dataset.i18nHtml]; });
    phNodes.forEach(function (n) { if (d[n.dataset.i18nPh] != null) n.setAttribute("placeholder", d[n.dataset.i18nPh]); });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    if (typeof moBuild === "function") moBuild();
    renderRoles(); renderWork(false); compose();
    if (typeof agRender === "function") { agRender(); agPlay(); }
    if (typeof jrShow === "function") jrShow(jrI);
    if (document.getElementById("rec-img")) {
    document.getElementById("rec-img").src = "media/work_hr_" + lang + ".webp";
    document.getElementById("rec-demo").href = "https://wa.me/201283450444?text=" + encodeURIComponent(lang === "ar" ? "أهلًا Jovix، عايز أحجز عرض تجريبي لأتمتة التوظيف." : "Hello Jovix, I'd like to book a demo of your recruitment automation.");
    document.getElementById("rec-early").href = "https://wa.me/201283450444?text=" + encodeURIComponent(lang === "ar" ? "أهلًا Jovix، عايز أسجّل في القائمة الأولى للنسخة السحابية من أتمتة التوظيف." : "Hello Jovix, please add me to the early list for the cloud version of your recruitment automation.");
    }
    document.querySelectorAll("[data-src-lang]").forEach(function (im) { im.src = im.dataset.srcLang + lang + ".webp"; });
    if (typeof stmtBuild === "function") stmtBuild();
    try { localStorage.setItem("jovix-lang", lang); } catch (e) {}
  }
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });

  /* morph: a problem scattered, then put in order. One engine, used by the hero, the team picker and the trust column. */
  function makeMorph(root, o) {
    if (!root) return { play: function () {}, current: function () { return 0; } };
    var head = document.createElement("div"), state = document.createElement("span"), title = document.createElement("b"), body = document.createElement("div"), sweep = document.createElement("span"), foot = null;
    head.className = "mo-head"; state.className = "mo-state"; title.className = "mo-title"; body.className = "mo-body"; sweep.className = "mo-sweep";
    head.appendChild(state); head.appendChild(title); body.appendChild(sweep); root.appendChild(head); root.appendChild(body);
    if (o.tabs) { foot = document.createElement("div"); foot.className = "mo-foot"; foot.setAttribute("role", "tablist"); root.appendChild(foot); }
    var rows = Math.ceil(o.n / 2), tok = [], idx = 0, run = 0, visible = true, pending = false;
    body.style.setProperty("--rows", rows);
    for (var i = 0; i < o.n; i++) { var t = document.createElement("div"); t.className = "mo-t"; t.innerHTML = '<span class="a"></span><span class="b"></span><em></em>'; body.appendChild(t); tok.push(t); }
    var rnd = function (a, b) { return a + Math.random() * (b - a); };
    function chaos(el, i) {
      el.style.setProperty("--x", rnd(1, 50).toFixed(1)); el.style.setProperty("--y", rnd(0, 100 - 100 / rows).toFixed(1));
      el.style.transform = "rotate(" + rnd(-13, 13).toFixed(1) + "deg) scale(" + rnd(.88, 1).toFixed(2) + ")"; el.style.transitionDelay = (i * 0.025) + "s";
    }
    function order(el, i) {
      el.style.setProperty("--x", i % 2 ? 51 : 0); el.style.setProperty("--y", (((i / 2) | 0) * 100 / rows).toFixed(2));
      el.style.transform = "none"; el.style.transitionDelay = (0.05 + i * 0.045) + "s";
    }
    function solve(d, sc) { body.classList.add("solved"); state.textContent = d.done; state.classList.add("ok"); title.textContent = sc.s; tok.forEach(order); }
    function play(i) {
      var r = ++run, d = o.data(), sc = d.scenes[i] || d.scenes[0];
      idx = i;
      var later = function (ms, fn) { setTimeout(function () { if (r === run) fn(); }, ms); };
      if (foot) {
        foot.innerHTML = d.scenes.map(function (x, k) { return '<button type="button" role="tab" aria-selected="' + (k === i) + '" data-i="' + k + '"><span class="bar"></span>' + esc(x.k) + '</button>'; }).join("");
      }
      body.classList.remove("solved"); state.textContent = d.prob; state.classList.remove("ok"); title.textContent = sc.p;
      var first = !body.dataset.ready;
      if (first) body.classList.add("no-anim");
      tok.forEach(function (t, k) {
        t.querySelector(".a").textContent = sc.a[k]; t.querySelector(".b").textContent = sc.b[k]; t.querySelector("em").textContent = sc.hi || "";
        t.classList.toggle("hi", !!sc.hi && k < (sc.hn || 4)); chaos(t, k);
      });
      if (first) { void body.offsetWidth; body.classList.remove("no-anim"); body.dataset.ready = "1"; }
      if (reduce) { solve(d, sc); return; }
      later(o.wait || 1800, function () { sweep.classList.remove("go"); void sweep.offsetWidth; sweep.classList.add("go"); });
      later((o.wait || 1800) + 400, function () { solve(d, sc); });
      later(o.cycle || 6400, function () {
        if (!visible) { pending = true; return; }
        play(o.tabs ? (idx + 1) % d.scenes.length : idx);
      });
    }
    if (foot) foot.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) play(+b.dataset.i); });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible && pending) { pending = false; play(o.tabs ? (idx + 1) % o.data().scenes.length : idx); } }).observe(body);
    return { play: play, current: function () { return idx; } };
  }

  var MO = {
    en: { prob: "The problem", done: "With Jovix", scenes: [
      { k: "Hiring", p: "200 CVs and one recruiter", s: "A ranked shortlist in minutes", hi: "Interview",
        a: ["CV · Sales rep", "CV · Accountant?", "CV · no phone", "CV · 3 pages", "CV · Sales rep", "CV · Driver", "CV · duplicate", "CV · Sales rep", "CV · Arabic", "CV · unread", "CV · unread", "CV · Sales rep"],
        b: ["Nour Ahmed · 92%", "Mahmoud Saeed · 88%", "Salma Khaled · 81%", "Omar Adel · 79%", "Mona Fathy · 74%", "Karim Ali · 71%", "Yara Samir · 66%", "Hany Nabil · 61%", "Ali Mostafa · 58%", "Rana Hassan · 52%", "Tamer Saad · 44%", "Hossam Adel · 38%"] },
      { k: "Orders", p: "Orders lost in WhatsApp chats", s: "Every order in the system, confirmed", hi: "Confirmed",
        a: ["2 cartons penne?", "same as last week", "did you get my order", "price please", "add 5 spaghetti", "when is delivery", "cancel the elbow", "invoice?", "10 cartons", "call me", "is it out?", "2 more"],
        b: ["SO-1042 · Al Salam Market", "SO-1043 · Fresh Corner", "SO-1044 · Nile Mart", "SO-1045 · Hayat Store", "SO-1046 · Al Amal", "SO-1047 · City Foods", "SO-1048 · Omar Market", "SO-1049 · Green Shop", "SO-1050 · Al Noor", "SO-1051 · Baraka", "SO-1052 · Top Market", "SO-1053 · Sama Store"] },
      { k: "Invoices", p: "Supplier invoices typed by hand", s: "Read, matched and posted", hi: "Posted",
        a: ["INV 7731.pdf", "photo_0412.jpg", "48,600?", "VAT missing", "PO number?", "scan_02.pdf", "INV 7735.pdf", "total 12,9..", "supplier?", "IMG_2291.jpg", "INV 7740.pdf", "date?"],
        b: ["BILL/0412 · 55,404.00", "BILL/0413 · 12,980.00", "BILL/0414 · 7,410.00", "BILL/0415 · 31,200.00", "BILL/0416 · 4,875.00", "BILL/0417 · 19,640.00", "BILL/0418 · 8,300.00", "BILL/0419 · 22,150.00", "BILL/0420 · 6,720.00", "BILL/0421 · 14,090.00", "BILL/0422 · 9,560.00", "BILL/0423 · 27,330.00"] },
      { k: "Reports", p: "Reports ready a week too late", s: "A morning summary with what changed", hi: "Look", hn: 3,
        a: ["sales.xlsx", "branch 3 ??", "stock_v2.xlsx", "ads report", "who has the numbers", "final_FINAL.xlsx", "returns?", "Sheet1", "bookings", "copy of sales", "cash?", "last month"],
        b: ["Branch 3 · below target", "Dairy · stock out Tue", "Bookings · -9%", "Ads · enquiries +22%", "Sales · +6.4%", "Cash · on plan", "Returns · normal", "Top item · Penne 400 g", "Branch 1 · above target", "New customers · 38", "Reorder · 40 cases", "Next step · call sales"] }
    ] },
    ar: { prob: "المشكلة", done: "مع Jovix", scenes: [
      { k: "التوظيف", p: "200 سيرة ذاتية ومسؤول توظيف واحد", s: "قائمة مرتبة في دقايق", hi: "مقابلة",
        a: ["CV · مندوب مبيعات", "CV · محاسب؟", "CV · من غير رقم", "CV · 3 صفحات", "CV · مندوب مبيعات", "CV · سواق", "CV · مكرر", "CV · مندوب مبيعات", "CV · عربي", "CV · متقراش", "CV · متقراش", "CV · مندوب مبيعات"],
        b: ["نور أحمد · 92%", "محمود سعيد · 88%", "سلمى خالد · 81%", "عمر عادل · 79%", "منى فتحي · 74%", "كريم علي · 71%", "يارا سمير · 66%", "هاني نبيل · 61%", "علي مصطفى · 58%", "رنا حسن · 52%", "تامر سعد · 44%", "حسام عادل · 38%"] },
      { k: "الطلبات", p: "طلبات بتضيع في شاتات الواتساب", s: "كل طلب في السيستم ومتأكد", hi: "اتأكد",
        a: ["2 كرتونة قلم؟", "زي الأسبوع اللي فات", "طلبي وصل؟", "السعر لو سمحت", "زوّد 5 اسباجتي", "التوصيل إمتى", "الغي المرمرية", "الفاتورة؟", "10 كراتين", "كلمني", "خرج؟", "2 كمان"],
        b: ["SO-1042 · ماركت السلام", "SO-1043 · فريش كورنر", "SO-1044 · نايل مارت", "SO-1045 · محل حياة", "SO-1046 · الأمل", "SO-1047 · سيتي فودز", "SO-1048 · ماركت عمر", "SO-1049 · جرين شوب", "SO-1050 · النور", "SO-1051 · بركة", "SO-1052 · توب ماركت", "SO-1053 · سما"] },
      { k: "الفواتير", p: "فواتير الموردين بتتكتب بالإيد", s: "اتقرت واتطابقت واتسجلت", hi: "اتسجلت",
        a: ["INV 7731.pdf", "صورة_0412.jpg", "48,600؟", "الضريبة ناقصة", "رقم أمر الشراء؟", "scan_02.pdf", "INV 7735.pdf", "الإجمالي 12,9..", "المورد؟", "IMG_2291.jpg", "INV 7740.pdf", "التاريخ؟"],
        b: ["BILL/0412 · 55,404.00", "BILL/0413 · 12,980.00", "BILL/0414 · 7,410.00", "BILL/0415 · 31,200.00", "BILL/0416 · 4,875.00", "BILL/0417 · 19,640.00", "BILL/0418 · 8,300.00", "BILL/0419 · 22,150.00", "BILL/0420 · 6,720.00", "BILL/0421 · 14,090.00", "BILL/0422 · 9,560.00", "BILL/0423 · 27,330.00"] },
      { k: "التقارير", p: "التقارير بتيجي متأخرة أسبوع", s: "ملخص الصبح باللي اتغير", hi: "بص هنا", hn: 3,
        a: ["sales.xlsx", "فرع 3 ؟؟", "stock_v2.xlsx", "تقرير الإعلانات", "الأرقام مع مين", "final_FINAL.xlsx", "المرتجعات؟", "Sheet1", "الحجوزات", "نسخة من المبيعات", "الكاش؟", "الشهر اللي فات"],
        b: ["فرع 3 · تحت التارجت", "الألبان · خلصت التلات", "الحجوزات · -9%", "الإعلانات · استفسارات +22%", "المبيعات · +6.4%", "الكاش · ماشي حسب الخطة", "المرتجعات · طبيعي", "الأعلى بيعًا · قلم 400 جم", "فرع 1 · فوق التارجت", "عملاء جدد · 38", "إعادة طلب · 40 كرتونة", "الخطوة الجاية · كلّم المبيعات"] }
    ] }
  };

  var MO_ROLE = {
    en: { prob: "Today", done: "With Jovix", scenes: [
      { p: "Leave requests and attendance on paper", s: "Approved and already in payroll", hi: "Approved", hn: 2,
        a: ["leave form.jpg", "late again?", "overtime?", "sick note", "who approved?", "excel v3", "missing punch", "bonus?"],
        b: ["Leave · Nour · 2 days", "Overtime · 6 h", "Late rule · applied", "Shift B · Maadi", "Missing punch · fixed", "KPI · 4.6 / 5", "Insurance · updated", "Payslips · ready"] },
      { p: "Leads scattered across chats and calls", s: "Every lead followed up on time", hi: "Call booked", hn: 2,
        a: ["call back?", "price for 50", "who is this", "interested?", "quote sent?", "WhatsApp lead", "missed call", "later"],
        b: ["Delta Foods · 50 units", "Nile Pharma · demo", "Q-118 · sent", "Al Amal · follow-up Tue", "City Mart · new", "Q-112 · won", "Fresh Co · new", "Q-109 · lost on price"] },
      { p: "Bank lines nobody matched", s: "Reconciled, with exceptions flagged", hi: "Matched", hn: 4,
        a: ["transfer 12,400", "?? 3,250", "cash deposit", "fees", "unknown 8,000", "cheque 1043", "refund?", "POS batch"],
        b: ["12,400 · INV/0921", "3,250 · INV/0927", "Deposit · Branch 2", "Bank fees · booked", "8,000 · needs review", "Cheque 1043 · cleared", "Refund · R-07", "POS · 41 receipts"] },
      { p: "Stock that runs out without warning", s: "Reorders ready before shelves empty", hi: "Reorder", hn: 3,
        a: ["out of dairy", "count?", "where is the pallet", "expired?", "branch 3 empty", "truck late", "stock_v2.xlsx", "returns"],
        b: ["Dairy · 40 cases", "Penne · 120 cartons", "Oil · 60 cartons", "Sugar · in stock", "Rice · in stock", "Flour · in stock", "Tea · in stock", "Delivery · on time"] },
      { p: "Complaints buried in messages", s: "Every case a ticket with an owner", hi: "Assigned", hn: 4,
        a: ["damaged!!", "no reply", "refund?", "wrong item", "third time", "angry call", "where is it", "bad service"],
        b: ["T-201 · Quality", "T-202 · Finance", "T-203 · Store", "T-204 · Delivery", "T-205 · closed", "T-206 · closed", "T-207 · closed", "T-208 · closed"] },
      { p: "Numbers spread over ten files", s: "One summary every morning", hi: "Look at this", hn: 2,
        a: ["sales.xlsx", "HR.xlsx", "cash?", "ads?", "stock.xlsx", "branch 3 ?", "final_v2", "who knows"],
        b: ["Branch 3 · below target", "Bookings · -9%", "Ads · enquiries +22%", "Sales · +6.4%", "Cash · on plan", "Payroll · ready", "Stock · 2 alerts", "Next · sales review"] }
    ] },
    ar: { prob: "النهارده", done: "مع Jovix", scenes: [
      { p: "طلبات الإجازة والحضور على ورق", s: "اتوافق عليها ونزلت على المرتبات", hi: "اتوافق", hn: 2,
        a: ["فورم إجازة.jpg", "متأخر تاني؟", "إضافي؟", "شهادة مرضية", "مين وافق؟", "excel v3", "بصمة ناقصة", "مكافأة؟"],
        b: ["إجازة · نور · يومين", "إضافي · 6 ساعات", "قاعدة التأخير · اتطبقت", "وردية B · المعادي", "البصمة الناقصة · اتظبطت", "KPI · 4.6 / 5", "التأمين · اتحدّث", "القسايم · جاهزة"] },
      { p: "عملاء محتملين متفرقين بين الشاتات والمكالمات", s: "كل عميل اتتابع في وقته", hi: "مكالمة محجوزة", hn: 2,
        a: ["هكلمك تاني؟", "سعر الـ 50", "مين ده", "مهتم؟", "العرض اتبعت؟", "عميل واتساب", "مكالمة فايتة", "بعدين"],
        b: ["Delta Foods · 50 وحدة", "Nile Pharma · عرض تجريبي", "Q-118 · اتبعت", "الأمل · متابعة التلات", "سيتي مارت · جديد", "Q-112 · اتكسبت", "فريش · جديد", "Q-109 · السعر"] },
      { p: "حركات بنك محدش طابقها", s: "اتسوّت، والغريب اتعلّم عليه", hi: "اتطابق", hn: 4,
        a: ["تحويل 12,400", "؟؟ 3,250", "إيداع كاش", "مصاريف", "مجهول 8,000", "شيك 1043", "مرتجع؟", "دفعة POS"],
        b: ["12,400 · INV/0921", "3,250 · INV/0927", "إيداع · فرع 2", "مصاريف البنك · اتسجلت", "8,000 · محتاج مراجعة", "شيك 1043 · اتصرف", "مرتجع · R-07", "POS · 41 إيصال"] },
      { p: "مخزون بيخلص من غير إنذار", s: "إعادة الطلب جاهزة قبل ما الرف يفضى", hi: "إعادة طلب", hn: 3,
        a: ["الألبان خلصت", "الجرد؟", "البالتة فين", "منتهي؟", "فرع 3 فاضي", "العربية اتأخرت", "stock_v2.xlsx", "مرتجعات"],
        b: ["ألبان · 40 كرتونة", "قلم · 120 كرتونة", "زيت · 60 كرتونة", "سكر · متوفر", "رز · متوفر", "دقيق · متوفر", "شاي · متوفر", "التوصيل · في ميعاده"] },
      { p: "شكاوى مدفونة في الرسايل", s: "كل حالة تذكرة ليها مسؤول", hi: "اتحوّلت", hn: 4,
        a: ["وصل مكسور!!", "محدش بيرد", "استرجاع؟", "صنف غلط", "تالت مرة", "مكالمة متعصبة", "فين الطلب", "خدمة وحشة"],
        b: ["T-201 · الجودة", "T-202 · الحسابات", "T-203 · المخزن", "T-204 · التوصيل", "T-205 · اتقفلت", "T-206 · اتقفلت", "T-207 · اتقفلت", "T-208 · اتقفلت"] },
      { p: "الأرقام متوزعة على عشر ملفات", s: "ملخص واحد كل يوم الصبح", hi: "بص على ده", hn: 2,
        a: ["sales.xlsx", "HR.xlsx", "الكاش؟", "الإعلانات؟", "stock.xlsx", "فرع 3 ؟", "final_v2", "محدش عارف"],
        b: ["فرع 3 · تحت التارجت", "الحجوزات · -9%", "الإعلانات · استفسارات +22%", "المبيعات · +6.4%", "الكاش · حسب الخطة", "المرتبات · جاهزة", "المخزون · تنبيهين", "الجاي · مراجعة المبيعات"] }
    ] }
  };

  var MO_TRUST = {
    en: { prob: "How projects often go", done: "How we run yours", scenes: [
      { p: "Software projects that drift", s: "Clear from the first day to long after launch",
        a: ["Unclear scope", "Surprise invoice", "No news for weeks", "Vendor owns the code", "Missed deadline", "No training", "Gone after launch", "Data shared everywhere"],
        b: ["Written scope", "Fixed price", "A demo every week", "Your code, your accounts", "Dated milestones", "Your team trained", "Support on WhatsApp", "Access only to what is needed"] }
    ] },
    ar: { prob: "المشاريع عادةً بتمشي إزاي", done: "إحنا بنمشّي مشروعك إزاي", scenes: [
      { p: "مشاريع برمجة بتتوه", s: "واضح من أول يوم لحد بعد التشغيل بكتير",
        a: ["نطاق مش واضح", "فاتورة مفاجئة", "مفيش أخبار بالأسابيع", "الكود ملك المطوّر", "ميعاد فات", "مفيش تدريب", "بيختفي بعد التسليم", "البيانات مع الكل"],
        b: ["نطاق مكتوب", "سعر ثابت", "عرض كل أسبوع", "الكود والحسابات باسمك", "مراحل بمواعيد", "فريقك متدرّب", "دعم على الواتساب", "صلاحيات على قد الشغل"] }
    ] }
  };

  var heroMorph = makeMorph(document.getElementById("morph"), { n: 12, tabs: true, data: function () { return MO[lang]; } });
  var ROLE_NOTES = {
    en: [
      [["Hiring", "Shortlist ready for Sales Representative: 4 of 46 applicants", "08:10"], ["Hiring", "Nour Ahmed finished her interview. Score 86 / 100", "10:42"], ["Hiring", "Final interview booked for Sunday at 11:00", "11:05"]],
      [["Sales", "New enquiry from Delta Foods: 50 units, needs a quote", "09:20"], ["Sales", "Quote Q-118 has not been opened for 3 days. Reminder sent", "12:00"], ["Sales", "Call booked with Nile Pharma, Thursday 11:00. Summary sent to Karim", "14:35"]],
      [["Finance", "112 bank lines matched to invoices", "08:00"], ["Finance", "3 lines need review, including an unknown 8,000 EGP transfer", "08:01"], ["Finance", "Supplier bill BILL/0412 ready for your approval", "10:15"]],
      [["Operations", "Dairy in Branch 3 will run out by Thursday", "07:45"], ["Operations", "Reorder ready: 40 cases of dairy for Branch 3", "07:46"], ["Operations", "Delivery 5512 reached Al Salam Market", "13:20"]],
      [["Customer service", "38 questions answered this morning, 2 handed to your team", "12:00"], ["Customer service", "Complaint T-201 assigned to Ahmed in quality", "12:04"], ["Customer service", "T-198 closed. The customer rated the reply 5 / 5", "15:30"]],
      [["Morning summary", "Sales are up 6.4% on last month", "08:00"], ["Morning summary", "Branch 3 is below target: dairy was out of stock on Tuesday", "08:00"], ["Morning summary", "Enquiries up 22%, bookings down 9%. Review follow-up with sales", "08:00"]]
    ],
    ar: [
      [["التوظيف", "القائمة المختصرة لمندوب المبيعات جاهزة: 4 من 46 متقدم", "08:10"], ["التوظيف", "نور أحمد خلّصت المقابلة. التقييم 86 / 100", "10:42"], ["التوظيف", "المقابلة النهائية اتحجزت الأحد الساعة 11", "11:05"]],
      [["المبيعات", "استفسار جديد من Delta Foods: 50 وحدة ومحتاجين عرض سعر", "09:20"], ["المبيعات", "عرض السعر Q-118 متفتحش من 3 أيام، واتبعت تذكير", "12:00"], ["المبيعات", "اتحجزت مكالمة مع Nile Pharma الخميس 11، والملخص اتبعت لكريم", "14:35"]],
      [["الحسابات", "112 حركة بنك اتطابقت مع الفواتير", "08:00"], ["الحسابات", "3 حركات محتاجة مراجعة، منهم تحويل مجهول بـ 8,000 جنيه", "08:01"], ["الحسابات", "فاتورة المورد BILL/0412 مستنية موافقتك", "10:15"]],
      [["التشغيل", "الألبان في فرع 3 هتخلص قبل الخميس", "07:45"], ["التشغيل", "إعادة الطلب جاهزة: 40 كرتونة ألبان لفرع 3", "07:46"], ["التشغيل", "الشحنة 5512 وصلت ماركت السلام", "13:20"]],
      [["خدمة العملاء", "اترد على 38 سؤال الصبح، واتحوّل 2 لفريقك", "12:00"], ["خدمة العملاء", "الشكوى T-201 اتحوّلت لأحمد في الجودة", "12:04"], ["خدمة العملاء", "T-198 اتقفلت، والعميل قيّم الرد 5 / 5", "15:30"]],
      [["ملخص الصبح", "المبيعات زادت 6.4% عن الشهر اللي فات", "08:00"], ["ملخص الصبح", "فرع 3 تحت التارجت: الألبان خلصت يوم التلات", "08:00"], ["ملخص الصبح", "الاستفسارات زادت 22% والحجوزات قلّت 9%. راجع المتابعة مع المبيعات", "08:00"]]
    ]
  };
  var roleFlowEl = document.getElementById("role-morph"), rfTimers = [];
  function roleFlow(i) {
    if (!roleFlowEl) return;
    rfTimers.forEach(clearTimeout); rfTimers = [];
    var notes = ROLE_NOTES[lang][i] || ROLE_NOTES[lang][0];
    roleFlowEl.className = "rnotes";
    roleFlowEl.innerHTML = '<div class="rn-head"><b>' + (lang === "ar" ? "اللي بيوصلك على الموبايل" : "What reaches your phone") + '</b><span>' + (lang === "ar" ? "مثال" : "Example") + '</span></div><div class="rn-list"></div>';
    var list = roleFlowEl.querySelector(".rn-list");
    function add(k) {
      var n = notes[k], el = document.createElement("div");
      el.className = "rn"; el.innerHTML = '<span class="rn-ic" aria-hidden="true"></span><div><small>' + esc(n[0]) + ' · <span dir="ltr">' + n[2] + '</span></small><p>' + esc(n[1]) + '</p></div>';
      list.appendChild(el);
    }
    if (reduce) { notes.forEach(function (_, k) { add(k); }); return; }
    notes.forEach(function (_, k) { rfTimers.push(setTimeout(function () { add(k); }, 250 + k * 900)); });
  }
  var roleMorph = { play: roleFlow };
  var PROPOSAL = {
    en: { h: "Proposal", rows: [["Scope", "Written, item by item"], ["Timeline", "Four dated milestones"], ["Price", "Fixed, agreed in advance"], ["Demos", "Every week"], ["Code and accounts", "In your name"]], stamp: "Agreed" },
    ar: { h: "العرض", rows: [["النطاق", "مكتوب بند بند"], ["المدة", "أربع مراحل بمواعيد"], ["السعر", "ثابت ومتفق عليه مقدمًا"], ["العروض", "كل أسبوع"], ["الكود والحسابات", "باسمك"]], stamp: "اتفقنا" }
  };
  var propEl = document.getElementById("trust-morph");
  function proposal() {
    if (!propEl) return;
    var d = PROPOSAL[lang];
    propEl.className = "prop";
    propEl.innerHTML = '<div class="prop-paper"><div class="prop-top"><b>' + esc(d.h) + '</b><small dir="ltr">JX-2026-014</small></div>' +
      d.rows.map(function (r, k) { return '<div class="prop-row r' + k + '"><span>' + esc(r[0]) + '</span><b>' + esc(r[1]) + '</b><i></i></div>'; }).join("") +
      '<div class="prop-sign"><svg viewBox="0 0 160 40"><path d="M6 30c14-18 22-22 26-12s-6 14 2 10 14-20 20-14-4 16 4 12 16-14 24-10 6 10 16 8 22-12 30-10"/></svg><span class="prop-stamp">' + esc(d.stamp) + '</span></div></div>';
    if ("IntersectionObserver" in window) new IntersectionObserver(function (es, ob) { if (es[0].isIntersecting) { propEl.classList.add("go"); ob.disconnect(); } }, { threshold: .4 }).observe(propEl);
    else propEl.classList.add("go");
  }
  function moBuild() { heroMorph.play(heroMorph.current()); roleFlow(role); proposal(); }

  /* roles */
  var roleList = document.getElementById("role-list"), rolePanel = document.getElementById("role-panel");
  function renderRoles() {
    if (!roleList) return;
    var data = ROLES[lang];
    roleList.innerHTML = data.map(function (r, i) {
      return '<button type="button" role="tab" id="role-' + i + '" aria-controls="role-panel" aria-selected="' + (i === role) + '" data-i="' + i + '">' + esc(r.k) + '</button>';
    }).join("");
    paintRole(false);
  }
  function paintRole(animate) {
    if (!document.getElementById("role-text")) return;
    var r = ROLES[lang][role], ui = ROLE_UI[lang];
    rolePanel.setAttribute("aria-labelledby", "role-" + role);
    document.getElementById("role-text").innerHTML = '<h3>' + esc(r.t) + '</h3><div class="role-items">' + r.items.map(function (it, i) {
      var res = (ROLE_RESULT[lang][role] || [])[i];
      return '<div class="role-item"><i>' + ui.n + ' 0' + (i + 1) + '</i><b>' + esc(it[0]) + '</b><span>' + esc(it[1]) + '</span>' + (res ? '<em class="role-res">' + esc(res) + '</em>' : '') + '</div>';
    }).join("") + '</div><div class="role-foot"><span>' + esc(r.w) + '</span><a class="btn solid" target="_blank" rel="noopener" href="https://wa.me/201283450444?text=' +
      encodeURIComponent((lang === "ar" ? "أهلًا Jovix، عايز أعرف أكتر عن حلول AI " : "Hello Jovix, I'd like to hear more about AI ") + r.t.toLowerCase()) + '">' + esc(ui.cta) + '</a></div>';
    var rt = document.getElementById("role-text"); if (animate) { rt.classList.remove("fade-swap"); void rt.offsetWidth; rt.classList.add("fade-swap"); }
    if (typeof roleMorph !== "undefined" && roleMorph) roleMorph.play(role);
  }
  if (roleList) roleList.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    role = +b.dataset.i;
    roleList.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
    paintRole(true);
  });

  /* work */
  var tabsEl = document.getElementById("work-tabs"), panel = document.getElementById("work-panel");
  var KEYS = ["odoo", "hr", "automation", "agents", "ai", "web"];
  function renderWork(animate) {
    if (!tabsEl) return;
    var W = WORK[lang];
    tabsEl.innerHTML = KEYS.map(function (k) {
      return '<button type="button" role="tab" id="tab-' + k + '" aria-controls="work-panel" aria-selected="' + (k === tab) + '" data-k="' + k + '">' + esc(W.tabs[k]) + '</button>';
    }).join("");
    var c = W[tab];
    panel.setAttribute("aria-labelledby", "tab-" + tab);
    panel.innerHTML =
      '<article class="feature"><button class="shot" type="button" data-video="' + tab + '" aria-label="' + esc(W.lbl.watch + ": " + c.t) + '">' +
        '<img src="media/work_' + tab + '_' + lang + '.webp" alt="" width="1280" height="800" loading="lazy">' +
        '<span class="play"><i><svg viewBox="0 0 10 12"><path d="M0 0l10 6-10 6z"/></svg></i>' + esc(W.lbl.watch) + '</span></button>' +
      '<div><span class="meta">' + esc(c.meta) + '</span><h3>' + esc(c.t) + '</h3><dl><div><dt>' + esc(W.lbl.problem) + '</dt><dd>' + esc(c.p) + '</dd></div>' +
        '<div><dt>' + esc(W.lbl.built) + '</dt><dd>' + esc(c.b) + '</dd></div></dl></div></article>' +
      '<div class="more">' + c.more.map(function (m) {
        var ask = "https://wa.me/201283450444?text=" + encodeURIComponent((lang === "ar" ? "أهلًا Jovix، عايز حاجة زي: " : "Hello Jovix, I'd like something like: ") + m[0]);
        return '<div class="flip" role="button" tabindex="0" aria-pressed="false"><div class="flip-in">' +
          '<div class="face front"><b>' + esc(m[0]) + '</b><p>' + esc(m[1]) + '</p><div class="face-foot"><small>' + esc(m[2]) + '</small><span class="turn">' + esc(W.lbl.turn) + '</span></div></div>' +
          '<div class="face back"><span class="back-k">' + esc(W.lbl.want) + '</span><b>' + esc(m[0]) + '</b><a class="btn solid" target="_blank" rel="noopener noreferrer" href="' + ask + '">' + esc(W.lbl.ask) + '</a><span class="turn">' + esc(W.lbl.back) + '</span></div>' +
        '</div></div>';
      }).join("") + '</div>';
    if (animate) { panel.classList.remove("fade-swap"); void panel.offsetWidth; panel.classList.add("fade-swap"); }
  }
  if (tabsEl) tabsEl.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; tab = b.dataset.k; renderWork(true); });
  if (tabsEl && KEYS.indexOf(location.hash.slice(1)) >= 0) tab = location.hash.slice(1);
  window.addEventListener("hashchange", function () { if (tabsEl && KEYS.indexOf(location.hash.slice(1)) >= 0) { tab = location.hash.slice(1); renderWork(true); } });

  /* video dialog */
  var dlg = document.getElementById("player"), pv = document.getElementById("player-video"), pc = document.getElementById("player-cap");
  if (panel) panel.addEventListener("click", function (e) {
    var s = e.target.closest(".shot"); if (!s) return;
    var k = s.dataset.video;
    if (window.jovixOpenSystem) { window.jovixOpenSystem(k, s); return; }
    pv.src = "media/work_" + k + "_" + lang + ".mp4"; pv.poster = "media/work_" + k + "_" + lang + ".webp";
    pc.textContent = WORK[lang][k].t + " · " + tr("demo");
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    pv.play().catch(function () {});
  });
  var recShot = document.getElementById("rec-shot");
  if (recShot) recShot.addEventListener("click", function () {
    if (window.jovixOpenSystem) { window.jovixOpenSystem("hr", recShot); return; }
    pv.src = "media/work_hr_" + lang + ".mp4"; pv.poster = "media/work_hr_" + lang + ".webp";
    pc.textContent = (lang === "ar" ? "أتمتة التوظيف" : "Recruitment automation") + " · " + tr("demo");
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    pv.play().catch(function () {});
  });
  function closeDlg() { pv.pause(); if (dlg.close) dlg.close(); else dlg.removeAttribute("open"); }
  document.getElementById("player-close").addEventListener("click", closeDlg);
  dlg.addEventListener("click", function (e) { if (e.target === dlg) closeDlg(); });
  dlg.addEventListener("close", function () { pv.pause(); });

  /* nav border and process line */
  var nav = document.getElementById("nav"), menuBtn = document.getElementById("menu-btn"), menu = document.getElementById("menu");
  function setMenu(open) { menuBtn.setAttribute("aria-expanded", String(open)); menu.hidden = !open; }
  menuBtn.addEventListener("click", function () { setMenu(menu.hidden); });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) { setMenu(false); menuBtn.focus(); } });
  window.addEventListener("scroll", function () { nav.classList.toggle("scrolled", window.scrollY > 8); }, { passive: true });

  /* contact */
  document.querySelectorAll(".copy").forEach(function (b) {
    b.addEventListener("click", function () {
      var done = function (ok) { b.textContent = ok ? (lang === "ar" ? "اتنسخ" : "Copied") : (lang === "ar" ? "حدّد وانسخ" : "Select to copy"); setTimeout(function () { b.textContent = tr("copy"); }, 1600); };
      try { navigator.clipboard.writeText(b.dataset.copy).then(function () { done(true); }, function () { done(false); }); } catch (e) { done(false); }
    });
  });
  var form = document.getElementById("brief"), send = document.getElementById("send");
  function compose() {
    if (!form) return;
    var f = form.elements, need = f.need.options[f.need.selectedIndex].textContent, name = f.name.value.trim(), co = f.company.value.trim(), msg = f.message.value.trim();
    var text = lang === "ar"
      ? "أهلًا Jovix، أنا " + (name || "...") + (co ? " من " + co : "") + ".\nمحتاج: " + need + (msg ? "\n\n" + msg : "")
      : "Hello Jovix, I'm " + (name || "...") + (co ? " from " + co : "") + ".\nI need: " + need + (msg ? "\n\n" + msg : "");
    send.href = "https://wa.me/201283450444?text=" + encodeURIComponent(text);
  }
  if (form) { form.addEventListener("input", compose); form.addEventListener("submit", function (e) { e.preventDefault(); }); }

  /* e-mail links open a ready-to-send message; on desktop, Gmail in a new tab when no mail app is set up */
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="mailto:"]'); if (!a) return;
    var to = a.getAttribute("href").slice(7).split("?")[0], subject = lang === "ar" ? "استفسار عن مشروع" : "Project enquiry", body = lang === "ar" ? "أهلًا Jovix،\n\nمحتاج مساعدة في:\n" : "Hello Jovix,\n\nI need help with:\n";
    e.preventDefault();
    if (window.matchMedia("(pointer: fine)").matches) {
      var w = window.open("https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(to) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body), "_blank", "noopener,noreferrer");
      if (w) return;
    }
    location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  /* moving between pages: the current page slides up and away, the next one rises in, like scrolling on */
  (function () {
    if (reduce || "onpagereveal" in window) return;
    document.documentElement.classList.add("pt-enter");
    requestAnimationFrame(function () { requestAnimationFrame(function () { document.documentElement.classList.remove("pt-enter"); }); });
    document.addEventListener("click", function (e) {
      var a = e.target.closest("a[href]"); if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
      var url = new URL(a.href, location.href);
      if (url.origin !== location.origin || !/\.html$|\/$/.test(url.pathname) || url.pathname === location.pathname) return;
      e.preventDefault();
      document.documentElement.classList.add("pt-leave");
      setTimeout(function () { location.href = url.href; }, 280);
    });
    window.addEventListener("pageshow", function (ev) { if (ev.persisted) document.documentElement.classList.remove("pt-leave"); });
  })();

  /* theme */
  document.getElementById("theme").addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("jovix-theme", next); } catch (e) {}
  });

  /* automation flow: packets and activity feed */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fsvg = document.getElementById("flow-svg"), NS = "http://www.w3.org/2000/svg", feed = document.getElementById("events"), evi = 0, flowVisible = false;
  var pathPts = {};
  function samples(id) {
    if (pathPts[id]) return pathPts[id];
    var el = document.getElementById(id), L = el.getTotalLength(), pts = [];
    for (var s = 0; s <= 48; s++) { var q = el.getPointAtLength(L * s / 48); pts.push([q.x, q.y]); }
    return (pathPts[id] = pts);
  }
  // the moving dots live on their own layer above the drawing, so the drawing itself never repaints
  var pktLayer = null;
  function packet(a, b) {
    if (!pktLayer) { pktLayer = document.createElement("div"); pktLayer.className = "pkt-layer"; fsvg.parentNode.appendChild(pktLayer); }
    var r0 = fsvg.getBoundingClientRect(), host = fsvg.parentNode.getBoundingClientRect(), sc = r0.width / 1000, ox = r0.left - host.left, oy = r0.top - host.top;
    var pts = samples(a).concat(samples(b)).map(function (q) { return [ox + q[0] * sc, oy + q[1] * sc]; });
    var dot = document.createElement("span"); dot.className = "pkt-dot"; pktLayer.appendChild(dot);
    if (!dot.animate) { dot.remove(); return; }
    var frames = pts.filter(function (_, i) { return i % 4 === 0 || i === pts.length - 1; }).map(function (q) { return { transform: "translate(" + q[0].toFixed(1) + "px," + q[1].toFixed(1) + "px)" }; });
    dot.animate(frames, { duration: 2600, easing: "linear" }).onfinish = function () { dot.remove(); };
  }
  function stamp(m) { var d = new Date(Date.now() - m * 60000); return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2); }
  function pushEvent(minsAgo) {
    var list = EVENTS[lang], row = document.createElement("div");
    row.className = "ev"; row.innerHTML = "<time>" + stamp(minsAgo || 0) + "</time><span>" + esc(list[evi % list.length]) + "</span>";
    evi++; feed.insertBefore(row, feed.firstChild);
    while (feed.children.length > 5) feed.lastChild.remove();
  }
  function fillFeed() { feed.innerHTML = ""; evi = 0; for (var m = 4; m >= 0; m--) pushEvent(m * 3); }
  if (fsvg) {
  fillFeed();
  if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { flowVisible = es[0].isIntersecting; }).observe(fsvg);
  if (!reduce) {
    var fi = 0;
    setInterval(function () { if (!flowVisible || document.hidden) return; packet("i" + (fi % 4), "o" + ((fi * 3 + 1) % 4)); fi++; }, 900);
    setInterval(function () { if (flowVisible && !document.hidden) pushEvent(0); }, 2600);
  }
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", fillFeed); });
  }

  /* flip cards */
  function flip(card) { var on = !card.classList.contains("on"); card.classList.toggle("on", on); card.setAttribute("aria-pressed", String(on)); }
  if (panel) panel.addEventListener("click", function (e) { if (e.target.closest("a")) return; var c = e.target.closest(".flip"); if (c) flip(c); });
  if (panel) panel.addEventListener("keydown", function (e) { var c = e.target.closest && e.target.closest(".flip"); if (c && e.target === c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); flip(c); } });

  /* 3D tilt on screens */
  var fine = window.matchMedia("(pointer: fine)").matches;
  function tilt(el) {
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = "perspective(1100px) rotateX(" + (-y * 7).toFixed(2) + "deg) rotateY(" + (x * 9).toFixed(2) + "deg) translateZ(0)";
    });
    el.addEventListener("pointerleave", function () { el.style.transform = ""; });
  }
  if (fine && !reduce) {
    document.querySelectorAll(".tilt").forEach(tilt);
    if (panel) new MutationObserver(function () { panel.querySelectorAll(".shot:not([data-tilt])").forEach(function (s) { s.dataset.tilt = "1"; s.classList.add("tilt"); tilt(s); }); }).observe(panel, { childList: true });
    if (panel) panel.querySelectorAll(".shot").forEach(function (s) { s.dataset.tilt = "1"; s.classList.add("tilt"); tilt(s); });
  }


  /* journey: listen, plan, build, launch, stay */
  var JR = {
    en: [
      { h: "We start by listening", p: "A free call where you tell us what slows the business down. We keep asking until we find the real cause.",
        x: '<div class="bub them"><small>Client</small>Orders come in on WhatsApp and some of them get lost.</div><div class="bub us"><small>Jovix</small>Who answers them today, and how do they reach the warehouse?</div><div class="bub them"><small>Client</small>One person copies them into Excel at the end of the day.</div><div class="bub us"><small>Jovix</small>So the real problem is the copying, not WhatsApp. That is what we fix.</div>' },
      { h: "We plan it together", p: "We map how the work should flow, then agree on scope, timeline and a fixed price in writing.",
        x: '<div class="map"><span>WhatsApp</span><em>&rarr;</em><span>Order agent</span><em>&rarr;</em><span>Odoo orders</span><em>&rarr;</em><span>Warehouse</span><em>&rarr;</em><span>Daily report</span></div><span class="price">Scope, timeline and price approved by you</span>' },
      { h: "We build it step by step", p: "A working demo every week, so you can steer before anything is final.",
        x: '<div class="weeks"><div class="wk"><span>Week 1</span><span class="tr"><i class="w100"></i></span><small>Demo</small></div><div class="wk"><span>Week 2</span><span class="tr"><i class="w100 d2"></i></span><small>Demo</small></div><div class="wk"><span>Week 3</span><span class="tr"><i class="w60 d3"></i></span><small>In progress</small></div></div>' },
      { h: "We launch it with you", p: "We move the data, train your team and switch over together, side by side.",
        x: '<div class="checks"><span>Data moved</span><span>Team trained</span><span>Old steps retired</span><span>Support on WhatsApp</span></div><span class="switch"><i></i>Live</span>' },
      { h: "We stay and keep improving", p: "Regular check-ins, quick fixes and new improvements, so each month runs better than the last.",
        x: '<div class="trend"><svg viewBox="0 0 300 150" preserveAspectRatio="none"><path class="ar" d="M0 130 C 60 120, 90 110, 130 90 S 220 50, 300 20 L300 150 L0 150Z"/><path class="ln" d="M0 130 C 60 120, 90 110, 130 90 S 220 50, 300 20"/><circle cx="300" cy="20" r="6"/></svg><div class="visits"><span>Month 1 · <b>check-in</b>: faster replies</span><span>Month 2 · <b>added</b>: stock alerts</span><span>Month 3 · <b>planned</b>: the next improvement</span></div></div>' }
    ],
    ar: [
      { h: "بنبدأ بإننا نسمعك", p: "مكالمة مجانية تحكيلنا فيها إيه اللي معطّل الشغل. وبنفضل نسأل لحد ما نوصل للسبب الحقيقي.",
        x: '<div class="bub them"><small>العميل</small>الطلبات بتيجي على الواتساب وفي منها بيضيع.</div><div class="bub us"><small>Jovix</small>مين بيرد عليها دلوقتي، وبتوصل للمخزن إزاي؟</div><div class="bub them"><small>العميل</small>في شخص بينقلها على إكسل آخر اليوم.</div><div class="bub us"><small>Jovix</small>يبقى المشكلة الحقيقية في النقل، مش في الواتساب. وده اللي هنحله.</div>' },
      { h: "بنخطط مع بعض", p: "بنرسم الشغل المفروض يمشي إزاي، وبعدين نتفق على النطاق والمدة وسعر ثابت مكتوب.",
        x: '<div class="map"><span>واتساب</span><em>&larr;</em><span>وكيل الطلبات</span><em>&larr;</em><span>طلبات Odoo</span><em>&larr;</em><span>المخزن</span><em>&larr;</em><span>تقرير يومي</span></div><span class="price">النطاق والمدة والسعر بموافقتك</span>' },
      { h: "بنبني خطوة بخطوة", p: "عرض شغال كل أسبوع، فتقدر توجّه الشغل قبل ما أي حاجة تتقفل.",
        x: '<div class="weeks"><div class="wk"><span>الأسبوع 1</span><span class="tr"><i class="w100"></i></span><small>عرض</small></div><div class="wk"><span>الأسبوع 2</span><span class="tr"><i class="w100 d2"></i></span><small>عرض</small></div><div class="wk"><span>الأسبوع 3</span><span class="tr"><i class="w60 d3"></i></span><small>شغالين</small></div></div>' },
      { h: "بنسلّمك الشغل خطوة بخطوة", p: "بننقل البيانات وندرّب فريقك، ونفضل جنبك يوم ورا يوم لحد ما الكل يشتغل عليه براحته.",
        x: '<div class="checks"><span>البيانات اتنقلت</span><span>الفريق اتدرب</span><span>الخطوات القديمة اتلغت</span><span>دعم على الواتساب</span></div><span class="switch"><i></i>اتسلّم</span>' },
      { h: "بنفضل معاك ونحسّن", p: "متابعة دورية وإصلاحات سريعة وتحسينات جديدة، فكل شهر الشغل يمشي أحسن من اللي قبله.",
        x: '<div class="trend"><svg viewBox="0 0 300 150" preserveAspectRatio="none"><path class="ar" d="M0 130 C 60 120, 90 110, 130 90 S 220 50, 300 20 L300 150 L0 150Z"/><path class="ln" d="M0 130 C 60 120, 90 110, 130 90 S 220 50, 300 20"/><circle cx="300" cy="20" r="6"/></svg><div class="visits"><span>الشهر 1 · <b>متابعة</b>: ردود أسرع</span><span>الشهر 2 · <b>إضافة</b>: تنبيهات المخزون</span><span>الشهر 3 · <b>تخطيط</b>: التحسين الجاي</span></div></div>' }
    ]
  };
  var jrSteps = document.querySelectorAll("#jr-steps button"), jrStage = document.getElementById("jr-stage"), jrI = 0, jrTimer = null, jrVisible = false;
  jrSteps.forEach(function (b) { if (!b.querySelector(".bar")) { var s = document.createElement("span"); s.className = "bar"; b.appendChild(s); } });
  function jrShow(i) {
    if (!jrStage) return;
    jrI = i; clearTimeout(jrTimer);
    jrSteps.forEach(function (b, k) { b.classList.toggle("on", k === i); b.classList.toggle("done", k < i); var bar = b.querySelector(".bar"); bar.style.animation = "none"; void bar.offsetWidth; bar.style.animation = ""; });
    var d = JR[lang][i];
    jrStage.innerHTML = '<div class="jr-scene"><h3>' + esc(d.h) + '</h3><p>' + esc(d.p) + '</p>' + d.x + '</div>';
    jrStage.querySelectorAll(".bub, .map span, .map em, .checks span, .visits span").forEach(function (n, k) { n.style.animationDelay = (0.15 + k * 0.32) + "s"; });
    jrStage.querySelectorAll(".tr i").forEach(function (n) { n.style.setProperty("--w", n.classList.contains("w60") ? "60%" : "100%"); n.style.animationDelay = n.classList.contains("d3") ? ".9s" : n.classList.contains("d2") ? ".5s" : ".1s"; });
    if (!reduce) jrTimer = setTimeout(function () { if (jrVisible) jrShow((jrI + 1) % 5); else jrTimer = null; }, 4200);
  }
  jrSteps.forEach(function (b) { b.addEventListener("click", function () { jrShow(+b.dataset.i); }); });
  if (jrStage && "IntersectionObserver" in window) new IntersectionObserver(function (es) { jrVisible = es[0].isIntersecting; if (jrVisible && !jrTimer) jrShow(jrI); }, { threshold: .35 }).observe(jrStage);

  /* agents: four common agents with a live example run */
  var AG = {
    en: [
      { k: "Customer service", t: "Customer service agent", p: "Connected to your company information and your order system. It answers customers, follows their orders, and hands the case to the right employee when a person is needed.",
        li: ["Answers from your real prices, policies and stock", "Tracks orders and tells customers where they are", "Hands over to the responsible employee with the full conversation"], c: "Connects to WhatsApp, website chat, Odoo or your order system", w: "Screen: customer chat",
        s: [["in", "Customer", "Hi, where is my order 5512?"], ["sys", "", "Looked up order 5512"], ["out", "Agent", "It left the warehouse at 10:40 and will reach you before 3 pm."], ["in", "Customer", "Last time one carton arrived damaged."], ["sys", "", "Complaint opened and linked to the order"], ["out", "Agent", "Sorry about that. I have passed it to Ahmed from quality, and he will call you today."], ["card", "Handed over to Ahmed · Quality", "Order 5512 · damaged carton last delivery · customer prefers a call after 1 pm"]] },
      { k: "Sales and follow-up", t: "Sales and follow-up agent", p: "It asks every enquiry about their need, records the details, follows up and books a call when they are interested. The rep gets a summary instead of starting from zero.",
        li: ["Qualifies each enquiry with the right questions", "Saves the lead and follows up on time", "Books the call and briefs the sales rep"], c: "Connects to WhatsApp, website forms, Odoo CRM and your calendar", w: "Screen: new enquiry",
        s: [["in", "Visitor", "I am interested in Odoo for my factory."], ["out", "Agent", "Happy to help. How many people will use it, and what do you want to manage first?"], ["in", "Visitor", "About 25 users. Inventory and manufacturing."], ["sys", "", "Lead saved in the CRM"], ["out", "Agent", "Would Thursday at 11:00 work for a short call with our consultant?"], ["in", "Visitor", "Thursday works."], ["sys", "", "Call booked · Thursday 11:00"], ["card", "Summary for the sales rep", "Factory · 25 users · inventory and manufacturing first · call on Thursday at 11:00"]] },
      { k: "Operations and documents", t: "Operations and documents agent", p: "Instead of moving data by hand from e-mails and invoices, it extracts the data, records it in the system and flags what is missing for review.",
        li: ["Reads e-mails, PDFs, photos and spreadsheets", "Creates the record in your system", "Flags missing or mismatched data for a person"], c: "Connects to e-mail, shared drives, Odoo and Excel", w: "Screen: supplier inbox",
        s: [["in", "Inbox", "New e-mail from Delta Packaging · INV-7731.pdf"], ["sys", "", "Reading the invoice"], ["sys", "", "Supplier, date, lines and VAT extracted"], ["sys", "", "Matched to purchase order PO-1043"], ["out", "Agent", "Vendor bill created and sent to the accountant for approval."], ["flag", "Needs review", "The supplier's tax number is missing from the invoice. I have asked Delta Packaging to send it."]] },
      { k: "Analysis and reports", t: "Analysis and reports agent", p: "The most important agent for business owners. Connected to your sales, ads and bookings, it prepares a summary of the changes that need your attention.",
        li: ["Reads sales, ads and bookings together", "Spots the changes that matter", "Tells you what to review, and with whom"], c: "Connects to Odoo, ad accounts, booking systems and Google Sheets", w: "Screen: morning summary",
        s: [["sys", "", "Morning summary · 8:00"], ["out", "Agent", "Enquiries are up 22% this week, but bookings are down 9%."], ["out", "Agent", "Most new enquiries come from the new ad, and fewer of them reach a booking."], ["card", "Needs your attention", "Review how ad enquiries are followed up with the sales team today."], ["in", "Owner", "Send this to the sales manager."], ["sys", "", "Sent to the sales manager on WhatsApp"]] }
    ],
    ar: [
      { k: "خدمة العملاء", t: "وكيل خدمة العملاء", p: "مربوط بمعلومات الشركة ونظام الطلبات. بيجاوب العميل، ويتابع طلبه، ويحوّل المشكلة للموظف المسؤول لو محتاجة تدخل.",
        li: ["بيرد من أسعارك وسياساتك ومخزونك الحقيقي", "بيتابع الطلبات ويقول للعميل طلبه فين", "بيحوّل للموظف المسؤول ومعاه المحادثة كاملة"], c: "بيتربط بالواتساب وشات الموقع وOdoo أو نظام الطلبات بتاعك", w: "الشاشة: محادثة عميل",
        s: [["in", "العميل", "أهلًا، الطلب 5512 فين؟"], ["sys", "", "راجع الطلب 5512"], ["out", "الوكيل", "خرج من المخزن الساعة 10:40 وهيوصلك قبل 3 العصر."], ["in", "العميل", "المرة اللي فاتت كرتونة وصلت مضروبة."], ["sys", "", "اتفتحت شكوى واترتبطت بالطلب"], ["out", "الوكيل", "آسفين جدًا. حوّلت الموضوع لأحمد من الجودة، وهيكلمك النهارده."], ["card", "اتحوّل لأحمد · الجودة", "الطلب 5512 · كرتونة مضروبة في التوصيل اللي فات · العميل يفضّل مكالمة بعد 1 الضهر"]] },
      { k: "المبيعات والمتابعة", t: "وكيل المبيعات والمتابعة", p: "بيسأل العميل عن احتياجه، ويسجل بياناته، ويتابع معاه، ويحجزله مكالمة لو مهتم. والمندوب بيستلم ملخص بدل ما يبدأ من الصفر.",
        li: ["بيسأل كل عميل الأسئلة الصح", "بيسجل العميل ويتابع معاه في الوقت المناسب", "بيحجز المكالمة ويبعت ملخص للمندوب"], c: "بيتربط بالواتساب وفورم الموقع وOdoo CRM والكالندر", w: "الشاشة: استفسار جديد",
        s: [["in", "زائر", "مهتم بـ Odoo للمصنع بتاعي."], ["out", "الوكيل", "تحت أمرك. كام شخص هيستخدمه، وعايز تبدأ بإدارة إيه الأول؟"], ["in", "زائر", "حوالي 25 مستخدم. المخازن والتصنيع."], ["sys", "", "العميل اتسجل في الـ CRM"], ["out", "الوكيل", "يناسبك الخميس الساعة 11 مكالمة قصيرة مع الاستشاري؟"], ["in", "زائر", "الخميس مناسب."], ["sys", "", "اتحجزت مكالمة · الخميس 11:00"], ["card", "ملخص للمندوب", "مصنع · 25 مستخدم · المخازن والتصنيع الأول · مكالمة الخميس الساعة 11"]] },
      { k: "العمليات والمستندات", t: "وكيل العمليات والمستندات", p: "بدل نقل البيانات يدويًا من الإيميلات والفواتير، بيستخرج البيانات ويسجلها في السيستم، ويعلّم على النواقص اللي محتاجة مراجعة.",
        li: ["بيقرا الإيميلات وملفات PDF والصور والشيتات", "بيعمل السجل في نظامك", "بيعلّم على أي بيانات ناقصة أو مش مطابقة لشخص يراجعها"], c: "بيتربط بالإيميل والدرايف وOdoo والإكسل", w: "الشاشة: إيميلات الموردين",
        s: [["in", "الإيميل", "إيميل جديد من Delta Packaging · INV-7731.pdf"], ["sys", "", "بيقرا الفاتورة"], ["sys", "", "اتستخرج المورد والتاريخ والبنود والضريبة"], ["sys", "", "اتطابقت مع أمر الشراء PO-1043"], ["out", "الوكيل", "فاتورة المورد اتسجلت واتبعتت للمحاسب للموافقة."], ["flag", "محتاج مراجعة", "الرقم الضريبي للمورد مش موجود في الفاتورة. طلبته من Delta Packaging."]] },
      { k: "التحليل والتقارير", t: "وكيل التحليل والتقارير", p: "أهم وكيل لأصحاب الشركات. مربوط ببيانات المبيعات والإعلانات والحجوزات، وبيجهز ملخص بالتغييرات اللي محتاجة انتباهك.",
        li: ["بيقرا المبيعات والإعلانات والحجوزات مع بعض", "بيلقط التغييرات المهمة", "بيقولك تراجع إيه ومع مين"], c: "بيتربط بـ Odoo وحسابات الإعلانات وأنظمة الحجز وGoogle Sheets", w: "الشاشة: ملخص الصبح",
        s: [["sys", "", "ملخص الصبح · 8:00"], ["out", "الوكيل", "الاستفسارات زادت 22% الأسبوع ده، بس الحجوزات قلّت 9%."], ["out", "الوكيل", "أغلب الاستفسارات الجديدة جاية من الإعلان الجديد، وقليل منها بيوصل لحجز."], ["card", "محتاج انتباهك", "راجع مع فريق المبيعات النهارده متابعة استفسارات الإعلان."], ["in", "صاحب الشركة", "ابعت ده لمدير المبيعات."], ["sys", "", "اتبعت لمدير المبيعات على الواتساب"]] }
    ]
  };
  var AGUI = { en: { cta: "I want this agent", ex: "Example run" }, ar: { cta: "عايز الوكيل ده", ex: "مثال توضيحي" } };
  var agTabs = document.getElementById("ag-tabs"), agInfo = document.getElementById("ag-info"), agFeed = document.getElementById("ag-feed"), agTitle = document.getElementById("ag-title");
  var agI = 0, agRun = 0, agVisible = false, agStarted = false;
  function agRender() {
    if (!agTabs) return;
    agTabs.innerHTML = AG[lang].map(function (a, i) { return '<button type="button" role="tab" aria-selected="' + (i === agI) + '" data-i="' + i + '"><i>0' + (i + 1) + '</i><b>' + esc(a.k) + '</b><span class="bar"></span></button>'; }).join("");
    var a = AG[lang][agI];
    agInfo.innerHTML = '<h3>' + esc(a.t) + '</h3><p>' + esc(a.p) + '</p><ul>' + a.li.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul><p class="conn">' + esc(a.c) + '</p>' +
      '<a class="btn solid" target="_blank" rel="noopener noreferrer" href="https://wa.me/201283450444?text=' + encodeURIComponent((lang === "ar" ? "أهلًا Jovix، عايز " : "Hello Jovix, I'd like a ") + a.t) + '">' + esc(AGUI[lang].cta) + '</a>';
    agTitle.textContent = a.w;
  }
  function agPlay() {
    if (!agFeed) return;
    var run = ++agRun, a = AG[lang][agI], tm = 200, total = 0;
    agFeed.innerHTML = "";
    var at = function (ms, fn) { setTimeout(function () { if (run === agRun) fn(); }, ms); };
    a.s.forEach(function (st) {
      if (st[0] === "out") { at(tm, function () { var ty = document.createElement("div"); ty.className = "typing"; ty.innerHTML = "<i></i><i></i><i></i>"; agFeed.appendChild(ty); }); tm += 650; }
      at(tm, function () {
        var t = agFeed.querySelector(".typing"); if (t) t.remove();
        var el = document.createElement("div");
        if (st[0] === "sys") { el.className = "sys"; el.textContent = st[2]; }
        else if (st[0] === "card" || st[0] === "flag") { el.className = "card" + (st[0] === "flag" ? " flag" : ""); el.innerHTML = "<small>" + esc(st[1]) + "</small>" + esc(st[2]); }
        else { el.className = "m " + st[0]; el.innerHTML = "<small>" + esc(st[1]) + "</small>" + esc(st[2]); }
        agFeed.appendChild(el);
        while (agFeed.children.length > 7) agFeed.firstChild.remove();
      });
      tm += st[0] === "sys" ? 600 : 1100;
    });
    total = tm + 1800;
    var bar = agTabs.querySelector('[aria-selected="true"] .bar'); if (bar) bar.style.animationDuration = (total / 1000) + "s";
    at(total, function () { if (agVisible && !reduce) { agI = (agI + 1) % 4; agRender(); agPlay(); } else agStarted = false; });
  }
  if (agTabs) agTabs.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; agI = +b.dataset.i; agRender(); agPlay(); agStarted = true; });
  if (agFeed && "IntersectionObserver" in window) new IntersectionObserver(function (es) { agVisible = es[0].isIntersecting; if (agVisible && !agStarted) { agStarted = true; agPlay(); } }, { threshold: .3 }).observe(agFeed);

  /* statement: words light up as the reader scrolls through it */
  var STMT = {
    en: "Every company has work that *repeats,* *waits* or gets *lost* between people. We find it, _build_ _the_ _solution,_ and stay until it _runs_ _on_ _its_ _own._",
    ar: "كل شركة فيها شغل *بيتكرر،* أو *بيستنى،* أو *بيضيع* بين الناس. إحنا بنلاقيه، _ونبني_ _الحل،_ ونفضل معاك لحد ما _يمشي_ _لوحده._"
  };
  var stmtEl = document.getElementById("stmt"), stmtWords = [], stmtLit = -1;
  function stmtBuild() {
    if (!stmtEl) return;
    stmtEl.innerHTML = STMT[lang].split(" ").map(function (w) {
      var cls = "w";
      if (/^\*.*\*$/.test(w)) { cls += " warm-w"; w = w.slice(1, -1); } else if (/^_.*_$/.test(w)) { cls += " green-w"; w = w.slice(1, -1); }
      return '<span class="' + cls + '">' + esc(w) + '</span>';
    }).join(" ");
    stmtWords = stmtEl.querySelectorAll(".w"); stmtLit = -1; stmtTick();
  }
  function stmtTick() {
    if (!stmtEl || !stmtWords.length) return;
    var r = stmtEl.getBoundingClientRect(), vh = window.innerHeight;
    var p = reduce ? 1 : Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
    var lit = Math.round(p * stmtWords.length);
    if (lit === stmtLit) return;
    stmtLit = lit;
    stmtWords.forEach(function (w, i) { w.classList.toggle("on", i < lit); });
  }

  /* services: cards stack in 3D as the next one slides over */
  var stack = document.querySelectorAll(".stack-card");
  var stackBox = document.querySelector(".stack");
  function stackTick() {
    if (!stack.length || reduce) return;
    var box = stackBox.getBoundingClientRect();
    if (box.bottom < -200 || box.top > window.innerHeight + 200) return;
    /* read every position first, then write, so the browser lays out once per frame */
    var tops = [], hs = [];
    stack.forEach(function (c) { tops.push(c.getBoundingClientRect().top); hs.push(c.offsetHeight); });
    stack.forEach(function (c, i) {
      var inner = c.firstElementChild;
      if (i === stack.length - 1) { inner.style.transform = ""; inner.style.opacity = ""; return; }
      var k = Math.min(1, Math.max(0, 1 - (tops[i + 1] - tops[i]) / hs[i]));
      inner.style.transform = k ? "perspective(1400px) translateY(" + (-k * 18).toFixed(1) + "px) scale(" + (1 - k * 0.06).toFixed(3) + ") rotateX(" + (k * 6).toFixed(2) + "deg)" : "";
      inner.style.opacity = k ? (1 - k * 0.25).toFixed(3) : "";
    });
  }
  var ticking = false;
  window.addEventListener("scroll", function () { if (ticking) return; ticking = true; requestAnimationFrame(function () { ticking = false; stmtTick(); stackTick(); }); }, { passive: true });
  window.addEventListener("resize", function () { stmtTick(); stackTick(); });

  /* hiring page: its own problem-to-solution scenes */
  var MO_HIRE = {
    en: { prob: "The problem", done: "With Jovix", scenes: [
      { k: "Screening", p: "Hundreds of CVs for one opening", s: "Every CV scored against the job", hi: "Shortlist", hn: 4,
        a: ["CV · 3 pages", "CV · wrong field", "CV · no phone", "CV · Arabic", "CV · duplicate", "CV · unread", "CV · unread", "CV · photo only", "CV · unread", "CV · English", "CV · old", "CV · unread"],
        b: ["Nour Ahmed · 92%", "Mahmoud Saeed · 88%", "Salma Khaled · 81%", "Omar Adel · 79%", "Mona Fathy · 74%", "Karim Ali · 71%", "Yara Samir · 66%", "Hany Nabil · 61%", "Ali Mostafa · 58%", "Rana Hassan · 52%", "Tamer Saad · 44%", "Hossam Adel · 38%"] },
      { k: "Interviews", p: "Days of calls to book first interviews", s: "Interviews booked and done on their own", hi: "Done", hn: 6,
        a: ["no answer", "call later", "busy now", "wrong number", "send details?", "Thursday?", "no answer", "reschedule", "voicemail", "where is it?", "no answer", "missed"],
        b: ["Nour · 86 / 100", "Mahmoud · 81 / 100", "Salma · 78 / 100", "Omar · 74 / 100", "Mona · 71 / 100", "Karim · 69 / 100", "Yara · invited", "Hany · invited", "Ali · reminder sent", "Rana · reminder sent", "Tamer · not a fit", "Hossam · not a fit"] }
    ] },
    ar: { prob: "المشكلة", done: "مع Jovix", scenes: [
      { k: "الفرز", p: "مئات السير الذاتية لوظيفة واحدة", s: "كل CV اتقيّم على الوظيفة", hi: "مختصرة", hn: 4,
        a: ["CV · 3 صفحات", "CV · مجال تاني", "CV · من غير رقم", "CV · عربي", "CV · مكرر", "CV · متقراش", "CV · متقراش", "CV · صورة بس", "CV · متقراش", "CV · إنجليزي", "CV · قديم", "CV · متقراش"],
        b: ["نور أحمد · 92%", "محمود سعيد · 88%", "سلمى خالد · 81%", "عمر عادل · 79%", "منى فتحي · 74%", "كريم علي · 71%", "يارا سمير · 66%", "هاني نبيل · 61%", "علي مصطفى · 58%", "رنا حسن · 52%", "تامر سعد · 44%", "حسام عادل · 38%"] },
      { k: "المقابلات", p: "أيام مكالمات عشان تحجز المقابلات الأولى", s: "المقابلات بتتحجز وبتتعمل لوحدها", hi: "خلصت", hn: 6,
        a: ["مبيردش", "كلمني بعدين", "مشغول", "رقم غلط", "ابعت التفاصيل؟", "الخميس؟", "مبيردش", "غيّر الميعاد", "بريد صوتي", "فين اللينك؟", "مبيردش", "فاتت"],
        b: ["نور · 86 / 100", "محمود · 81 / 100", "سلمى · 78 / 100", "عمر · 74 / 100", "منى · 71 / 100", "كريم · 69 / 100", "يارا · اتبعتلها دعوة", "هاني · اتبعتله دعوة", "علي · اتبعت تذكير", "رنا · اتبعت تذكير", "تامر · مش مناسب", "حسام · مش مناسب"] }
    ] }
  };
  var hireMorph = makeMorph(document.getElementById("hire-morph"), { n: 12, tabs: true, data: function () { return MO_HIRE[lang]; } });
  var moBuildBase = moBuild;
  moBuild = function () { moBuildBase(); hireMorph.play(hireMorph.current()); };

  /* the brain: a 3D cortex of points that turns slowly; data arrives, activity ripples across it, results leave */
  (function () {
    var cv = document.getElementById("brain"); if (!cv || !cv.getContext) return;
    /* built only when the section is near, so opening the page stays light */
    if ("IntersectionObserver" in window) {
      var near = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { near.disconnect(); init(); } }, { rootMargin: "700px 0px" });
      near.observe(cv);
    } else init();
    function init() {
    var ctx = cv.getContext("2d"), seed = 5;
    var rnd = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    var parts = [], P = [], N = [], ripples = [], tokens = [];
    [-1, 1].forEach(function (h) {
      parts.push({ c: [h * 0.3, -0.05, 0.0], r: [0.3, 0.4, 0.62], fold: 1 });
      parts.push({ c: [h * 0.28, 0.0, 0.33], r: [0.27, 0.33, 0.36], fold: 1 });
      parts.push({ c: [h * 0.27, -0.03, -0.36], r: [0.26, 0.33, 0.33], fold: 1 });
      parts.push({ c: [h * 0.33, 0.2, 0.1], r: [0.23, 0.18, 0.38], fold: 1 });
      parts.push({ c: [h * 0.17, 0.34, -0.41], r: [0.2, 0.13, 0.2], fold: 2 });
    });
    parts.push({ c: [0, 0.42, -0.16], r: [0.08, 0.22, 0.08], fold: 0 });
    function f(p, q) { var dx = (p[0] - q.c[0]) / q.r[0], dy = (p[1] - q.c[1]) / q.r[1], dz = (p[2] - q.c[2]) / q.r[2]; return dx * dx + dy * dy + dz * dz; }
    var tries = 0;
    while (P.length < 1500 && tries < 60000) {
      tries++;
      var q = parts[(rnd() * parts.length) | 0], u = rnd() * 2 - 1, th = rnd() * 6.2832, s2 = Math.sqrt(1 - u * u);
      var p = [q.c[0] + q.r[0] * s2 * Math.cos(th), q.c[1] + q.r[1] * u, q.c[2] + q.r[2] * s2 * Math.sin(th)];
      if (q.fold === 1 && Math.abs(p[0]) < 0.035) continue;
      var hidden = false;
      for (var k = 0; k < parts.length; k++) if (parts[k] !== q && f(p, parts[k]) < 0.94) { hidden = true; break; }
      if (hidden) continue;
      if (q.fold === 1) {
        var g = Math.sin(14 * p[2] + 4 * Math.sin(9 * p[1])) * Math.sin(12 * p[1] + 3 * Math.sin(8 * p[2]) + 2 * p[0]);
        if (rnd() > 0.25 + 0.75 * Math.abs(g)) continue;
      } else if (q.fold === 2) {
        if (rnd() > 0.12 + 0.3 * Math.abs(Math.sin(40 * p[1]))) continue;
      } else if (rnd() > 0.25) continue;
      P.push(p);
    }
    // nearest neighbour per point, for the short synapse lines of active points
    var cell = 0.07, grid = {};
    P.forEach(function (p, i) { var key = Math.floor(p[0] / cell) + "," + Math.floor(p[1] / cell) + "," + Math.floor(p[2] / cell); (grid[key] = grid[key] || []).push(i); });
    P.forEach(function (p, i) {
      var best = -1, bd = 1e9, gx = Math.floor(p[0] / cell), gy = Math.floor(p[1] / cell), gz = Math.floor(p[2] / cell);
      for (var a = -1; a <= 1; a++) for (var b = -1; b <= 1; b++) for (var c = -1; c <= 1; c++) {
        (grid[(gx + a) + "," + (gy + b) + "," + (gz + c)] || []).forEach(function (j) { if (j === i) return; var d = (P[j][0] - p[0]) * (P[j][0] - p[0]) + (P[j][1] - p[1]) * (P[j][1] - p[1]) + (P[j][2] - p[2]) * (P[j][2] - p[2]); if (d < bd) { bd = d; best = j; } });
      }
      N.push(best);
    });
    var glow = new Float32Array(P.length), proj = new Float32Array(P.length * 3);
    var FLOW = {
      en: { inp: ["Orders", "Invoices", "CVs", "Sales", "Stock", "Messages", "Bookings"], out: ["Answer sent", "Report ready", "Call booked", "Bill created", "Alert sent", "Shortlist ready"] },
      ar: { inp: ["طلبات", "فواتير", "سير ذاتية", "مبيعات", "مخزون", "رسائل", "حجوزات"], out: ["اترد على العميل", "التقرير جاهز", "اتحجزت مكالمة", "الفاتورة اتسجلت", "اتبعت تنبيه", "القائمة جاهزة"] }
    };
    var W = 0, H = 0, dpr = 1, t0 = performance.now(), mx = 0, my = 0, visible = true, lastIn = 0, lastOut = 0, lastRip = 0, lastDraw = 0;
    var COL = {};
    function readColors() {
      var cs = getComputedStyle(document.documentElement);
      COL = { dark: document.documentElement.getAttribute("data-theme") === "dark", base: cs.getPropertyValue("--forest").trim(), em: cs.getPropertyValue("--emerald").trim(), warm: cs.getPropertyValue("--warm").trim() };
    }
    readColors();
    new MutationObserver(readColors).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    function size() { dpr = Math.min(1.5, window.devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    size(); window.addEventListener("resize", size);
    cv.parentElement.addEventListener("pointermove", function (e) { var r = cv.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5; });
    cv.parentElement.addEventListener("pointerleave", function () { mx = my = 0; });
    cv.parentElement.addEventListener("click", function () { ripple((Math.random() * P.length) | 0, 1.4); });
    function ripple(i, power) { ripples.push({ i: i, r: 0, p: power || 1 }); }
    window.jovixBrainBurst = function () { ripple((Math.random() * P.length) | 0, 1.4); };
    function pill(text, x, y, alpha, col, bg) {
      ctx.font = "600 13px " + (lang === "ar" ? '"IBM Plex Sans Arabic"' : '"Instrument Sans"') + ", sans-serif";
      var w = ctx.measureText(text).width + 24, h = 28;
      ctx.globalAlpha = alpha; ctx.fillStyle = bg; ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x - w / 2, y - h / 2, w, h, 14); else ctx.rect(x - w / 2, y - h / 2, w, h);
      ctx.fill(); ctx.fillStyle = col; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(text, x, y + 0.5);
    }
    function frame(now) {
      if (!visible || document.hidden) { running = false; return; }
      if (now - lastDraw < 32) { requestAnimationFrame(frame); return; }
      lastDraw = now;
      var dark = COL.dark, rtl = document.documentElement.dir === "rtl", base = COL.base, em = COL.em, warm = COL.warm;
      var t = (now - t0) / 1000, ry = (reduce ? 0.9 : t * 0.32) + mx * 0.9, rx = -0.3 + my * 0.35;
      var cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx), sc = Math.min(W * 0.44, H * 0.6), ox = W / 2, oy = H * 0.5;
      for (var i = 0; i < P.length; i++) {
        var p = P[i], x = p[0] * cy + p[2] * sy, z = -p[0] * sy + p[2] * cy, y = p[1] * cx - z * sx; z = p[1] * sx + z * cx;
        var k = 2.8 / (2.8 + z); proj[i * 3] = ox + x * sc * k; proj[i * 3 + 1] = oy + y * sc * k; proj[i * 3 + 2] = z; glow[i] *= 0.87;
      }
      for (var r = ripples.length - 1; r >= 0; r--) {
        var R = ripples[r]; R.r += 0.034; var c0 = P[R.i];
        var lo = (R.r - 0.03) * (R.r - 0.03), hi = (R.r + 0.03) * (R.r + 0.03), gv = R.p * (1 - R.r / 0.9);
        if (R.r < 0.03) lo = 0;
        for (var n = 0; n < P.length; n++) {
          var dx = P[n][0] - c0[0], dy = P[n][1] - c0[1], dz = P[n][2] - c0[2], d2 = dx * dx + dy * dy + dz * dz;
          if (d2 > lo && d2 < hi && glow[n] < gv) glow[n] = gv;
        }
        if (R.r > 0.9) ripples.splice(r, 1);
      }
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = 1; ctx.strokeStyle = em;
      for (var s = 0; s < P.length; s++) {
        if (glow[s] < 0.35 || N[s] < 0) continue;
        ctx.globalAlpha = glow[s] * 0.6; ctx.beginPath(); ctx.moveTo(proj[s * 3], proj[s * 3 + 1]); ctx.lineTo(proj[N[s] * 3], proj[N[s] * 3 + 1]); ctx.stroke();
      }
      for (var m = 0; m < P.length; m++) {
        var z2 = proj[m * 3 + 2], depth = Math.max(0, Math.min(1, 0.5 - z2 * 0.7)), g2 = glow[m];
        ctx.globalAlpha = (0.18 + depth * 0.62 + g2 * 0.4) * (dark ? 0.55 : 1);
        ctx.fillStyle = g2 > 0.25 ? em : base;
        var rad = 0.7 + depth * 1.1 + g2 * 1.6;
        ctx.fillRect(proj[m * 3] - rad, proj[m * 3 + 1] - rad, rad * 2, rad * 2);
      }
      ctx.globalCompositeOperation = "source-over";
      if (!reduce && now - lastRip > 850) { lastRip = now; ripple((Math.random() * P.length) | 0, 0.9); }
      var F = FLOW[lang] || FLOW.en, inX = rtl ? W - 56 : 56, outX = rtl ? 84 : W - 84;
      if (!reduce && now - lastIn > 1200) { lastIn = now; tokens.push({ k: 0, txt: F.inp[(Math.random() * F.inp.length) | 0], x0: inX, y0: H * (0.2 + Math.random() * 0.6), n: (Math.random() * P.length) | 0, t: 0 }); }
      if (!reduce && now - lastOut > 2000) { lastOut = now; var src = (Math.random() * P.length) | 0; ripple(src, 1.1); tokens.push({ k: 1, txt: F.out[(Math.random() * F.out.length) | 0], n: src, x1: outX, y1: H * (0.22 + Math.random() * 0.56), t: 0 }); }
      for (var q2 = tokens.length - 1; q2 >= 0; q2--) {
        var T = tokens[q2]; T.t += 0.022;
        var e = 1 - Math.pow(1 - Math.min(1, T.t), 3), nx = proj[T.n * 3], ny = proj[T.n * 3 + 1], al, X, Y;
        if (!T.k) { X = T.x0 + (nx - T.x0) * e; Y = T.y0 + (ny - T.y0) * e; al = T.t < .15 ? T.t / .15 : 1 - Math.max(0, (T.t - .8) / .2); pill(T.txt, X, Y, al, warm, dark ? "rgba(234,178,106,.14)" : "#fbefdc"); if (T.t >= 1) { ripple(T.n, 1.2); tokens.splice(q2, 1); } }
        else { X = nx + (T.x1 - nx) * e; Y = ny + (T.y1 - ny) * e; al = T.t < .2 ? T.t / .2 : 1 - Math.max(0, (T.t - .75) / .25); pill(T.txt, X, Y, al, dark ? "#04251c" : "#ffffff", em); if (T.t >= 1) tokens.splice(q2, 1); }
      }
      ctx.globalAlpha = 1;
      if (!reduce) requestAnimationFrame(frame);
    }
    var running = false;
    function wake() { if (running || !visible || document.hidden) return; running = true; requestAnimationFrame(frame); }
    if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; wake(); }).observe(cv);
    document.addEventListener("visibilitychange", wake);
    ripple(0, 1); wake();
    }
  })();

  /* system viewer: a screen flies forward in 3D and opens full size; inside, systems turn like book pages */
  (function () {
    var sv = document.getElementById("sysv"); if (!sv) return;
    var SYS = ["odoo", "hr", "automation", "agents", "ai", "web"];
    var stage = document.getElementById("sysv-stage"), book = document.getElementById("sysv-book"), bg = document.getElementById("sysv-bg");
    var title = document.getElementById("sysv-title"), meta = document.getElementById("sysv-meta"), tabs = document.getElementById("sysv-tabs"), cta = document.getElementById("sysv-cta");
    var idx = 0, from = null, busy = false, lastFocus = null;
    function page(k) {
      var p = document.createElement("div"); p.className = "sysv-page";
      if (window.jovixMountDemo && (k === "odoo" || k === "hr")) { var holder = document.createElement("div"); holder.className = "sysv-demo"; p.appendChild(holder); window.jovixMountDemo(holder, k); p.insertAdjacentHTML("beforeend", '<span class="sysv-shade"></span>'); return p; }
      p.innerHTML = '<video playsinline muted loop autoplay preload="auto" poster="media/work_' + k + '_' + lang + '.webp" src="media/work_' + k + '_' + lang + '.mp4"></video><span class="sysv-shade"></span>';
      return p;
    }
    function labels() {
      var W = WORK[lang], k = SYS[idx];
      title.textContent = W[k].t; meta.textContent = W[k].meta + " · " + (lang === "ar" ? "بيانات تجريبية" : "Demo data");
      tabs.innerHTML = SYS.map(function (x, i) { return '<button type="button" data-i="' + i + '" aria-pressed="' + (i === idx) + '">' + esc(W.tabs[x]) + '</button>'; }).join("");
      cta.href = "https://wa.me/201283450444?text=" + encodeURIComponent((lang === "ar" ? "أهلًا Jovix، عايز سيستم زي: " : "Hello Jovix, I'd like a system like: ") + W[k].t);
    }
    function fromRect() {
      var r = from && from.getBoundingClientRect(), f = stage.getBoundingClientRect();
      if (!r || !r.width) return null;
      return { dx: r.left - f.left, dy: r.top - f.top, sx: r.width / f.width, sy: r.height / f.height };
    }
    function open(k, el) {
      idx = Math.max(0, SYS.indexOf(k)); from = el || null; lastFocus = document.activeElement;
      book.innerHTML = ""; book.appendChild(page(SYS[idx])); labels();
      sv.hidden = false; document.body.classList.add("sysv-open");
      var g = fromRect();
      if (!reduce && g && stage.animate) {
        stage.animate([
          { transformOrigin: "0 0", transform: "translate(" + g.dx + "px," + g.dy + "px) scale(" + g.sx + "," + g.sy + ")", opacity: 0.5 },
          { transformOrigin: "0 0", transform: "perspective(1800px) translate(" + (g.dx * 0.25) + "px," + (g.dy * 0.25) + "px) scale(" + (0.75 + g.sx * 0.2) + ") rotateX(12deg) rotateY(-7deg)", opacity: 1, offset: 0.55 },
          { transformOrigin: "0 0", transform: "none", opacity: 1 }
        ], { duration: 950, easing: "cubic-bezier(.2,.75,.15,1)" });
        bg.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, easing: "ease-out" });
      }
      document.getElementById("sysv-x").focus();
    }
    function close() {
      if (sv.hidden) return;
      var done = function () { sv.hidden = true; document.body.classList.remove("sysv-open"); book.innerHTML = ""; stage.style.opacity = ""; bg.style.opacity = ""; if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true }); };
      if (reduce || !stage.animate) { done(); return; }
      stage.style.opacity = "0"; bg.style.opacity = "0";
      stage.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translateY(14px) scale(.97)" }], { duration: 380, easing: "cubic-bezier(.4,0,.2,1)" });
      bg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 420, easing: "ease-out" }).onfinish = done;
    }
    function go(to) {
      if (busy || to === idx) return;
      var dir = to > idx ? 1 : -1, old = book.querySelector(".sysv-page"), rtl = document.documentElement.dir === "rtl";
      idx = (to + SYS.length) % SYS.length;
      var nw = page(SYS[idx]); book.insertBefore(nw, old); labels();
      if (reduce || !old.animate) { old.remove(); return; }
      busy = true; old.classList.add("leaving");
      var leftEdge = (dir > 0) !== rtl, ang = leftEdge ? -180 : 180;
      old.style.transformOrigin = leftEdge ? "0 50%" : "100% 50%";
      var shade = old.querySelector(".sysv-shade");
      shade.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 900 });
      nw.animate([{ filter: "brightness(.7)" }, { filter: "brightness(1)" }], { duration: 900, easing: "ease-out" });
      old.animate([{ transform: "rotateY(0deg)" }, { transform: "rotateY(" + ang / 2 + "deg) translateZ(40px)", offset: 0.5 }, { transform: "rotateY(" + ang + "deg)" }],
        { duration: 900, easing: "cubic-bezier(.45,.05,.25,1)" }).onfinish = function () { old.remove(); busy = false; };
    }
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-sys]"); if (!t) return;
      e.preventDefault(); open(t.dataset.sys, t.querySelector("img") || t);
    });
    document.addEventListener("keydown", function (e) {
      if (sv.hidden) { var t = e.target.closest && e.target.closest("[data-sys][role=button]"); if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(t.dataset.sys, t.querySelector("img") || t); } return; }
      var rtl = document.documentElement.dir === "rtl";
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(idx + (rtl ? -1 : 1));
      else if (e.key === "ArrowLeft") go(idx + (rtl ? 1 : -1));
    });
    document.getElementById("sysv-x").addEventListener("click", close);
    bg.addEventListener("click", close);
    document.getElementById("sysv-next").addEventListener("click", function () { go(idx + 1); });
    document.getElementById("sysv-prev").addEventListener("click", function () { go(idx - 1); });
    tabs.addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) go(+b.dataset.i); });
    var x0 = null;
    book.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
    book.addEventListener("pointerup", function (e) { if (x0 === null) return; var dx = e.clientX - x0, rtl = document.documentElement.dir === "rtl"; x0 = null; if (Math.abs(dx) > 50) go(idx + ((dx < 0) !== rtl ? 1 : -1)); });
    window.jovixOpenSystem = open;
  })();

  /* isometric company: each part of the business is a block, data moves through the AI block in the middle */
  (function () {
    var plane = document.getElementById("iso-plane"); if (!plane) return;
    var PARTS = [
      ["Sales", "المبيعات"], ["Stock", "المخازن"], ["Accounting", "الحسابات"],
      ["HR", "الموارد البشرية"], ["AI", "AI"], ["WhatsApp", "واتساب"],
      ["Website", "الموقع"], ["Reports", "التقارير"], ["CRM", "العملاء"]
    ];
    var S = 120, T = 92, tiles = [], visible = false, built = false;
    var ISO_ICONS = [
      '<svg viewBox="0 0 48 48"><path d="M8 12h5l4 18h18l4-12H15"/><circle cx="20" cy="36" r="2.6"/><circle cx="32" cy="36" r="2.6"/></svg>',
      '<svg viewBox="0 0 48 48"><path d="M6 20L24 9l18 11v19H6z"/><path d="M13 39V26h22v13M13 32h22"/></svg>',
      '<svg viewBox="0 0 48 48"><path d="M13 6h17l7 7v29H13z"/><path d="M19 20h12M19 27h12M19 34h7"/></svg>',
      '<svg viewBox="0 0 48 48"><circle cx="18" cy="17" r="6"/><circle cx="32" cy="19" r="5"/><path d="M7 39c1-7 6-11 11-11s10 4 11 11M28 30c5 0 10 3 11 9"/></svg>',
      '<svg viewBox="0 0 48 48"><path d="M24 6l4 12 12 4-12 4-4 12-4-12-12-4 12-4z"/></svg>',
      '<svg viewBox="0 0 48 48"><path d="M10 38l2.5-7A15 15 0 1 1 18 36z"/><path d="M19 18c0 6 5 11 11 11"/></svg>',
      '<svg viewBox="0 0 48 48"><rect x="6" y="9" width="36" height="28" rx="4"/><path d="M6 17h36M12 24h12M12 30h8"/></svg>',
      '<svg viewBox="0 0 48 48"><path d="M8 40h32M13 34V22M21 34V14M29 34V26M37 34V18"/></svg>',
      '<svg viewBox="0 0 48 48"><circle cx="24" cy="16" r="7"/><path d="M10 40c2-8 8-12 14-12s12 4 14 12"/></svg>'
    ];
    PARTS.forEach(function (p, i) {
      var el = document.createElement("div"), col = i % 3, row = (i / 3) | 0;
      el.className = "iso-t" + (i === 4 ? " core" : "");
      el.style.left = (col * S) + "px"; el.style.top = (row * S) + "px";
      el.innerHTML = '<span class="iso-ic">' + ISO_ICONS[i] + '</span><span class="iso-l"></span>';
      plane.appendChild(el); tiles.push({ el: el, x: col * S + T / 2, y: row * S + T / 2, z: i === 4 ? 64 : 22 + ((i * 7) % 3) * 10 });
    });
    function labels() { tiles.forEach(function (t, i) { t.el.firstChild.textContent = PARTS[i][lang === "ar" ? 1 : 0]; }); }
    labels(); document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", labels); });
    function lift(t, extra) { t.el.style.setProperty("--z", (t.z + (extra || 0)) + "px"); }
    function build() {
      built = true;
      tiles.forEach(function (t, i) { t.el.style.setProperty("--z", "0px"); setTimeout(function () { lift(t); t.el.classList.add("up"); }, reduce ? 0 : 120 + i * 110); });
    }
    function packet(from, to, cls, done) {
      var p = document.createElement("span"); p.className = "iso-p " + cls; plane.appendChild(p);
      p.style.transform = "translate3d(" + from.x + "px," + from.y + "px," + (from.z + 16) + "px)";
      requestAnimationFrame(function () { requestAnimationFrame(function () { p.style.transform = "translate3d(" + to.x + "px," + to.y + "px," + (to.z + 16) + "px)"; }); });
      setTimeout(function () { p.remove(); if (done) done(); }, 760);
    }
    function tick() {
      if (!visible || reduce) return;
      var core = tiles[4], src = tiles[[0, 1, 2, 3, 5, 6, 7, 8][(Math.random() * 8) | 0]];
      lift(src, 14); src.el.classList.add("hot");
      setTimeout(function () { lift(src); src.el.classList.remove("hot"); }, 520);
      packet(src, core, "in", function () {
        lift(core, 12); core.el.classList.add("hot");
        setTimeout(function () { lift(core); core.el.classList.remove("hot"); }, 380);
        var dst = tiles[[0, 1, 2, 3, 5, 6, 7, 8][(Math.random() * 8) | 0]];
        packet(core, dst, "out", function () { lift(dst, 10); dst.el.classList.add("ok"); setTimeout(function () { lift(dst); dst.el.classList.remove("ok"); }, 500); });
      });
    }
    setInterval(tick, 650);
    if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible && !built) build(); }, { threshold: .3 }).observe(plane);
    else { visible = true; build(); }
  })();

  /* "We build ..." : the last word changes in place; its box is sized to the longest word so nothing moves */
  (function () {
    var boxes = document.querySelectorAll(".cube"); if (!boxes.length) return;
    var WORDS = {
      en: ["Odoo systems", "hiring automation", "AI agents", "automations", "dashboards", "company websites"],
      ar: ["أنظمة Odoo", "أتمتة التوظيف", "وكلاء AI", "أتمتة الشغل", "لوحات متابعة", "مواقع الشركات"]
    };
    var i = 0;
    function build(box) {
      var w = WORDS[lang];
      box.innerHTML = w.map(function (x) { return '<span class="cw-size" aria-hidden="true">' + esc(x) + '</span>'; }).join("") + '<span class="cw" aria-live="off">' + esc(w[i % w.length]) + '</span>';
    }
    boxes.forEach(build);
    document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { boxes.forEach(build); }); });
    if (reduce) return;
    var onScreen = new Set();
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) onScreen.add(e.target); else onScreen.delete(e.target); }); });
      boxes.forEach(function (b) { io.observe(b); });
    } else boxes.forEach(function (b) { onScreen.add(b); });
    setInterval(function () {
      if (document.hidden || !onScreen.size) return;
      i = (i + 1) % 6;
      var word = WORDS[lang][i];
      boxes.forEach(function (box) {
        var cw = box.querySelector(".cw"); cw.classList.add("out");
        setTimeout(function () { cw.textContent = word; cw.classList.remove("out"); cw.classList.add("in"); void cw.offsetWidth; cw.classList.remove("in"); }, 320);
      });
    }, 2400);
  })();

  try {
  /* live demos: small working screens; anything with data-go opens the next screen in 3D */
  var DEMO_ICON = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>',
    van: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17" r="1.8"/><circle cx="17" cy="17" r="1.8"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/></svg>',
    cash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8l9-5 9 5-9 5z"/><path d="M3 8v8l9 5 9-5V8"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5l11 7-11 7z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'
  };
  var VANS = [
    ["VAN-01", "Mostafa Adel", "مصطفى عادل", "Nasr City", "مدينة نصر", 34, 28900, 9, 11],
    ["VAN-02", "Karim Fathy", "كريم فتحي", "Heliopolis", "مصر الجديدة", 52, 21300, 7, 12],
    ["VAN-03", "Omar Nabil", "عمر نبيل", "Maadi", "المعادي", 18, 31750, 7, 11],
    ["VAN-04", "Hany Samir", "هاني سمير", "Shubra", "شبرا", 61, 17200, 5, 10],
    ["VAN-05", "Youssef Ali", "يوسف علي", "6th of October", "6 أكتوبر", 47, 15600, 6, 13],
    ["VAN-06", "Tamer Hassan", "تامر حسن", "New Cairo", "التجمع", 73, 11700, 4, 9]
  ];
  var SHOPS = [["Al Salam Market", "ماركت السلام"], ["Fresh Corner", "فريش كورنر"], ["Nile Mart", "نايل مارت"], ["Hayat Store", "محل حياة"], ["Al Amal", "الأمل"], ["City Foods", "سيتي فودز"], ["Omar Market", "ماركت عمر"], ["Green Shop", "جرين شوب"]];
  var CANDS = [
    ["Nour Ahmed", "نور أحمد", 92, 86, "shortlist"], ["Mahmoud Saeed", "محمود سعيد", 88, 81, "shortlist"], ["Salma Khaled", "سلمى خالد", 81, 78, "interview"],
    ["Omar Adel", "عمر عادل", 79, 0, "interview"], ["Mona Fathy", "منى فتحي", 74, 0, "screened"], ["Karim Ali", "كريم علي", 71, 0, "screened"], ["Ali Mostafa", "علي مصطفى", 58, 0, "screened"]
  ];
  function L(en, ar) { return lang === "ar" ? ar : en; }
  function money(n) { return n.toLocaleString("en-US"); }
  var DEMOS = {
    odoo: {
      app: function () { return L("Van Sales", "مبيعات العربيات"); },
      home: "home",
      screens: {
        home: function () {
          return '<div class="d-kpis">' +
            '<button class="d-kpi" data-go="vans">' + DEMO_ICON.van + '<small>' + L("Vans on route", "عربيات على الخط") + '</small><b>6</b></button>' +
            '<button class="d-kpi" data-go="invoices">' + DEMO_ICON.doc + '<small>' + L("Invoices today", "فواتير النهارده") + '</small><b>84</b></button>' +
            '<button class="d-kpi hint" data-go="collected">' + DEMO_ICON.cash + '<small>' + L("Collected (EGP)", "اتحصّل (جنيه)") + '</small><b>126,450</b></button>' +
            '<button class="d-kpi" data-go="counts">' + DEMO_ICON.box + '<small>' + L("Stock counts", "جرد العربيات") + '</small><b dir="ltr">5 / 6</b></button></div>' +
            '<div class="d-table">' + VANS.map(function (v, i) {
              return '<button class="d-row" data-go="van" data-p="' + i + '"><b>' + v[0] + '</b><span>' + L(v[1], v[2]) + '</span><span>' + L(v[3], v[4]) + '</span><span class="d-meter"><i class="w' + Math.round(v[5] / 10) + '"></i></span><span dir="ltr">' + money(v[6]) + '</span>' +
                '<em class="' + (v[5] < 25 ? "warn" : "") + '">' + (v[5] < 25 ? L("Reload needed", "محتاجة تحميل") : L("On route", "على الخط")) + '</em></button>';
            }).join("") + '</div><p class="d-tip">' + L("Click any card or van to open it.", "دوس على أي كارت أو عربية تفتحها.") + '</p>';
        },
        collected: function () {
          var rows = VANS.map(function (v, i) { var cash = Math.round(v[6] * (0.55 + i * 0.04)), wal = v[6] - cash; return [v, cash, wal]; });
          return '<h4>' + L("Collections today", "تحصيل النهارده") + '</h4><div class="d-list">' + rows.map(function (r, i) {
            return '<button class="d-li" data-go="van" data-p="' + i + '"><b>' + r[0][0] + ' · ' + L(r[0][1], r[0][2]) + '</b><span>' + L("Cash", "كاش") + ' <b dir="ltr">' + money(r[1]) + '</b></span><span>' + L("Wallet", "محفظة") + ' <b dir="ltr">' + money(r[2]) + '</b></span><em dir="ltr">' + money(r[0][6]) + '</em></button>';
          }).join("") + '</div><div class="d-total"><span>' + L("Total collected", "إجمالي التحصيل") + '</span><b dir="ltr">126,450 EGP</b></div>' +
          '<button class="d-btn" data-act="deposit">' + L("Send to treasury", "ورّد للخزينة") + '</button>';
        },
        invoices: function () {
          return '<h4>' + L("Invoices issued today", "فواتير النهارده") + '</h4><div class="d-list">' + SHOPS.map(function (s, i) {
            var paid = i % 3 !== 2;
            return '<button class="d-li" data-act="invoice"><b dir="ltr">INV/2026/' + (1180 + i) + '</b><span>' + L(s[0], s[1]) + '</span><span dir="ltr">' + money(1200 + i * 735) + ' EGP</span><em class="' + (paid ? "" : "warn") + '">' + (paid ? L("Paid", "اتدفعت") : L("Due", "آجل")) + '</em></button>';
          }).join("") + '</div>';
        },
        counts: function () {
          return '<h4>' + L("End of day stock counts", "جرد آخر اليوم") + '</h4><div class="d-list">' + VANS.map(function (v, i) {
            var done = i !== 5;
            return '<button class="d-li" data-go="van" data-p="' + i + '"><b>' + v[0] + '</b><span>' + L(v[1], v[2]) + '</span><span>' + (done ? L("Difference: none", "الفرق: مفيش") : L("Not counted yet", "لسه متجردتش")) + '</span><em class="' + (done ? "" : "warn") + '">' + (done ? L("Done", "تم") : L("Pending", "مستني")) + '</em></button>';
          }).join("") + '</div>';
        },
        vans: function () {
          return '<h4>' + L("Vans on route now", "العربيات على الخط دلوقتي") + '</h4><div class="d-cards">' + VANS.map(function (v, i) {
            return '<button class="d-card" data-go="van" data-p="' + i + '">' + DEMO_ICON.van + '<b>' + v[0] + '</b><span>' + L(v[3], v[4]) + '</span><span class="d-prog"><i class="w' + Math.round(v[7] / v[8] * 10) + '"></i></span><small>' + L("Shops visited", "محلات اتزارت") + ' <b dir="ltr">' + v[7] + ' / ' + v[8] + '</b></small></button>';
          }).join("") + '</div>';
        },
        van: function (p) {
          var v = VANS[+p || 0];
          var stops = SHOPS.slice(0, 6).map(function (s, i) { return '<li class="' + (i < 4 ? "ok" : i === 4 ? "now" : "") + '"><span>' + L(s[0], s[1]) + '</span><small dir="ltr">' + (9 + i) + ':' + (i % 2 ? "30" : "05") + '</small></li>'; }).join("");
          var stock = [["Penne 400 g", "قلم 400 جم", 42], ["Spaghetti 1 kg", "اسباجتي 1 كجم", 18], ["Elbow 400 g", "مرمرية 400 جم", 7], ["Vermicelli", "شعرية", 25]];
          return '<div class="d-head"><div><h4>' + v[0] + ' · ' + L(v[1], v[2]) + '</h4><small>' + L("Route", "خط السير") + ': ' + L(v[3], v[4]) + '</small></div><b dir="ltr">' + money(v[6]) + ' EGP</b></div>' +
            '<div class="d-split"><div><h5>' + L("Route stops", "محطات الخط") + '</h5><ol class="d-stops">' + stops + '</ol></div>' +
            '<div><h5>' + L("Stock in the van", "المخزون في العربية") + '</h5><div class="d-stock">' + stock.map(function (s) { return '<div><span>' + L(s[0], s[1]) + '</span><b dir="ltr">' + s[2] + '</b><i class="w' + Math.min(10, Math.round(s[2] / 5)) + '"></i></div>'; }).join("") + '</div>' +
            '<button class="d-btn" data-act="reload">' + L("Create reload order", "اعمل أمر تحميل") + '</button></div></div>';
        }
      },
      acts: {
        deposit: function () { return L("Treasury receipt TR/0417 created for 126,450 EGP", "اتعمل إيصال خزينة TR/0417 بمبلغ 126,450 جنيه"); },
        invoice: function () { return L("Invoice sent to the customer on WhatsApp", "الفاتورة اتبعتت للعميل على الواتساب"); },
        reload: function () { return L("Reload order WH/OUT/0932 sent to the warehouse", "أمر التحميل WH/OUT/0932 اتبعت للمخزن"); }
      },
      title: function (s, p) {
        return { home: L("Today", "النهارده"), collected: L("Collected", "التحصيل"), invoices: L("Invoices", "الفواتير"), counts: L("Stock counts", "الجرد"), vans: L("Vans", "العربيات"), van: VANS[+p || 0][0] }[s];
      }
    },
    hr: {
      app: function () { return L("Recruitment", "التوظيف"); },
      home: "home",
      screens: {
        home: function () {
          var cols = [["screened", L("Screened", "اتفرزوا"), 46], ["interview", L("Interview", "مقابلة"), 6], ["shortlist", L("Shortlist", "القائمة المختصرة"), 4]];
          return '<div class="d-job"><div><small>' + L("Open job", "وظيفة مفتوحة") + '</small><b>' + L("Sales Representative", "مندوب مبيعات") + '</b></div><button class="d-btn ghost" data-go="post">' + DEMO_ICON.link + L("Job post", "إعلان الوظيفة") + '</button></div>' +
            '<div class="d-board">' + cols.map(function (c) {
              return '<div class="d-col"><h5>' + c[1] + ' <span dir="ltr">' + c[2] + '</span></h5>' + CANDS.map(function (x, i) { return x[4] === c[0] ? '<button class="d-cand' + (i === 0 ? " hint" : "") + '" data-go="cand" data-p="' + i + '"><b>' + L(x[0], x[1]) + '</b><span class="d-score" dir="ltr">' + x[2] + '%</span></button>' : ""; }).join("") + '</div>';
            }).join("") + '</div><p class="d-tip">' + L("Click a candidate or the job post to open it.", "دوس على أي متقدم أو على إعلان الوظيفة تفتحه.") + '</p>';
        },
        cand: function (p) {
          var c = CANDS[+p || 0], sc = c[3] || c[2];
          var bars = [[L("Experience", "الخبرة"), Math.min(98, c[2] + 4)], [L("Skills", "المهارات"), c[2] - 3], [L("Language", "اللغة"), Math.min(96, c[2] + 1)], [L("Location", "المكان"), 90]];
          return '<div class="d-head"><div><h4>' + L(c[0], c[1]) + '</h4><small>' + L("Sales Representative", "مندوب مبيعات") + '</small></div><span class="d-ring" data-v="' + sc + '"><b dir="ltr">' + sc + '</b></span></div>' +
            '<div class="d-split"><div><h5>' + L("Match with the job", "التطابق مع الوظيفة") + '</h5><div class="d-stock">' + bars.map(function (b) { return '<div><span>' + b[0] + '</span><b dir="ltr">' + b[1] + '%</b><i class="w' + Math.round(b[1] / 10) + '"></i></div>'; }).join("") + '</div></div>' +
            '<div><h5>' + L("Interview summary", "ملخص المقابلة") + '</h5><ul class="d-notes"><li>' + L("Four years selling to supermarkets on fixed routes", "4 سنين بيع لسوبر ماركتات على خطوط ثابتة") + '</li><li>' + L("Clear answers on targets and returns", "إجابات واضحة عن التارجت والمرتجعات") + '</li><li>' + L("Can start in two weeks", "يقدر يبدأ خلال أسبوعين") + '</li></ul>' +
            '<button class="d-btn" data-act="move">' + L("Move to final interview", "انقله للمقابلة النهائية") + '</button></div></div>';
        },
        post: function () {
          return '<div class="d-post"><div class="d-cover"><small>' + L("We are hiring", "مطلوب") + '</small><b>' + L("Sales Representative", "مندوب مبيعات") + '</b><span>' + L("Cairo · Full time", "القاهرة · دوام كامل") + '</span></div>' +
            '<div><h5>' + L("What you will do", "هتعمل إيه") + '</h5><ul class="d-notes"><li>' + L("Visit supermarkets on a fixed route", "تزور سوبر ماركتات على خط ثابت") + '</li><li>' + L("Take orders and collect payments", "تاخد الطلبات وتحصّل الفلوس") + '</li><li>' + L("Report daily on the app", "تعمل تقرير يومي على الأبلكيشن") + '</li></ul>' +
            '<button class="d-btn" data-act="copy">' + DEMO_ICON.link + L("Copy the apply link", "انسخ لينك التقديم") + '</button></div></div>';
        }
      },
      acts: {
        move: function () { return L("Final interview booked for Sunday at 11:00", "المقابلة النهائية اتحجزت الأحد الساعة 11"); },
        copy: function () { return L("Apply link copied. Candidates apply without an account", "لينك التقديم اتنسخ. المتقدم بيقدّم من غير حساب"); }
      },
      title: function (s, p) { return { home: L("Sales Representative", "مندوب مبيعات"), cand: L(CANDS[+p || 0][0], CANDS[+p || 0][1]), post: L("Job post", "إعلان الوظيفة") }[s]; }
    }
  };
  function mountDemo(root, kind) {
    var D = DEMOS[kind]; if (!root || !D) return null;
    root.classList.add("demo"); root.innerHTML =
      '<div class="d-bar"><span class="d-dots"><i></i><i></i><i></i></span><button class="d-back" type="button" aria-label="Back" hidden>' + DEMO_ICON.back + '</button><b class="d-app"></b><span class="d-crumb"></span><span class="d-live">' + L("Live demo", "ديمو حي") + '</span></div>' +
      '<div class="d-view"></div><div class="d-toast" role="status"></div>';
    var view = root.querySelector(".d-view"), back = root.querySelector(".d-back"), app = root.querySelector(".d-app"), crumb = root.querySelector(".d-crumb"), toast = root.querySelector(".d-toast");
    var stack = [[D.home, null]], busy = false, toastT = null;
    function screen(s, p) {
      var el = document.createElement("div"); el.className = "d-screen";
      el.innerHTML = D.screens[s](p);
      el.querySelectorAll(".d-ring").forEach(function (r) { r.style.setProperty("--v", r.dataset.v); });
      return el;
    }
    function labels() {
      var top = stack[stack.length - 1];
      app.textContent = D.app(); crumb.textContent = stack.length > 1 ? D.title(top[0], top[1]) : D.title(D.home);
      back.hidden = stack.length < 2;
      root.querySelector(".d-live").textContent = L("Live demo", "ديمو حي");
    }
    function show(dir, origin) {
      var top = stack[stack.length - 1], old = view.querySelector(".d-screen"), nw = screen(top[0], top[1]);
      view.appendChild(nw); labels();
      if (!old) return;
      if (reduce || !nw.animate) { old.remove(); return; }
      busy = true;
      var o = origin ? (origin.x + "px " + origin.y + "px") : "50% 50%";
      nw.style.transformOrigin = o; old.style.transformOrigin = o;
      if (dir > 0) {
        nw.animate([{ opacity: 0, transform: "perspective(1200px) translateZ(-180px) scale(.72) rotateX(8deg)" }, { opacity: 1, transform: "none" }], { duration: 520, easing: "cubic-bezier(.2,.8,.2,1)" });
        old.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "perspective(1200px) translateZ(120px) scale(1.12)" }], { duration: 420, easing: "ease-in", fill: "forwards" }).onfinish = function () { old.remove(); busy = false; };
      } else {
        nw.animate([{ opacity: 0, transform: "perspective(1200px) translateZ(120px) scale(1.1)" }, { opacity: 1, transform: "none" }], { duration: 480, easing: "cubic-bezier(.2,.8,.2,1)" });
        old.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "perspective(1200px) translateZ(-160px) scale(.75) rotateX(-6deg)" }], { duration: 400, easing: "ease-in", fill: "forwards" }).onfinish = function () { old.remove(); busy = false; };
      }
    }
    function ripple(el, e) {
      var r = el.getBoundingClientRect(), s = document.createElement("span"); s.className = "d-ripple";
      s.style.left = (e.clientX - r.left) + "px"; s.style.top = (e.clientY - r.top) + "px"; el.appendChild(s);
      setTimeout(function () { s.remove(); }, 600);
    }
    root.addEventListener("click", function (e) {
      if (e.target.closest(".d-back")) { if (busy || stack.length < 2) return; stack.pop(); show(-1); return; }
      var go = e.target.closest("[data-go]"), act = e.target.closest("[data-act]");
      if (!go && !act) return;
      e.stopPropagation(); ripple(go || act, e);
      if (go && !busy) {
        var vr = view.getBoundingClientRect(), gr = go.getBoundingClientRect();
        stack.push([go.dataset.go, go.dataset.p]);
        setTimeout(function () { show(1, { x: gr.left + gr.width / 2 - vr.left, y: gr.top + gr.height / 2 - vr.top }); }, 140);
      } else if (act) {
        var msg = D.acts[act.dataset.act](view);
        toast.textContent = msg; toast.classList.remove("on"); void toast.offsetWidth; toast.classList.add("on");
        clearTimeout(toastT); toastT = setTimeout(function () { toast.classList.remove("on"); }, 3200);
      }
    });
    function rerender() { var old = view.querySelector(".d-screen"); if (old) old.remove(); show(0); }
    show(0);
    return { rerender: rerender };
  }
  var demos = [];
  document.querySelectorAll("[data-demo]").forEach(function (el) { var d = mountDemo(el, el.dataset.demo); if (d) demos.push(d); });
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { demos.forEach(function (d) { d.rerender(); }); }); });
  window.jovixMountDemo = mountDemo;

  } catch (err) { if (window.console) console.error(err); }

  setLang(lang);
})();
