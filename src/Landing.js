import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // استيراد أنماط المكتبة
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Testimonials from "./components/testimonials";
import Models from "./components/Models";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const [activeVideo, setActiveVideo] = useState(null); // لتتبع الفيديو النشط



  const certificates = [
    {
      id: 1,
      image: "/assets/certificates/1.webp",
    },
    {
      id: 2,
      image: "/assets/certificates/2.webp",
    },
    {
      id: 3,
      image: "/assets/certificates/3.webp",
    },
    {
      id: 4,
      image: "/assets/certificates/4.webp",
    },
    {
      id: 5,
      image: "/assets/certificates/5.webp",
    },
    {
      id: 6,
      image: "/assets/certificates/6.webp",
    },
    {
      id: 7,
      image: "/assets/certificates/7.webp",
    },
    {
      id: 8,
      image: "/assets/certificates/8.webp",
    },
  ];
  const handleVideoClick = (videoSrc) => {
    setActiveVideo(videoSrc); // تعيين الفيديو النشط
  };

  const closeVideo = () => {
    setActiveVideo(null); // إغلاق الفيديو
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "ما هو تطبيق أسرة؟",
      answer:
        "تطبيق أسرة هو منصة تهدف إلى تمكين الشباب والأطفال من اكتشاف إمكانياتهم وتحقيق أهدافهم من خلال دعم الكوتشز وبرامج متخصصة.",
    },
    {
      question: "لمن يقدم تطبيق أسرة خدماته؟",
      answer:
        "تطبيق أسرة يقدم خدماته للأطفال والشباب وأولياء الأمور لتطوير مهاراتهم وبناء شخصياتهم.",
    },
    {
      question: "كيف يمكنني التسجيل في تطبيق أسرة؟",
      answer:
        "يمكنك التسجيل من خلال تحميل التطبيق على هاتفك الذكي وإنشاء حساب جديد باتباع الخطوات البسيطة.",
    },
    {
      question: "ما هو دور الكوتشز في تطبيق أسرة؟",
      answer:
        "الكوتشز في تطبيق أسرة يقدمون التوجيه والدعم للأفراد، سواء كانوا أطفالًا أو أولياء أمور، لمساعدتهم على التعامل مع تحديات الحياة وتحقيق أهدافهم.",
    },
    {
      question: "هل تطبيق أسرة مناسب لأولياء الأمور؟",
      answer:
        "نعم، يقدم تطبيق أسرة برامج مخصصة لأولياء الأمور لمساعدتهم على تحسين تواصلهم مع أطفالهم وتعزيز دورهم التربوي.",
    },
    {
      question: "هل هناك جلسات فردية في تطبيق أسرة؟",
      answer:
        "نعم، يوفر تطبيق أسرة جلسات فردية مع الكوتشز لتقديم الدعم الشخصي بما يتناسب مع احتياجات المستخدم.",
    },
    {
      question: "ما هي مميزات تطبيق أسرة؟",
      answer:
        "من مميزات تطبيق أسرة: بيئة تفاعلية، دعم من كوتشز متخصصين، برامج مخصصة لكل فئة عمرية، وشهادات عند إتمام البرامج.",
    },
    {
      question: "كيف يمكنني التواصل مع فريق الدعم؟",
      answer:
        "يمكنك التواصل مع فريق الدعم من خلال قسم 'اتصل بنا' داخل التطبيق أو عبر البريد الإلكتروني الخاص بخدمة العملاء.",
    },
  ];

  return (
    <>
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="data">
              <div className="image">
                <img src="/assets/Dr.Mohamed-image.webp" alt="Landing-image" />
              </div>
              <div className="text">
                <h1>
                  مرحبًا بك في الموقع الرسمي <span>لـ د.محمد حربي</span>
                </h1>
                <p className="text-rectangle">
                  مؤسس قدرات | دكتوراه في إدارة الأعمال | مستشار في ريادة
                  الأعمال
                </p>
              </div>
            </div>
            <div>
              <a href="#about-sec">
                <img
                  className="scroll-down-arrow"
                  src="/assets/scroll-down.webp"
                  alt="scroll-down"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="about-sec">
          <div className="container coulmn">
            <div className="about-txt">
              <h1 className="title">من أنا</h1>
              <p className="about-data">
                أنا محمد حربي رائد الأعمال، ومؤسس  <span>قدرات</span>، وحاصل على دكتوراه في
                إدارة الأعمال. أؤمن بأن الشباب هم القوة الحقيقية للمستقبل، وأن
                دعمهم وتمكينهم بالمعرفة والمهارات الصحيحة هو المفتاح لبناء جيل
                قادر على تحقيق النجاح في العالم.
              </p>
            </div>
                 {/* سكشن الصور */}
              <div className="image-grid">
                  {/* الصف الأول - صورتين كبيرتين */}
                <div className="grid-item wide">
                  <img src="/assets/2.webp" alt="أبو المراهقين" />
                  <div className="overlay">أبو المراهقين</div>
                </div>
                <div className="grid-item wide">
                  <img src="/assets/1.webp"alt="دكتوراة إدارة أعمال" />
                  <div className="overlay">دكتوراة إدارة أعمال</div>
                </div>

                {/* الصف الثاني - ثلاث صور متوسطة */}
                <div className="grid-item small">
                  <img src="/assets/4.webp" alt="رائد أعمال" />
                  <div className="overlay">رائد أعمال</div>
                </div>
                <div className="grid-item small">
                  <img src="/assets/5.webp" alt="كوتش" />
                  <div className="overlay">كوتش</div>
                </div>
                <div className="grid-item small">
                  <img src="/assets/3.webp" alt="شهادة TOT" />
                  <div className="overlay">شهادة TOT</div>
                </div>

                {/* الصف الثالث - صورة واحدة بالعرض كامل */}
                <div className="grid-item full">
                  <img src="/assets/6.webp" alt="ضيف في قناة الشمس" />
                  <div className="overlay">ضيف في قناة الشمس</div>
                </div>
              </div>
          </div>
        </section>
        {/* <section id="video">
          <h1 className="title">لماذا أسرة ؟</h1>
          <img
            src="/assets/why-ausrah.webp"
            alt="video-img"
            onClick={openModal}
            style={{ cursor: "pointer" }}
          />
          {isModalOpen && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={closeModal}>
                  &times;
                </button>
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/QXoxGrqWyeg?si=b5bViH2znXNrZ-lW"
                  title="Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </section> */}

        <section id="achievs">
              <h1 className="title">الإنجازات</h1>
          <div className="container">
            <img src="/assets/1co.webp" alt="achievs" />
            <div className="achievs-txt">
              <h2>سبورا تكس</h2>
              <p className="achievs-data">
              شركة متخصصة في  الأقمشة الرياضية، الطباعة، تصميم الباترونات، والتقفيل بأعلى جودة لتلبية احتياجات السوق الرياضي.</p>
            </div>
          </div>
          <div className="container right">
          <img src="/assets/2co.webp" alt="achievs" />
          <div className="achievs-txt">
              <h2>بلو ديسك</h2>
              <p className="achievs-data">
              شركة برمجية تقدم حلول تقنية متكاملة، من تطوير المواقع والتطبيقات إلى البرمجيات المخصصة، لضمان تجربة رقمية متميزة.</p>
            </div>
          </div>
          <div className="container">
          <img src="/assets/3co.webp" alt="achievs" />
          <div className="achievs-txt">
              <h2>جرين ستوديو</h2>
              <p className="achievs-data">
              استوديو احترافي لتسجيل وتصوير البودكاست والمحتوى الرقمي، بأحدث التقنيات لإنتاج مواد عالية الجودة.</p>
            </div>
          </div>
          <div className="container right">
          <img src="/assets/4co.webp" alt="achievs" />
          <div className="achievs-txt">
              <h2>قدرات</h2>
              <p className="achievs-data">
              مدرسة تهدف إلى تطوير المهارات وتنمية القدرات بداية من معرفة ميول الطفل او الشاب وحتى تحويل   الأشخاص إلى رواد أعمال بناءًا على ميولهم              </p>
            </div>
          </div>
        </section>

<section id="certificate">
  <h1 className="title">الشهادات</h1>
  <div className="container" >
  {certificates.map((cert) => (
      <img src={cert.image} key={cert.id} alt={cert.title} />
    ))}
    </div>
</section>
<section  id="models-sec" className="models-sec">
<h1 className="title white">نماذج الشباب</h1>
    <Models/>
</section>

{/* <section>
  <Testimonials/>
</section> */}

{/* <section className="cards-">
    <div class="card">
        <img src="./assets/3co.webp" alt="فريق قدرات" class="card-image"/>
        <div class="card-content">
            <h2 class="card-title">فريق قدرات</h2>
            <div class="card-details">
                <p class="card-text">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة. لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص.</p>
                <a href="#" class="card-button">عرض المزيد</a>
            </div>
        </div>
    </div>
</section> */}

        <Footer />
      </main>
    </>
  );
};

export default Landing;
