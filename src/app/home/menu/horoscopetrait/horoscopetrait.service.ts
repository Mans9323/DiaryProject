import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horoscope } from './horoscopetrait.model';

@Injectable({
  providedIn: 'root'
})
export class HoroscopetraitService {
    private _horoscope: Horoscope[] = [
      new Horoscope(
        'Capricorn',
        'Dec 22 – Jan 19',
        '/assets/img/1capricorn.JPG',
        'Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top-based solely on their experience and expertise.',
        'It is not easy to win over the attention and the heart of a Capricorn, but once their walls break and their heart melts they stay committed for a lifetime. Their Their relationships with other signs can be challenging due to their difficult character, but any shared feeling that comes from such a deep emotional place is a reward for their partner’s efforts. Shown sensitivity comes through acts rather than words, and years are often needed for them to open enough to chat about their actual emotional problems. Compatible Signs Capricorn Should Consider: Taurus, Virgo, Scorpio, Pisces',
        '/assets/img/2capricorn.JPG',
        'Capricorn ruling planet Saturn holds sway over the gall bladder, spleen, bones, skin, and teeth. Their skin may tend to be dry and sensitive. Capricorns tend to have trouble with alcohol consumption.They tend to do things in excess, they overwork, skip meals, then eat too much at one time.',
        'Capricorns will set high standards for themselves, but their honesty, dedication and perseverance will lead them to their goals. They value loyalty and hard work over all other things, and keep associates with these qualities close even when they might be intellectually inferior. Concentrated and resourceful, this is someone who gets the job done, doesn’t mind long hours, and commits to the final product completely. They shine in jobs that include management, finance, programming and calculations. Deeply rooted in tradition, the state, and the system they live in, a Capricorn needs all of their paperwork in perfect order, their documents clean, and their file impeccable.',
        '/assets/img/3capricorn.JPG',
        ),
      new Horoscope(
        'Aquarius',
        'Jan 20 - Feb 18',
        '/assets/img/1aquarius.JPG',
        'Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems. Although they can easily adapt to the energy that surrounds them, Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power. People born under the Aquarius sign, look at the world as a place full of possibilities.',
        'Intellectual stimulation is by far the greatest aphrodisiac for Aquarius. There is nothing that can attract an Aquarius more than an interesting conversation with a person. Openness, communication, imagination and willingness to risk are the qualities that fit well in the perspective of life of this zodiac sign. Their compatibility with other signs can be complex, Integrity and honesty are essential for anyone who wants a long-term relationship with this dynamic person. In love, they are loyal, committed and not at all possessive - they give independence to their partners and consider them as equals. Compatible Signs Aquarius Should Consider: Aries, Gemini, Libra, Sagittarius',
        '/assets/img/2aquarius.JPG',
        'Aquarians need a healthy diet to maintain vitality and to keep their weight at the perfect level. Aquarius people like to immerse themselves in projects and activities, and that leaves little time for balanced meals. They are inveterate snackers, and often eat the wrong things while on the run.',
        'Aquarius-born bring enthusiasm to the job and have a remarkable ability of exploitation of their imagination for business purposes. Career which enables a development and demonstration of the concept will suit this zodiac sign. Their high intellect combined with their willingness to share their talents, inspires many who work in their environment. Aquarius is a visionary type who likes to engage in activities that aim to make humanity better.',
        '/assets/img/3aquarius.JPG',
        ),
      new Horoscope(
        'Pisces',
        'Feb 19 - Mar 20',
        '/assets/img/1pisces.JPG',
        'Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back. Pisces is a Water sign and as such this zodiac sign is characterized by empathy and expressed emotional capacity. Their ruling planet is Neptune, so Pisces are more intuitive than others and have an artistic talent. Neptune is connected to music, so Pisces reveal music preferences in the earliest stages of life. They are generous, compassionate and extremely faithful and caring.',
        'Deep in their hearts, Pisces-born are incorrigible romantics. They are very loyal, gentle and unconditionally generous to their partners. Pisces are passionate lovers who have a need to feel a real connection with their partners. Short-term relationships and adventures are not peculiar to this zodiac sign. In love and relationship, they are blindly loyal and very caring. Compatible Signs Pisces Should Consider: Taurus, Cancer, Scorpio, Capricorn',
        '/assets/img/2pisces.JPG',
        'Pisceans have sensitive, emotional personalities, and illnesses are frequently emotionally based. They may suffer from corns and bunions.They are attracted to glamorous lifestyle, which often includes overindulging in eating and drinking and keeping late hours. The key to their good health is to establish moderate habits. With a minimum of care, a well-balanced diet, moderate exercise, rest they can feel younger.',
        'Intuitive and often dreamy, Pisces feel best in a position where their creative skills will come to the fore, even better if it is for charity. Occupations that fit Pisces are: attorney, architect, veterinarian, musician, social worker and game designer.Inspired by the need to make changes in the lives of others, they are willing to help even if that means to go beyond the boundaries. This zodiac sign is compassionate, hard-working, dedicated and reliable. Pisces-born can be great at solving problems. For the most part, Pisces don’t give money too much thought. They are usually more focused on their dreams and goals, but they will try to make enough money to achieve their goals. In this area, there can be two sides of the Pisces - on one hand, they will spend a lot of money with little thought, while on the other hand they can become quite stingy. Yet, in the end, there will always be enough money for a normal life.',
        '/assets/img/3pisces.JPG',
        ),
      new Horoscope(
        'Aries',
        'Mar 21 - Apr 19',
        '/assets/img/1aries.JPG',
        'As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings. Thanks to its ruling planet Mars and the fact it belongs to the element of Fire (just like Leo and Sagittarius), Aries is one of the most active zodiac signs. It is in their nature to take action, sometimes before they think about it well.',
        'Aries is a fire sign with the need to take initiative when it comes to romance. When they fall in love, they will express their feelings to the person they are in love with, without even giving it a considerable thought. The compatibility of an Aries with other signs of the zodiac is very complex. Aries in love may shower their loved one with affection, sometimes even an excess of it, forgetting to check the information they get in return. They are very passionate, energetic and love adventures. An Aries is a passionate lover, sometimes even an addict to pleasures of the flesh and sexual encounters. Compatible Signs Aries Should Consider: Sagittarius, Leo, Aquarius, Gemini, Libra',
        '/assets/img/2aries.JPG',
        'Aries people are active, have excellent muscle coordination, and are noted for their energetic sexuality. Because the Aries person is usually busy, active, and on the go, he needs a well-balanced diet to maintain good health and energy.',
        'This is an area of life in which an Aries shines brightest. Their working environment is the perfect place for their ambition and creativity to show, with them fighting to be as good as possible. A natural born leader, Aries will prefer to issue orders rather than receive them. Their speed of mind and vast energy to move helps them to always be one step ahead of everyone else. All they need to do in order to succeed is follow their chosen path and not give up on professional plans guided away by emotions. When faced with a challenge, an Aries will quickly assess the situation and come to a solution. Competition does not bother them and instead encourages them to shine even brighter. They can have great careers in sports and challenging environments, and enjoy their chosen path as managers, policemen, soldiers, etc.',
        '/assets/img/3aries.JPG',      
        ),
      new Horoscope(
        'Taurus',
        'Apr 20 - May 20',
        '/assets/img/1taurus.JPG',
        'Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.',
        'One always has to be prepared to have patience for a Taurus lover. They are extremely sensual, touch, smell and all pleasurable senses being extremely important to them, but they also need time to create a safe environment and relax in their sexual encounters. When they create enough intimacy with a loved one, they become a bit gooey, sometimes even needy, and have to keep their emotions in check, holding on to practical reasoning, while embracing change and initiative of their partner at all times. Compatible Signs Taurus Should Consider: Cancer, Virgo, Capricorn, Pisces',
        '/assets/img/2taurus.JPG',
        'Taureans are particularly vulnerable to colds, coughs, sore throats, laryngitis, swollen glands, stiff necks, and to minor injuries around the neck. Moderate exercise and good diet should be a strict discipline in every Taurean life. You tend to eat fattening foods, to be sluggish and indolent, and to dislike exercise. You may suffer from puffy eyes and jowls, and your face is apt to get heavier as time goes by. When they get physically tired or overtensed, they tend to get coughs and stiff necks. Taurus also rules the thyroid gland, which can cause serious weight problems if it is malfunctioning.',
        'Taurus representatives usually love money and will work hard in order to earn it. They are reliable, hardworking, patient and thorough, as an employee or someone in a position of power. When focused on a specific project, they will firmly stick to it, no matter what happens in the world around them. Stability is the key to understand their working routine. The search for material pleasures and rewards is an actual need to build their own sense of value and achieve a satisfying luxurious, yet practical way of life. Their job is observed as a means to make it possible.',
        '/assets/img/3taurus.JPG',
        ),
      new Horoscope(
        'Gemini',
        'May 21 - Jun 20',
        '/assets/img/1gemini.JPG',
        'Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see.',
        'Fun and always ready for an intellectual challenge, Gemini sees love first through communication and verbal contact, and find it as important as physical contact with their partner. When these two combine, obstacles all seem to fade. Inquisitive and always ready to flirt, a Gemini could spend a lot of time with different lovers until they find the right one who is able to match their intellect and energy. They need excitement, variety and passion, and when they find the right person, a lover, a friend and someone to talk to combined into one, they will be faithful and determined to always treasure their heart. Compatible Signs Gemini Should Consider: Aries, Leo, Libra, Aquarius, Sagittarius',
        '/assets/img/2gemini.JPG',
        'Geminis are vulnerable to upper respiratory infections, bronchitis, and asthma. Gemini also rules the nerves, so natives of this sign are often excitable and high-strung. The planet Mercury, which rules Gemini, has always been associated with respiration, the brain, and the entire nervous system. It also governs the delicate links between the mind and the different parts of the body, so with Gemini people the state of mind has a great deal to do with the state of their health. Anxiety and nervousness literally can make them sick.',
        'In constant need of intellectual stimulation, the most suitable job for a Gemini has to be challenging to their brain. They are skillful, inventive and often very smart, with a need for a dynamic working environment and a lot of social contacts met in the office. The best careers they can choose are those of traders, inventors, writers, orators, preachers and lawyers, but any career that gives them the opportunity to communicate freely while keeping them on the move and busy at all times, is an excellent choice. As if they were created for multitasking, problem solving and bringing new ideas to life, they need a workplace that will not keep them stuck in a routinely, repetitive tasks that do not allow them to shine.',
        '/assets/img/3gemini.JPG',
        ),
      new Horoscope(
        'Cancer',
        'Jun 21 - Jul 22',
        '/assets/img/1cancer.JPG',
        'Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other peoples pain and suffering.',
        'Cancer is a very emotional sign, and feelings are the most important thing in their relationships. Gentle and caring, they will show their sensibility to the world without even thinking they might get hurt. For partners, they always choose a person who is able to understand them through non-verbal, silent contact, and a shared daily routine, and their affection will no last long with superficial, flaky or unreliable partners. The lack of initiative these individuals suffer from will not make it easy for them to build a sex life they wish for, if they do not find a partner who is able to make them feel calm, protected, and free to express. Compatible Signs Cancer Should Consider: Taurus, Virgo, Scorpio, Pisces, Capricorn',
        '/assets/img/2cancer.JPG',
        'Cancerians are susceptible to gaining weight in later years. Tension, anxiety, and emotional stress are the leading causes of illness among Cancerians. They tend to have a delicate stomach and digestive problems. They may be prone to ulcers, gall bladder upsets, gas pains, nausea, and gastritis. Born under a water sign, they tend to overindulge in wine and alcohol, which you do not tolerate well.',
        'When a job needs to get done, a Cancer will roll their sleeves up and finish it successfully. If they are left alone to work, they usually perform better than when surrounded by other people, loyal to their employer and focused on the task. They will have great careers as nurses, housekeepers, gardeners, politicians and decorators. For Cancer representatives, security and money are of great importance and stand for the real reason they work as much as they do. They easily earn money and are not used to spending it all in one day. It is their goal to save, invest, and watch their investments grow daily. Resourceful and good at managing time and finances, this is a sign that is often in charge of all money in the household, keeping their partner or other family members under control.',
        '/assets/img/3cancer.JPG',
        ),
      new Horoscope(
        'Leo',
        'Jul 23 - Aug 22',
        '/assets/img/1leo.JPG',
        'People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their "king of the jungle" status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier.',
        'This Fire sign is passionate and sincere and its representatives show their feelings with ease and clarity. When in love, they are fun, loyal, respectful and very generous towards their loved one. They will take the role of a leader in any relationship, and strongly rely on their need for independency and initiative. This can be tiring for their partner at times, especially if they start imposing their will and organizing things that are not theirs to organize in the first place. Each Leo needs a partner who is self-aware, reasonable and on the same intellectual level as them. Their partner also has to feel free to express and fight for themselves, or too much light from their Leos Sun might burn their own personality down. Compatible Signs Leo Should Consider: Aries, Gemini, Libra, Sagittarius',
        '/assets/img/2leo.JPG',
        'Leos are noted for their longevity. Leo ruler, the Sun, has always been associated with the heart, back, and spinal column. It also influences the spleen and the entire bodys vitality. The sign of Leo is characterized by growth, vitality, and good health. As a rule, Leos live healthy lives, however, they must learn to slow down in later years to avoid the risk of heart attack.',
        'Leos are highly energetic and tend to always be busy, no matter the need for their employment. They are ambitious, creative and optimistic and once they dedicate to their work, they will do everything just right. The best possible situation they can find themselves in is to be their own bosses or manage others with as little control from their superiors as possible. Jobs that allow open expression of artistic talent, such as acting and entertainment, are ideal for a Leo. Management, education and politics are also a good fit, as well as anything that puts them in a leadership position which naturally suits them.',
        '/assets/img/3leo.JPG',
        ),
      new Horoscope(
        'Virgo',
        'Aug 23 - Sep 22',
        '/assets/img/1virgo.JPG',
        'Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time.',
        'The sign of Virgo leads Venus to its tragic fall and speaks of one’s inability to feel worthy, beautiful, or lovable. Compatibility of Virgo with other zodiac signs is mostly based on the ability of their partner to give them all the love they need to start feeling safe and open up enough to show their soft, vulnerable heart. They will rarely have direct statements of love, but intimacy brings out all of the beauty of their emotional self-expression. A Virgo will prefer a stable relationship than having fun, casual lovers, except if they become one, using their charm and superficial communication to win hearts without ever investing their own. Methodical and intellectually dominant, each Virgo seems to have an equation in their mind that their partner has to follow. Compatible Signs Virgo Should Consider: Taurus, Cancer, Scorpio, Capricorn, Pisces',
        '/assets/img/2virgo.JPG',
        'Virgoans possess a fussy digestive system, and suffer from indigestion, gas pains, ulcers, liver upsets, colitis, and bowel problems. Virgoans tend to worry about their health & sometimes tend to be hypochondriacs. Virgo ruling planet Mercury has dominion over the brain and the nervous system, it also controls the links between the mind and the functions of the body.',
        'Virgos are practical, analytical and hard-working, always knowing exactly where to look for the core of any problem. Their methodology makes them shine at jobs that require good organization, dealing with paperwork, problem solving and working with their minds and their hands. When they focus, perfection is to be expected from their work, for no other sign has such an eye for details as Virgo. In love with books and artistic expression, they make good critics, while their need to help humankind serves them best if they decide to become doctors, nurses or psychologists.',
        '/assets/img/3virgo.JPG',
        ),
      new Horoscope(
        'Libra',
        'Sep 23 - Oct 22',
        '/assets/img/1libra.JPG',
        'People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible',
        'Finding a compatible partner will be the main priority in the life of people born with their Sun in Libra. Once they start a romantic relationship, maintaining peace and harmony become the most important thing and their primary goal. Their charming personality and their dedication to each relationship makes their compatibility with others satisfying, but that fallen Sun they have to heal often creates trouble in their emotional world. Compatible Signs Libra Should Consider: Gemini, Leo, Sagittarius, Aquarius',
        '/assets/img/2libra.JPG',
        'Librans are known for their fine and pleasing features, and good bone structure. Librans are prone toward weakness in the lower back, and this is the first place in the body to suffer when Librans overexert themselves. They also are predisposed toward kidney ailments and skin breakouts. Balance is the key to Libra health and wellbeing, a balanced diet, balance of work and recreation and balanced relationships with other people.',
        'For each Libra, the key to a happy life is in a fine balance, meaning they will not commit to work without setting apart enough time for their private life and their loved ones, and if they do, they will feel like they need to set free from it. They can be loved leaders even though they sometimes lack the initiative needed to organize people who work for them, and will work hard to deserve privileges that come their way. In search for truth and justice, they are good lawyers and judges, and can also be successful as diplomats, designers and composers if they have nurtured their artistic side from childhood. They will work well in a group, and can be convincing and gifted speakers.',
        '/assets/img/3libra.JPG',
        ),
      new Horoscope(
        'Scorpio',
        'Oct 23 - Nov 21',
        '/assets/img/1scorpio.JPG',
        'Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness. Scorpio is a Water sign and lives to experience and express emotions. Although emotions are very important for Scorpio, they manifest them differently than other water signs. In any case, you can be sure that the Scorpio will keep your secrets, whatever they may be.',
        'Scorpio is the most sensual sign of the zodiac. Scorpios are extremely passionate and intimacy is very important to them. They want intelligent and honest partners. Once Scorpios fall in love, they are very dedicated and faithful. However, they enter into a relationship very carefully, because sometimes they need a lot of time to build trust and respect for partners. Compatible Signs Scorpio Should Consider: Cancer, Virgo, Capricorn, Pisces',
        '/assets/img/2scorpio.JPG',
        'Scorpio people are renowned for their energy and imagination. Scorpio natives are prone to problems and infections of the sex organs. Skin eruptions on the genitals, cystitis and diseases of the urinary tract, and venereal infections are ailments to which Scorpios are very susceptible to. In addition, Scorpions are subject to ill health brought on by emotional difficulties.',
        'Scorpios are fantastic in management, solving and creating. When a Scorpio sets a goal, there is no giving up. Scorpios are great in solving tasks that require a scientific and thorough approach. Their ability to focus with determination makes them very capable managers. They never mix business with friendship. Jobs such as a scientist, physician, researcher, sailor, detective, cop, business manager and psychologist are appropriate for this powerful zodiac sign. Scorpio respects other people, so expects to be respected in return. Scorpios are disciplined enough to stick to the budget, but they are also not afraid of hard work to bring themselves in a better financial position. However, they are not inclined to spend much. Money means security and a sense of control for them, which means that they are good at saving money and make decisions carefully before investing in something.',
        '/assets/img/3scorpio.JPG',
        ),
      new Horoscope(
        'Sagittarius',
        'Nov 22 - Dec 21',
        '/assets/img/1sagittarius.JPG',
        'Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals.',
        'People born under the sign of Sagittarius are very playful and humorous, which means that they will enjoy having fun with their partners. Partners who are equally open, will certainly suit the passionate, expressive Sagittarius who is willing to try almost anything. Compatible Signs Sagittarius Should Consider: Aries, Leo, Libra, Aquarius',
        '/assets/img/2sagittarius.JPG',
        'Physical activity is a must; they will stagnate and become ill if they do not get enough exercise. Although usually lean and slender in their early years, they have a tendency to put on weight as they get older. In Sagittarian women the weight unfortunately seems to settle on the hips and thighs. Sagittarius ruling planet Jupiter governs the liver. Jupiters influence has also been noted on the pituitary gland. Sagittarians tend to have an active, sensitive liver that instantly suffers from overuse of alcohol. They are also susceptible to hepatitis',
        'When Sagittarius-born visualize something in their minds, the will do everything they can to achieve this. They always know what to say in a given situation and they are great salespeople. Sagittarius favors different tasks and dynamic atmosphere. Jobs such as a travel agent, photographer, researcher, artist, ambassador, importer and exporter suit this free-spirited person. The fun-loving Sagittarius enjoys making and spending money. Considered to be the happiest sign of the zodiac, Sagittarius does not care much where it will earn the following money. They take risks and are very optimistic. They believe that the universe will provide everything they need.',
        '/assets/img/3sagittarius.JPG',
        )
    ];
  
    get horoscopes() {
      return [...this._horoscope];
    }
  
    constructor(private http: HttpClient) {}
    
    getHoroscope(title: string) {
      return {
        ...this._horoscope.find(
          h => h.title === title)
      };
    }
}
