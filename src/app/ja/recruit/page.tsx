"use client";

import { Mail } from "lucide-react";
import { LINE_URL, SUPPORT_MAILTO } from "../../site";
import { SiteNav, SiteFooter, FloatBook, LineIcon } from "../../chrome";

/** 採用ページ(ラフ)。2つの入口:
 *  A. 春休み〜入社式までの大学生(海外営業志望)
 *  B. 30代以降の脱サラ移住希望者
 *  経歴・手順は福田さん確認前の下書き。 */
export default function JaRecruitPage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={`${SUPPORT_MAILTO}?subject=${encodeURIComponent("採用について")}`}>
        <Mail size={18} /> メールで応募・相談
      </FloatBook>

      {/* HERO */}
      <header className="rc-hero">
        <span className="rc-tate" aria-hidden="true">
          迎えられる側から、迎える側へ。
        </span>
        <div className="rc-hero-inner">
          <span className="eyebrow">採用情報 · 長野県南木曽町 · 合同会社FromScratch</span>
          <h1>
            旅人を、<em>迎える側</em>で働く。
          </h1>
          <p>
            中山道の宿場町・南木曽で、ゲストハウス柏屋とE-bikeツアー「Beyond Nakasendo」を運営しています。お客さんの多くは海外から。ここで働くことは、毎日が英語の現場です。入口は2つあります。
          </p>
          <nav className="rc-doors">
            <a href="#students" className="rc-door">
              <span className="rc-door-tag">入口 A</span>
              <strong>大学生</strong>
              <small>春休み・内定後〜入社式まで</small>
            </a>
            <a href="#restart" className="rc-door">
              <span className="rc-door-tag">入口 B</span>
              <strong>脱サラ移住</strong>
              <small>30代からのリスタート</small>
            </a>
          </nav>
        </div>
      </header>

      {/* A: STUDENTS */}
      <section id="students" className="rc-track">
        <div className="rc-track-inner">
          <span className="eyebrow">入口 A · 春休み&就活後の大学生へ</span>
          <h2>
            お金を払って迎えられるより、
            <br />
            <em>お金をもらって迎える側</em>になって
            <br />
            英語をマスターしよう。
          </h2>
          <p className="rc-lead">
            語学留学は、お金を払って「お客さん」として迎えられる体験です。ここでは逆。給料をもらいながら、世界中から来る旅人を「迎える側」として英語で案内します。教室の英語ではなく、仕事を回すための英語が身につきます。
          </p>

          <div className="rc-grid">
            <div className="rc-card">
              <h3>こんな人に</h3>
              <ul>
                <li>海外営業・海外事業部への配属を希望している</li>
                <li>内定が決まり、入社式までの時間を使いたい</li>
                <li>英語は「勉強した」けど「使った」ことがあまりない</li>
              </ul>
            </div>
            <div className="rc-card">
              <h3>やること(例)</h3>
              <ul>
                <li>ゲストハウスのチェックイン・館内案内</li>
                <li>E-bikeの受け渡し・ルート説明</li>
                <li>問い合わせへの英語での返信</li>
                <li>荷物シャトルの積み下ろし・宿の準備</li>
              </ul>
            </div>
            <div className="rc-card">
              <h3>持って帰れるもの</h3>
              <ul>
                <li>毎日、海外ゲストと英語で仕事をした実体験</li>
                <li>入社後の面談で語れる「現場でやったこと」</li>
                <li>給料(授業料ではなく)</li>
              </ul>
            </div>
          </div>

          <dl className="rc-terms">
            <div><dt>期間</dt><dd>3月(春休み〜入社式前)・8〜9月(夏休み)</dd></div>
            <div><dt>報酬</dt><dd>時給1,300円</dd></div>
            <div><dt>住まい</dt><dd>相談可</dd></div>
            <div><dt>英語力</dt><dd>不問。話そうとする気持ちがあればOK</dd></div>
          </dl>
        </div>
      </section>

      {/* B: RESTART */}
      <section id="restart" className="rc-restart">
        <div className="rc-track-inner">
          <span className="eyebrow">入口 B · 脱サラ移住を考えている人へ</span>
          <h2>
            30過ぎてもリスタートできる唯一の道が、
            <br />
            <em>田舎でインバウンド</em>です。
          </h2>
          <p className="rc-lead">
            まずはアルバイト・業務委託として、ここで働きながら田舎とインバウンドの現場を試してください。ただし、誰にでも勧めるわけではありません。対象は、次のすべてに頷ける人だけです。
          </p>

          <ul className="rc-oath">
            <li>今までのキャリアや肩書きを、全部捨てる覚悟がある。</li>
            <li>それでも失敗する可能性があることを、受け入れている。</li>
            <li>それでも、やり直したい。</li>
            <li>新しい土地では自分が一番の新参者だと、謙虚に構えられる。</li>
          </ul>

          <div className="rc-story">
            <span className="rc-story-mark" aria-hidden="true">私</span>
            <div>
              <h3>代表の私も、このパターンでした。</h3>
              <p>
                都会で会社員をしていた私は、観光で訪れた木曽谷の川とサイクリングに惹かれ、仕事も住まいも手放して南木曽に移り住みました。知り合いも稼ぎ口もないところからのスタートで、うまくいかなかったことも、遠回りしたこともたくさんあります。それでも今は、海外からの旅人を迎える宿とE-bikeの事業を、この町で回しています。
              </p>
              <p>
                自分で体験し、移住に成功した人・失敗した人を何人も見てきて、共通点が見えてきました。それをステップにして、一緒に働く人には、現場でそのまま伝えます。
              </p>
            </div>
          </div>

          <div className="rc-steps-head">
            <span className="eyebrow">リスタートの手順</span>
            <h3>
              成功した人と失敗した人の、<em>分かれ目。</em>
            </h3>
          </div>
          <ol className="rc-steps">
            <li>
              <span className="snum">一</span>
              <h4>住む前に、働いてみる</h4>
              <p>家を買う前に、短期の仕事でその土地の季節を過ごす。うまくいった人は、決める前に一度暮らしています。</p>
            </li>
            <li>
              <span className="snum">二</span>
              <h4>稼ぎ口を先に持つ</h4>
              <p>失敗のいちばんの原因はお金です。理想の暮らしより先に、毎月の収入の当てを作ります。インバウンドは、田舎でも外貨が入る数少ない仕事です。</p>
            </li>
            <li>
              <span className="snum">三</span>
              <h4>「何ができる人か」を覚えてもらう</h4>
              <p>自分を売り込む前に、手伝う。地域の人に顔と得意なことを知ってもらえると、仕事も家も人づてに回ってきます。</p>
            </li>
            <li>
              <span className="snum">四</span>
              <h4>ゼロからではなく、あるものを良くする</h4>
              <p>空き家、古い宿、知られていない道。新しく作るより、すでにあるものを磨くほうが早く、地域にも喜ばれます。</p>
            </li>
          </ol>

          <dl className="rc-terms rc-terms-dark">
            <div><dt>雇用形態</dt><dd>アルバイト・業務委託(日数・期間は相談)</dd></div>
            <div><dt>報酬</dt><dd>時給1,300円</dd></div>
            <div><dt>募集時期</dt><dd>3〜5月・7〜11月(特に4・5・10・11月)</dd></div>
            <div><dt>住まい</dt><dd>相談可</dd></div>
          </dl>
        </div>
      </section>

      {/* APPLY */}
      <section className="rc-apply">
        <div className="rc-apply-inner">
          <span className="eyebrow">応募・相談</span>
          <h2>
            まずは、<em>話を聞きに来てください。</em>
          </h2>
          <p>
            どちらの入口かと、今の状況をひとこと添えて連絡ください。オンラインでも、南木曽に来てもらっても構いません。
          </p>
          <div className="rc-cta-row">
            <a
              href={`${SUPPORT_MAILTO}?subject=${encodeURIComponent("採用について")}`}
              className="special-cta rc-cta"
            >
              <Mail size={18} /> メールで応募・相談
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="rc-cta-alt">
              <LineIcon size={16} /> LINEでも
            </a>
          </div>
        </div>
      </section>

      <SiteFooter lang="ja" />
    </div>
  );
}
