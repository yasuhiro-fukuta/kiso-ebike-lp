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
          ふたりの旅に、<em>谷をまるごと。</em>
        </h1>
        <p className="hero-sub">
          行灯の灯る宿場町、エメラルドの川、誰ともすれ違わない道。木曽谷の「静かな側」を、あなたたちの旅のために整えました——E-bikeはお届け、荷物は先回り、走るなら地元ガイドと。
        </p>
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
              src="/assets/tour/hero.jpg"
              alt="橋の上からエメラルド色の木曽川を撮影するライダー"
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
              src="/assets/tour/paddies.jpg"
              alt="静かな田んぼ道で足を止めて写真を撮るライダー(南木曽)"
            />
            <div className="entry-body">
              <h3>
                <Bike size={20} /> E-bikeを借りる
              </h3>
              <p>
                宿までお届け、走り終えた場所で乗り捨てOK。静かな道とエメラルドの川を、ふたりのペースで。
              </p>
              <span className="entry-go">
                E-bikeレンタルへ <ArrowRight size={14} />
              </span>
            </div>
          </Link>
          {/* 12/7撮影後に写真差し替え */}
          <Link href="/ja/luggage-shuttle" className="entry-card">
            <img
              src="/assets/tsumago.jpg"
              alt="妻籠宿の街道沿いの縁台に出されたざるそば"
            />
            <div className="entry-body">
              <h3>
                <Backpack size={20} /> 荷物を運んでもらう
              </h3>
              <p>
                スーツケースは先回りさせて、旧街道は手ぶらでふたりで歩く。荷物は目的地で待っています。
              </p>
              <span className="entry-go">
                手荷物シャトルへ <ArrowRight size={14} />
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

      <SiteFooter lang="ja" />
    </div>
  );
}
