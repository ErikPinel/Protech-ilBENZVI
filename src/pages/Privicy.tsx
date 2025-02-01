import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">מדיניות פרטיות</h1>
          <p className="mt-4 text-lg">אנחנו מחויבים לשמור על פרטיות המידע שלכם</p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-10">
         <div className='rounded-xl bg-cyan-700 w-min p-2' ><Link to="/">בית</Link></div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">1. איסוף מידע</h2>
          <p>
            אנחנו עשויים לאסוף מידע אישי שאתם מספקים לנו ישירות, כמו שם, טלפון, וכתובת אימייל, בעת מילוי טופס הרשמה או יצירת קשר.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">2. שימוש במידע</h2>
          <p>
            המידע שאתם מספקים משמש לצורך מתן שירותים, תקשורת עם המשתמשים, ושיפור האתר והשירותים המוצעים.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">3. שיתוף מידע</h2>
          <p>
            אנחנו לא משתפים מידע אישי עם צדדים שלישיים למעט במקרים בהם זה נדרש לצורך מתן שירות או על פי דרישת חוק.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">4. שמירת מידע</h2>
          <p>
            המידע נשמר בצורה מאובטחת על השרתים שלנו. אתם רשאים לפנות אלינו בכל עת בבקשה למחוק מידע אישי שלכם.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. עוגיות (Cookies)</h2>
          <p>
            האתר משתמש בקובצי עוגיות לשיפור חוויית המשתמש. ניתן לנטרל עוגיות דרך הגדרות הדפדפן.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. פנייה בנושאי פרטיות</h2>
          <p>
            לכל שאלה או בקשה בנושאי פרטיות, אנא צרו קשר בכתובת:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>אימייל: <a href="mailto:protechil@gmail.com" className="text-blue-600 underline">protechil@gmail.com</a></li>
            <li>טלפון: <a href="tel:+972503939008" className="text-blue-600 underline">050-393-9008</a></li>
          </ul>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} ProTech-IL. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
