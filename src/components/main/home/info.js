import React, {useState} from 'react';
import school from "./../../../images/school.png"
import child from "./../../../images/students.png"
import book from "./../../../images/book.png"
import teach from "./../../../images/teach.png"
import {media} from "../../media";

const Info = () => {

    const [modal, setModal] = useState(false)

    return (
        <section id="info">
            <div className="container">
                <div className="info-general__width" />
                <div className="info-general">
                    <div className="info-general__block">
                        <div style={{width: media(250, 625), height: media(190, 438), margin: media(10, 25)}}/>
                        <img src={school} alt="img" style={{width: media(250, 625), height: media(190, 438)}}/>
                    </div>
                    <div className="info-general__block2">
                        <h1>Мектеп тууралуу маалымат</h1>
                        {/*<p>СРЕДНЯЯ ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА №1.</p>*/}
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer" style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={child} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы окуучулар</h2>
                                <h3>280</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer" style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={book} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Жалпы китептердин саны</h2>
                                <h3>3750</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer" style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={teach} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы мугалимдер</h2>
                                <h3>33</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-general2">
                    {/*<p style={{fontSize: media(16, 18)}}> Вот уже 38 лет наша школа распахивает свои двери учителям, ученикам и их родителям. И первый*/}
                    {/*    человек который встречает их на пороге школы — это директор. Как важно иметь в школе*/}
                    {/*    руководителя, который смог организовать и направить всю деятельность коллектива педагогов и*/}
                    {/*    учеников в нужное русло. На протяжении этих лет нашу школу возглавляли мудрые и талантливые,*/}
                    {/*    инициативные люди.</p>*/}
                    <button
                        onClick={() => setModal(true)}
                    >Толук маалымат
                    </button>
                    {modal && (
                        <div className="info-general2__modal">
                            <div className="info-general2__modal__block">
                                <h1 onClick={() => setModal(false)}>Жабуу</h1>
                                <p>Дуэль между Александром Сергеевичем Пушкиным и Жоржем де Геккерном (Дантесом)
                                    состоялась
                                    27 января (8 февраля) 1837 года на окраине Санкт-Петербурга, в районе Чёрной речки
                                    близ
                                    Комендантской дачи. Дуэлянты стрелялись на пистолетах. В результате дуэли Пушкин был
                                    смертельно ранен и через два дня умер.

                                    Место этой дуэли: Чёрная речка — тогдашняя окраина Петербурга, приток Большой Невки
                                    —
                                    рукава невской дельты, рядом расположены дачи, огороды и пустыри. Снегу в тот день
                                    было
                                    по колено. Время: вскоре после 16.30, согласно показаниям секундантов.

                                    По подсчётам пушкинистов, столкновение с Дантесом было как минимум двадцать первым
                                    вызовом на дуэль в жизни поэта[1]. Он был инициатором пятнадцати дуэлей, из которых
                                    состоялись четыре[2], остальные не состоялись ввиду примирения сторон, в основном
                                    стараниями друзей Пушкина; в шести случаях вызов на дуэль исходил не от Пушкина, а
                                    от
                                    его оппонентов. 4 (16) ноября 1836 года городская почта доставила Пушкину и
                                    нескольким
                                    его друзьям анонимный пасквиль на французском языке, в котором Пушкину присваивался
                                    «патент на звание рогоносца»; в этой пародийной орденской грамоте содержался тонкий
                                    намёк на внимание к Н. Н. Пушкиной со стороны не только Дантеса, но и самого
                                    императора.
                                    В 1927 году пушкинистами (Б. В. Казанским и П. Е. Рейнботом) было высказано
                                    предположение, что пасквиль указывает на мнимую связь Натальи Николаевны с
                                    императором,
                                    так как Пушкин назван заместителем Нарышкина, мужа Марии Нарышкиной, любовницы
                                    Александра I; эту точку зрения поддержал и автор наиболее авторитетного на то время
                                    исследования дуэли П. Е. Щёголев. Однако Н. А. Раевский считал, что «доказанным его
                                    [предположение] считать нельзя»[4]. Сам Пушкин счёл письмо исходящим от Геккерна.
                                    Его
                                    уверенность поддержало мнение типографа М. Л. Яковлева, которому поэт показал
                                    пасквиль.
                                    Яковлев посчитал, что послание написано на бумаге иностранного производства[5].
                                    Подозрение некоторых современников, в частности секунданта Пушкина К. К. Данзаса,
                                    пало
                                    на князя И. С. Гагарина (в 1843 году ставшего иезуитом)[6]. Щёголев же в своём труде
                                    «Дуэль и смерть Пушкина», основываясь на экспертизе почерка, проведённой в 1927 году
                                    сотрудником уголовного розыска А. А. Сальковым, доказывает, что автором анонимных
                                    пасквилей был П. В. Долгоруков. Однако позднее, по результатам более широкой и
                                    авторитетной экспертизы, организованной историком-археографом Г. Хаитом и
                                    проводившейся
                                    сотрудниками Всесоюзного НИИ судебных экспертиз, было установлено, что почерк на
                                    сохранившихся экземплярах пасквиля не принадлежит ни Долгорукову, ни Гагарину[7].
                                    Сами
                                    Долгоруков и Гагарин при жизни также категорически отвергали свою причастность к
                                    указанным письмам.

                                    Придя к выводу об авторстве Геккерна, Пушкин вечером 4 ноября[8] послал Дантесу
                                    вызов на
                                    дуэль. Через неделю после вызова Жорж Дантес сделал предложение Екатерине Гончаровой
                                    —
                                    сестре Натальи Николаевны и, соответственно, свояченице Пушкина. Так как Дантес стал
                                    женихом Екатерины, Пушкин был вынужден отозвать свой вызов (сыграла роль и
                                    аудиенция,
                                    данная Пушкину Николаем I, и посредничество В. А. Жуковского). Тем не менее Пушкин
                                    отказывался иметь какие-либо отношения с Дантесом-Геккерном, что, по воспоминаниям
                                    Данзаса[6], задевало их обоих и приводило к дальнейшему обострению ситуации
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Info;