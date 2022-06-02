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
                <div className="info-general__width"/>
                <div className="info-general">
                    <div className="info-general__block">
                        <div style={{width: media(250, 625), height: media(190, 438), margin: media(10, 25)}}/>
                        <img src={school} alt="img" style={{width: media(250, 625), height: media(190, 438)}}/>
                    </div>
                    <div className="info-general__block2">
                        <h1>Мектеп тууралуу маалымат</h1>
                        {/*<p>СРЕДНЯЯ ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА №1.</p>*/}
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={child} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы окуучулар</h2>
                                <h3>280</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={book} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Жалпы китептердин саны</h2>
                                <h3>3750</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
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
                                <p>Ынакбай уулу Келдибек атындагы орто мектебинин тарыхы. Эң алгачкы мезгилде Кызыл-Эшме
                                    айылынын “Кызыл-Өтөк” жайлоосунда балдарга билим берүү 1935-жылы “Кыргыз үйдө”
                                    башталып үч ай окугандан кийин Кызыл-Эшме айылына келип бирөөнүн үйүн мектеп катары
                                    пайдаланып 3-класска чейин билим берүүнү уюштурган. Алгачкылардан болуп Көл
                                    калаасынан келген Султанбаев Жанузак эмгектенген. Алар: Ынакбаев Келдибек,
                                    Мурзакулов Өмүрбек, Абдырахманов Токтомат. Башталгыч класстарга билим берүү менен
                                    Ынакбаев Келдибек жетектеген. 1961-жылы айылдын жашоочулары үчүн курулган имарат
                                    1966-жылы мектепке берилген. 1976-жылы Кызыл-Эшме сегиз жылдык мектеби болуп,
                                    Таштанова Марипат директорлук кызматта эмгектенген. 1976-1991-жылдары директордук
                                    кызматта Жээнбаев Аптабайым, Абдыкадыров Акылбек, Абдыкалыкова Салтанат, Кыпчакбаев
                                    Алидиндер эмгектенип. 1991-жылы “Кызыл-Эшме” орто мектеби болгон. Мектепти алгач 14
                                    бүтүрүүчу бүткөн. 1993-жылы мектепке кошумча окуу корпусу бүтүп пайдаланууга
                                    берилген. Бул жылдары Нышанов Талант жетектеген. 1999-2000-окуу жылдарында ушул
                                    мектепти түптөгөн ардагер мугалим Ынакбаев Келдибектин аты мектепке ыйгарылган.
                                    1994-жылдан 2011-жылдын февраль айына чейин мектепти Каарова Салтанат Исраиловна
                                    жетектеп келгеню 2011-жылдын март айынан 2016-жылга чейин Орозалиев Абдыманап
                                    Турдубаевич жетектеди. 2016-жылдан бери Эрмекбаева Жамила Абибиллаевна
                                    жетектөөдө.
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