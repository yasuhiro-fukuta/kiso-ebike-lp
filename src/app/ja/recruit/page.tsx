"use client";

import { Mail } from "lucide-react";
import { LINE_URL, SUPPORT_MAILTO } from "../../site";
import { SiteNav, SiteFooter, FloatBook, LineIcon } from "../../chrome";

/** 採用ページ(ラフ)。2つの入口:
 *  A. 春休み〜入社式までの大学生(海外営業志望)
 *  B. 30代以降の脱サラ移住希望者
 *  【 】で囲った箇所は未決のプレースホルダ。 */
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
                <li>【業務範囲は確定後に記載】</li>
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
            <div><dt>期間</dt><dd>【例:2月〜3月の4週間以上。未定】</dd></div>
            <div><dt>報酬</dt><dd>【未定】</dd></div>
            <div><dt>住まい</dt><dd>【寮・社宅の有無:未定】</dd></div>
            <div><dt>英語力</dt><dd>【目安:未定(例:日常会話の入口レベルでOK)】</dd></div>
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
                【福田さんの脱サラ・移住の経緯をここに:前職/移住のきっかけ/最初の1年/今。3〜5行】
              </p>
              <p>
                自分で体験し、移住に成功した人・失敗した人を何人も見てきて、共通点が見えてきました。それをステップにして、一緒に働く人には、現場でそのまま伝えます。
              </p>
            </div>
          </div>

          <div className="rc-steps-head">
            <span className="eyebrow">リスタートの手順(仮)</span>
            <h3>
              成功した人と失敗した人の、<em>分かれ目。</em>
            </h3>
          </div>
          <ol className="rc-steps">
            <li>
              <span className="snum">一</span>
              <h4>【ステップ1の見出し】</h4>
              <p>【福田さんが見た共通点を記入。例:移住前に、短期でその土地に住んでみる】</p>
            </li>
            <li>
              <span className="snum">二</span>
              <h4>【ステップ2の見出し】</h4>
              <p>【例:地域の人に「何ができる人か」を先に覚えてもらう】</p>
            </li>
            <li>
              <span className="snum">三</span>
              <h4>【ステップ3の見出し】</h4>
              <p>【例:インバウンドの現場で、稼ぎ方の型を身につける】</p>
            </li>
            <li>
              <span className="snum">四</span>
              <h4>【ステップ4の見出し】</h4>
              <p>【例:自分の事業・持ち場を一つ任される】</p>
            </li>
          </ol>

          <dl className="rc-terms rc-terms-dark">
            <div><dt>雇用形態</dt><dd>アルバイト・業務委託(日数・期間は相談)</dd></div>
            <div><dt>報酬</dt><dd>【未定】</dd></div>
            <div><dt>開始時期</dt><dd>【随時?未定】</dd></div>
            <div><dt>住まい</dt><dd>【社宅の有無:未定】</dd></div>
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
