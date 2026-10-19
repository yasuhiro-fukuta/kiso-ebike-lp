"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Backpack,
  Compass,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL_JA } from "../site";
import { SiteNav, SiteFooter, FloatBook } from "../chrome";

/* eslint-disable @next/next/no-img-element */

export default function JaHomePage() {
  return (
    <div className="lp">
      <SiteNav lang="ja" />

      <FloatBook href={WHATSAPP_URL_JA}>
        <MessageCircle size={18} /> WhatsAppで予約
      </FloatBook>

      {/* HERO */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <span className="eyebrow hero-eyebrow">長野県南木曽町 · 木曽谷 · 中山道</span>
        <h1>
          流れる雲と、<em>河と共に。</em>
        </h1>
        <div className="hero-cta">
          <a href="#start" className="btn-primary">
            入口をえらぶ <ArrowRight size={16} />
          </a>
          <Link href="/ja/explore" className="btn-ghost">
            周辺を楽しむならこちら
          </Link>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <span>柿其渓谷</span>
          <span>阿寺渓谷</span>
          <span>与川道</span>
          <span>妻籠宿</span>
          <span>地元しか知らない道</span>
          <span>柿其渓谷</span>
          <span>阿寺渓谷</span>
          <span>与川道</span>
          <span>妻籠宿</span>
          <span>地元しか知らない道</span>
        </div>
      </div>

      {/* 目的別の入口 */}
      <section className="mini-sec" id="start">
        <span className="eyebrow">どんな一日にしますか?</span>
        <h2>入口は3つ。</h2>
        <div className="entry-grid">
          {/* 12/7撮影後に写真差し替え */}
          <Link href="/ja/guided" className="entry-card">
            <img
              src="/assets/guide-point.jpg"
              alt="森の橋のたもとで、ガイドが次の見どころを案内しているところ"
            />
            <div className="entry-body">
              <h3>
                <Compass size={20} /> ガイドツアーに参加する
              </h3>
              <p>
                木曽川を1日かけて下る貸切ライド。あなたたちのグループに地元ガイドがひとり付いて、撮るべき場所で全部停まります。
              </p>
              <span className="entry-go">
                ガイドツアーへ <ArrowRight size={14} />
              </span>
            </div>
          </Link>
          {/* 12/7撮影後に写真差し替え */}
          <Link href="/ja/rental" className="entry-card">
            <img
              src="/assets/ebike.jpg"
              alt="古民家の土間に並ぶMOVEのファットタイヤE-bike2台"
            />
            <div className="entry-body">
              <h3>
                <Bike size={20} /> E-bikeを借りる
              </h3>
              <p>
                宿までお届け、走り終えた場所で乗り捨てOK。静かな道とエメラルドの川を、自分のペースで。
              </p>
              <span className="entry-go">
                E-bikeレンタルへ <ArrowRight size={14} />
              </span>
            </div>
          </Link>
          {/* 12/7撮影後に写真差し替え */}
          <Link href="/ja/luggage-shuttle" className="entry-card">
            <img
              src="/assets/shuttle-van-crop.jpg"
              alt="シャトルバンの荷室に積まれたスーツケース(宿の前で)"
            />
            <div className="entry-body">
              <h3>
                <Backpack size={20} /> 荷物を運んでもらう
              </h3>
              <p>
                スーツケースは先回りさせて、旧街道は手ぶらで歩く。荷物は目的地で待っています。
              </p>
              <span className="entry-go">
                ラゲッジバスへ <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </div>
        <div className="sub-entries">
          <Link href="/ja/stay">
            ゲストハウス柏屋に泊まる <ArrowRight size={13} />
          </Link>
          <Link href="/ja/plan">
            3泊モデルプランを見る <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* 周辺を楽しむバンド */}
      <section className="hub-band">
        <div className="hub-band-inner">
          <span className="eyebrow">走る、のその先へ</span>
          <h2>
            渓谷も、コースも、<em>地元の知恵も。</em>
          </h2>
          <p>
            阿寺ブルーの川、柿其渓谷、おすすめ3コースのセルフツアー、書道体験、借りられる道具——周辺の楽しみ方は、ここから一段深く。
          </p>
          <Link href="/ja/explore" className="band-cta">
            周辺を楽しむ <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Yakkunの紹介 */}
      <details className="host-toggle">
        <summary>Who is Yakkun?</summary>
      <section className="host-sec">
        <figure className="host-press">
          <img
            src="/assets/shimin-times-2026.jpg"
            alt="市民タイムス「キラリこの人」に掲載された福田康宏（Yakkun）の記事。柏屋の土間でE-bikeと"
          />
          <figcaption>市民タイムス「キラリこの人」に掲載されました</figcaption>
        </figure>
        <div className="host-body">
          <span className="eyebrow">案内人</span>
          <h2>
            はじめまして、<em>Yakkunです。</em>
          </h2>
          <p>
            福田康宏です。みんなからは「Yakkun」と呼ばれています。名古屋市出身で、エンジニアとして働き、米国で1年ほど過ごしたあと、何度も訪れていた木曽に惹かれて2025年に南木曽町へ移住。旧中山道・三留野宿にある築140年のゲストハウス「柏屋」を営んでいます。
          </p>
          <p>
            好きな自転車を生かして始めたのが Beyond Nakasendo。宿場から宿場へ、木曽谷を「線」で巡るE-bikeと、手ぶらで旅できるラゲッジバスを用意しています。ツアーは作務衣姿の私がご案内します。
          </p>
          <p>
            三留野、そして木曽谷一帯が旅の目的地になるように。お気軽に声をかけてください。
          </p>
        </div>
      </section>
      </details>

      <SiteFooter lang="ja" />
    </div>
  );
}
