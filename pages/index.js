import Head from "next/head";

function Home() {
    return (
        <>
            <Head>
                <title>Lana, amor da minha vida</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <main className="page-shell">
                <section className="love-letter" aria-labelledby="page-title">
                    <div className="letter-copy">
                        <p className="eyebrow">Para o amor da minha vida</p>
                        <h1 id="page-title">Lana,<br /><em>minha eterna escolha.</em></h1>
                        <div className="divider" aria-hidden="true"><span>♥</span></div>
                        <p className="message">
                            Em <strong>11 de setembro de 2026</strong>, nós completamos
                            <strong> 26 anos de casamento</strong>.
                        </p>
                        <p className="message">
                            Quando olho para trás e vejo tudo o que já enfrentamos,
                            lembro dos momentos bons, dos difíceis, dos felizes e dos
                            tristes. Em todos eles, o Senhor nos sustentou e nos guiou.
                        </p>
                        <p className="signature">Amo você de todo o meu amor e coração.</p>
                        <p className="date">11 · 09 · 2026</p>
                    </div>

                    <div className="family-photo-wrap">
                        <div className="photo-frame">
                            <div className="photo-placeholder">
                                <span>♥</span>
                                <small>Adicione aqui<br />a foto da nossa família</small>
                            </div>
                            <img
                                src="/familia.jpg"
                                alt="Nossa família reunida"
                                onError={(event) => {
                                    event.currentTarget.style.display = "none";
                                }}
                            />
                        </div>
                        <p className="photo-caption">Nossa história, nosso lar.</p>
                    </div>
                </section>
            </main>

            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');

                :global(*) {
                    box-sizing: border-box;
                }

                :global(body) {
                    margin: 0;
                    background: #f6efe7;
                    color: #392b2d;
                    font-family: 'DM Sans', sans-serif;
                }

                .page-shell {
                    min-height: 100vh;
                    display: grid;
                    place-items: center;
                    padding: 48px 24px;
                    background:
                        radial-gradient(circle at 10% 15%, rgba(219, 139, 131, .2), transparent 25%),
                        radial-gradient(circle at 90% 85%, rgba(220, 178, 111, .2), transparent 28%),
                        #f6efe7;
                }

                .love-letter {
                    width: min(100%, 1040px);
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(300px, .8fr);
                    gap: clamp(38px, 7vw, 96px);
                    align-items: center;
                    padding: clamp(32px, 7vw, 86px);
                    background: #fffaf5;
                    border: 1px solid rgba(129, 78, 70, .16);
                    box-shadow: 0 28px 70px rgba(103, 61, 54, .13);
                    position: relative;
                    overflow: hidden;
                }

                .love-letter::before {
                    content: '';
                    position: absolute;
                    width: 210px;
                    height: 210px;
                    border: 1px solid rgba(201, 116, 107, .2);
                    border-radius: 50%;
                    right: -90px;
                    top: -90px;
                }

                .eyebrow, .date, .photo-caption {
                    color: #b36561;
                    text-transform: uppercase;
                    letter-spacing: .18em;
                    font-size: 11px;
                    font-weight: 700;
                }

                .eyebrow {
                    margin: 0 0 22px;
                }

                h1 {
                    margin: 0;
                    color: #6c383c;
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(44px, 6vw, 76px);
                    font-weight: 500;
                    line-height: .98;
                    letter-spacing: 0;
                }

                h1 em {
                    color: #c4776d;
                    font-size: .7em;
                    font-weight: 500;
                }

                .divider {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin: 30px 0 26px;
                    color: #d18a7c;
                }

                .divider::before, .divider::after {
                    content: '';
                    height: 1px;
                    width: 56px;
                    background: #e5c5ba;
                }

                .message {
                    max-width: 520px;
                    margin: 0 0 16px;
                    color: #665253;
                    font-size: 16px;
                    line-height: 1.75;
                }

                .message strong {
                    color: #81484a;
                    font-weight: 700;
                }

                .signature {
                    margin: 28px 0 0;
                    color: #81484a;
                    font-family: 'Playfair Display', serif;
                    font-size: 23px;
                    font-style: italic;
                }

                .date {
                    margin: 22px 0 0;
                }

                .family-photo-wrap {
                    position: relative;
                    justify-self: center;
                    width: min(100%, 350px);
                }

                .photo-frame {
                    padding: 12px 12px 42px;
                    background: #fff;
                    box-shadow: 0 18px 35px rgba(103, 61, 54, .2);
                    transform: rotate(3deg);
                }

                .photo-frame img {
                    display: block;
                    width: 100%;
                    aspect-ratio: 4 / 5;
                    object-fit: cover;
                    background: #ead6cb;
                }

                .photo-placeholder {
                    aspect-ratio: 4 / 5;
                    display: grid;
                    place-items: center;
                    align-content: center;
                    gap: 12px;
                    background: #ead6cb;
                    color: #9b5e5d;
                    text-align: center;
                }

                .photo-placeholder span {
                    font-size: 34px;
                }

                .photo-placeholder small {
                    font-family: 'Playfair Display', serif;
                    font-size: 18px;
                    font-style: italic;
                    line-height: 1.25;
                }

                .photo-caption {
                    position: absolute;
                    bottom: 15px;
                    left: 0;
                    right: 0;
                    z-index: 1;
                    margin: 0;
                    color: #8c5b58;
                    text-align: center;
                    letter-spacing: .1em;
                }

                @media (max-width: 720px) {
                    .page-shell {
                        padding: 20px 14px;
                    }

                    .love-letter {
                        grid-template-columns: 1fr;
                        gap: 44px;
                        padding: 40px 24px 48px;
                    }

                    .family-photo-wrap {
                        width: min(88%, 320px);
                    }
                }
            `}</style>
        </>
    )
}

export default Home;