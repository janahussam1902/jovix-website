(function () {
  "use strict";
  document.getElementById("year").textContent = new Date().getFullYear();

  var AR = {
    nav1: "خدماتنا", nav2: "AI لفريقك", nav3: "شغلنا", nav4: "ليه Jovix", nav5: "تواصل معنا", wa: "واتساب",
    h_label: "أنظمة، أتمتة، ذكاء اصطناعي ومواقع",
 h_2: "والحل علينا.",
    h_lead: "Jovix فريق هندسي بيبني اللي الشركة بتشتغل عليه: Odoo وأنظمة إدارة الأعمال، الموارد البشرية والتوظيف، الأتمتة، وكلاء الذكاء الاصطناعي، حلول AI لكل فريق، ومواقع الشركات. بنطوّر اللي عندك بالفعل، أو نبنيه من جديد لو ده الأنسب.",
    h_cta1: "ابدأ مشروعك", h_cta2: "شوف شغلنا", h_s1: "أول مكالمة مجانية", h_s2: "عرض مكتوب", h_s3: "عربي وإنجليزي",
    h_cap: "وكيل خدمة عملاء بيرد على الطلبات في واتساب", demo: "بيانات تجريبية",
    f1b: "Odoo 16 و17 و18 و19", f1s: "تسطيب وموديولات مخصصة وتحديث نسخ",
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
    p4b: "نطلق ونفضل معاك", p4p: "ننقل البيانات وندرّب فريقك، ونفضل معاك على الواتساب بعد التشغيل.",
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
    st1: "موديول ومشروع اتسلموا", st2: "نسخ Odoo، من 16 لـ 19", st3: "مجالات اشتغلنا فيها", st4: "لغتين، عربي وإنجليزي",
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
    nav7: "وكلاء AI", skip: "روح للمحتوى",
    h_1: 'احكيلنا <span class="warm">المشكلة.</span>',
    ft_tag: 'احكيلنا <span class="warm">المشكلة.</span> والحل علينا.', ft_h1: "الخدمات", ft_h2: "الشركة", ft_h3: "تواصل",
    ft_l1: "Odoo وأنظمة الأعمال", ft_l2: "أتمتة التوظيف", ft_l3: "الأتمتة", ft_l4: "وكلاء AI", ft_l5: "AI لفريقك", ft_l6: "مواقع الشركات", ft_l7: "طريقة شغلنا", ft_l8: "الأسئلة", ft_base: "عربي وإنجليزي · مصر", ag_label: "وكلاء الذكاء الاصطناعي", ag_h: "أكتر أربع وكلاء الشركات بتطلبهم مننا",
    ag_p: "كل وكيل مربوط ببياناتك وأنظمتك، وبيشتغل بالعربي أو الإنجليزي، وبيحوّل لشخص من فريقك لما يكون ده الصح.", ag_live: "مثال توضيحي",
    pr_label: "بنشتغل معاك إزاي", pr_h: "بنسمعك، ونحلها معاك خطوة بخطوة، ونفضل معاك نتأكد إن كل حاجة بتتحسن",
    pr_p: "شريك من أول كلمة لحد بعد التشغيل بكتير. اختار أي خطوة أو سيبها تمشي لوحدها.",
    j1b: "بنسمعك", j1s: "مشكلتك بكلامك إنت", j2b: "بنخطط مع بعض", j2s: "النطاق والخطوات وسعر ثابت", j3b: "بنبني خطوة بخطوة", j3s: "عرض كل أسبوع",
    j4b: "بنطلق معاك", j4s: "البيانات اتنقلت والفريق اتدرب", j5b: "بنفضل معاك ونحسّن", j5s: "متابعة وتحسينات جديدة",
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
    document.getElementById("rec-img").src = "media/work_hr_" + lang + ".webp";
    document.getElementById("rec-demo").href = "https://wa.me/201283450444?text=" + encodeURIComponent(lang === "ar" ? "أهلًا Jovix، عايز أحجز عرض تجريبي لأتمتة التوظيف." : "Hello Jovix, I'd like to book a demo of your recruitment automation.");
    document.getElementById("rec-early").href = "https://wa.me/201283450444?text=" + encodeURIComponent(lang === "ar" ? "أهلًا Jovix، عايز أسجّل في القائمة الأولى للنسخة السحابية من أتمتة التوظيف." : "Hello Jovix, please add me to the early list for the cloud version of your recruitment automation.");
    try { localStorage.setItem("jovix-lang", lang); } catch (e) {}
  }
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });

  /* morph: a problem scattered, then put in order. One engine, used by the hero, the team picker and the trust column. */
  function makeMorph(root, o) {
    var head = document.createElement("div"), state = document.createElement("span"), title = document.createElement("b"), body = document.createElement("div"), sweep = document.createElement("span"), foot = null;
    head.className = "mo-head"; state.className = "mo-state"; title.className = "mo-title"; body.className = "mo-body"; sweep.className = "mo-sweep";
    head.appendChild(state); head.appendChild(title); body.appendChild(sweep); root.appendChild(head); root.appendChild(body);
    if (o.tabs) { foot = document.createElement("div"); foot.className = "mo-foot"; foot.setAttribute("role", "tablist"); root.appendChild(foot); }
    var rows = Math.ceil(o.n / 2), tok = [], idx = 0, run = 0, visible = true, pending = false;
    body.style.setProperty("--rows", rows);
    for (var i = 0; i < o.n; i++) { var t = document.createElement("div"); t.className = "mo-t"; t.innerHTML = '<span class="a"></span><span class="b"></span><em></em>'; body.appendChild(t); tok.push(t); }
    var rnd = function (a, b) { return a + Math.random() * (b - a); };
    function chaos(el, i) {
      el.style.left = rnd(1, 50).toFixed(1) + "%"; el.style.top = rnd(0, 100 - 100 / rows).toFixed(1) + "%";
      el.style.transform = "rotate(" + rnd(-13, 13).toFixed(1) + "deg) scale(" + rnd(.88, 1).toFixed(2) + ")"; el.style.transitionDelay = (i * 0.025) + "s";
    }
    function order(el, i) {
      el.style.left = (i % 2 ? 51 : 0) + "%"; el.style.top = (((i / 2) | 0) * 100 / rows).toFixed(2) + "%";
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
      tok.forEach(function (t, k) {
        t.querySelector(".a").textContent = sc.a[k]; t.querySelector(".b").textContent = sc.b[k]; t.querySelector("em").textContent = sc.hi || "";
        t.classList.toggle("hi", !!sc.hi && k < (sc.hn || 4)); chaos(t, k);
      });
      if (reduce) { solve(d, sc); return; }
      later(o.wait || 2600, function () { sweep.classList.remove("go"); void sweep.offsetWidth; sweep.classList.add("go"); });
      later((o.wait || 2600) + 500, function () { solve(d, sc); });
      later(o.cycle || 8600, function () {
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
  var roleMorph = makeMorph(document.getElementById("role-morph"), { n: 8, data: function () { return MO_ROLE[lang]; }, cycle: 7600, wait: 2200 });
  var trustMorph = makeMorph(document.getElementById("trust-morph"), { n: 8, data: function () { return MO_TRUST[lang]; }, cycle: 8200, wait: 2600 });
  function moBuild() { heroMorph.play(heroMorph.current()); roleMorph.play(role); trustMorph.play(0); }

  /* roles */
  var roleList = document.getElementById("role-list"), rolePanel = document.getElementById("role-panel");
  function renderRoles() {
    var data = ROLES[lang];
    roleList.innerHTML = data.map(function (r, i) {
      return '<button type="button" role="tab" id="role-' + i + '" aria-controls="role-panel" aria-selected="' + (i === role) + '" data-i="' + i + '">' + esc(r.k) + '</button>';
    }).join("");
    paintRole(false);
  }
  function paintRole(animate) {
    var r = ROLES[lang][role], ui = ROLE_UI[lang];
    rolePanel.setAttribute("aria-labelledby", "role-" + role);
    document.getElementById("role-text").innerHTML = '<h3>' + esc(r.t) + '</h3><div class="role-items">' + r.items.map(function (it, i) {
      return '<div class="role-item"><i>' + ui.n + ' 0' + (i + 1) + '</i><b>' + esc(it[0]) + '</b><span>' + esc(it[1]) + '</span></div>';
    }).join("") + '</div><div class="role-foot"><span>' + esc(r.w) + '</span><a class="btn solid" target="_blank" rel="noopener" href="https://wa.me/201283450444?text=' +
      encodeURIComponent((lang === "ar" ? "أهلًا Jovix، عايز أعرف أكتر عن حلول AI " : "Hello Jovix, I'd like to hear more about AI ") + r.t.toLowerCase()) + '">' + esc(ui.cta) + '</a></div>';
    var rt = document.getElementById("role-text"); if (animate) { rt.classList.remove("fade-swap"); void rt.offsetWidth; rt.classList.add("fade-swap"); }
    if (typeof roleMorph !== "undefined" && roleMorph) roleMorph.play(role);
  }
  roleList.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    role = +b.dataset.i;
    roleList.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-selected", String(x === b)); });
    paintRole(true);
  });

  /* work */
  var tabsEl = document.getElementById("work-tabs"), panel = document.getElementById("work-panel");
  var KEYS = ["odoo", "hr", "automation", "agents", "ai", "web"];
  function renderWork(animate) {
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
  tabsEl.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; tab = b.dataset.k; renderWork(true); });
  document.querySelectorAll(".svc[data-tab]").forEach(function (a) { a.addEventListener("click", function () { tab = a.dataset.tab; renderWork(true); }); });

  /* video dialog */
  var dlg = document.getElementById("player"), pv = document.getElementById("player-video"), pc = document.getElementById("player-cap");
  panel.addEventListener("click", function (e) {
    var s = e.target.closest(".shot"); if (!s) return;
    var k = s.dataset.video;
    pv.src = "media/work_" + k + "_" + lang + ".mp4"; pv.poster = "media/work_" + k + "_" + lang + ".webp";
    pc.textContent = WORK[lang][k].t + " · " + tr("demo");
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    pv.play().catch(function () {});
  });
  document.getElementById("rec-shot").addEventListener("click", function () {
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
    var f = form.elements, need = f.need.options[f.need.selectedIndex].textContent, name = f.name.value.trim(), co = f.company.value.trim(), msg = f.message.value.trim();
    var text = lang === "ar"
      ? "أهلًا Jovix، أنا " + (name || "...") + (co ? " من " + co : "") + ".\nمحتاج: " + need + (msg ? "\n\n" + msg : "")
      : "Hello Jovix, I'm " + (name || "...") + (co ? " from " + co : "") + ".\nI need: " + need + (msg ? "\n\n" + msg : "");
    send.href = "https://wa.me/201283450444?text=" + encodeURIComponent(text);
  }
  form.addEventListener("input", compose);
  form.addEventListener("submit", function (e) { e.preventDefault(); });

  /* theme */
  document.getElementById("theme").addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("jovix-theme", next); } catch (e) {}
  });

  /* automation flow: packets and activity feed */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fsvg = document.getElementById("flow-svg"), NS = "http://www.w3.org/2000/svg", feed = document.getElementById("events"), evi = 0, flowVisible = false;
  function packet(a, b) {
    var c = document.createElementNS(NS, "circle"); c.setAttribute("r", "6"); c.setAttribute("class", "pkt"); fsvg.appendChild(c);
    var pa = document.getElementById(a), pb = document.getElementById(b), la = pa.getTotalLength(), lb = pb.getTotalLength(), t0 = null, dur = 2600;
    (function f(t) {
      if (t0 === null) t0 = t;
      var k = (t - t0) / dur; if (k > 1) { c.remove(); return; }
      var pt = k < .5 ? pa.getPointAtLength(la * k * 2) : pb.getPointAtLength(lb * (k - .5) * 2);
      c.setAttribute("cx", pt.x); c.setAttribute("cy", pt.y); requestAnimationFrame(f);
    })(performance.now());
  }
  function stamp(m) { var d = new Date(Date.now() - m * 60000); return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2); }
  function pushEvent(minsAgo) {
    var list = EVENTS[lang], row = document.createElement("div");
    row.className = "ev"; row.innerHTML = "<time>" + stamp(minsAgo || 0) + "</time><span>" + esc(list[evi % list.length]) + "</span>";
    evi++; feed.insertBefore(row, feed.firstChild);
    while (feed.children.length > 5) feed.lastChild.remove();
  }
  function fillFeed() { feed.innerHTML = ""; evi = 0; for (var m = 4; m >= 0; m--) pushEvent(m * 3); }
  fillFeed();
  if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { flowVisible = es[0].isIntersecting; }).observe(fsvg);
  if (!reduce) {
    var fi = 0;
    setInterval(function () { if (!flowVisible || document.hidden) return; packet("i" + (fi % 4), "o" + ((fi * 3 + 1) % 4)); fi++; }, 700);
    setInterval(function () { if (flowVisible && !document.hidden) pushEvent(0); }, 2600);
  }
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", fillFeed); });

  /* flip cards */
  function flip(card) { var on = !card.classList.contains("on"); card.classList.toggle("on", on); card.setAttribute("aria-pressed", String(on)); }
  panel.addEventListener("click", function (e) { if (e.target.closest("a")) return; var c = e.target.closest(".flip"); if (c) flip(c); });
  panel.addEventListener("keydown", function (e) { var c = e.target.closest && e.target.closest(".flip"); if (c && e.target === c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); flip(c); } });

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
    new MutationObserver(function () { panel.querySelectorAll(".shot:not([data-tilt])").forEach(function (s) { s.dataset.tilt = "1"; s.classList.add("tilt"); tilt(s); }); }).observe(panel, { childList: true });
    panel.querySelectorAll(".shot").forEach(function (s) { s.dataset.tilt = "1"; s.classList.add("tilt"); tilt(s); });
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
      { h: "بنطلق معاك", p: "بننقل البيانات وندرّب فريقك ونعمل التحويل وإحنا جنبك.",
        x: '<div class="checks"><span>البيانات اتنقلت</span><span>الفريق اتدرب</span><span>الخطوات القديمة اتلغت</span><span>دعم على الواتساب</span></div><span class="switch"><i></i>شغال</span>' },
      { h: "بنفضل معاك ونحسّن", p: "متابعة دورية وإصلاحات سريعة وتحسينات جديدة، فكل شهر الشغل يمشي أحسن من اللي قبله.",
        x: '<div class="trend"><svg viewBox="0 0 300 150" preserveAspectRatio="none"><path class="ar" d="M0 130 C 60 120, 90 110, 130 90 S 220 50, 300 20 L300 150 L0 150Z"/><path class="ln" d="M0 130 C 60 120, 90 110, 130 90 S 220 50, 300 20"/><circle cx="300" cy="20" r="6"/></svg><div class="visits"><span>الشهر 1 · <b>متابعة</b>: ردود أسرع</span><span>الشهر 2 · <b>إضافة</b>: تنبيهات المخزون</span><span>الشهر 3 · <b>تخطيط</b>: التحسين الجاي</span></div></div>' }
    ]
  };
  var jrSteps = document.querySelectorAll("#jr-steps button"), jrStage = document.getElementById("jr-stage"), jrI = 0, jrTimer = null, jrVisible = false;
  jrSteps.forEach(function (b) { if (!b.querySelector(".bar")) { var s = document.createElement("span"); s.className = "bar"; b.appendChild(s); } });
  function jrShow(i) {
    jrI = i; clearTimeout(jrTimer);
    jrSteps.forEach(function (b, k) { b.classList.toggle("on", k === i); b.classList.toggle("done", k < i); var bar = b.querySelector(".bar"); bar.style.animation = "none"; void bar.offsetWidth; bar.style.animation = ""; });
    var d = JR[lang][i];
    jrStage.innerHTML = '<div class="jr-scene"><h3>' + esc(d.h) + '</h3><p>' + esc(d.p) + '</p>' + d.x + '</div>';
    jrStage.querySelectorAll(".bub, .map span, .map em, .checks span, .visits span").forEach(function (n, k) { n.style.animationDelay = (0.15 + k * 0.32) + "s"; });
    jrStage.querySelectorAll(".tr i").forEach(function (n) { n.style.setProperty("--w", n.classList.contains("w60") ? "60%" : "100%"); n.style.animationDelay = n.classList.contains("d3") ? ".9s" : n.classList.contains("d2") ? ".5s" : ".1s"; });
    if (!reduce) jrTimer = setTimeout(function () { if (jrVisible) jrShow((jrI + 1) % 5); else jrTimer = null; }, 5200);
  }
  jrSteps.forEach(function (b) { b.addEventListener("click", function () { jrShow(+b.dataset.i); }); });
  if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { jrVisible = es[0].isIntersecting; if (jrVisible && !jrTimer) jrShow(jrI); }, { threshold: .35 }).observe(jrStage);

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
    agTabs.innerHTML = AG[lang].map(function (a, i) { return '<button type="button" role="tab" aria-selected="' + (i === agI) + '" data-i="' + i + '"><i>0' + (i + 1) + '</i><b>' + esc(a.k) + '</b><span class="bar"></span></button>'; }).join("");
    var a = AG[lang][agI];
    agInfo.innerHTML = '<h3>' + esc(a.t) + '</h3><p>' + esc(a.p) + '</p><ul>' + a.li.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("") + '</ul><p class="conn">' + esc(a.c) + '</p>' +
      '<a class="btn solid" target="_blank" rel="noopener noreferrer" href="https://wa.me/201283450444?text=' + encodeURIComponent((lang === "ar" ? "أهلًا Jovix، عايز " : "Hello Jovix, I'd like a ") + a.t) + '">' + esc(AGUI[lang].cta) + '</a>';
    agTitle.textContent = a.w;
  }
  function agPlay() {
    var run = ++agRun, a = AG[lang][agI], tm = 200, total = 0;
    agFeed.innerHTML = "";
    var at = function (ms, fn) { setTimeout(function () { if (run === agRun) fn(); }, ms); };
    a.s.forEach(function (st) {
      if (st[0] === "out") { at(tm, function () { var ty = document.createElement("div"); ty.className = "typing"; ty.innerHTML = "<i></i><i></i><i></i>"; agFeed.appendChild(ty); }); tm += 900; }
      at(tm, function () {
        var t = agFeed.querySelector(".typing"); if (t) t.remove();
        var el = document.createElement("div");
        if (st[0] === "sys") { el.className = "sys"; el.textContent = st[2]; }
        else if (st[0] === "card" || st[0] === "flag") { el.className = "card" + (st[0] === "flag" ? " flag" : ""); el.innerHTML = "<small>" + esc(st[1]) + "</small>" + esc(st[2]); }
        else { el.className = "m " + st[0]; el.innerHTML = "<small>" + esc(st[1]) + "</small>" + esc(st[2]); }
        agFeed.appendChild(el);
        while (agFeed.children.length > 7) agFeed.firstChild.remove();
      });
      tm += st[0] === "sys" ? 800 : 1500;
    });
    total = tm + 2600;
    var bar = agTabs.querySelector('[aria-selected="true"] .bar'); if (bar) bar.style.animationDuration = (total / 1000) + "s";
    at(total, function () { if (agVisible && !reduce) { agI = (agI + 1) % 4; agRender(); agPlay(); } else agStarted = false; });
  }
  agTabs.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; agI = +b.dataset.i; agRender(); agPlay(); agStarted = true; });
  if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { agVisible = es[0].isIntersecting; if (agVisible && !agStarted) { agStarted = true; agPlay(); } }, { threshold: .3 }).observe(agFeed);

  setLang(lang);
})();
