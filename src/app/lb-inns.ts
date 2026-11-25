/** ============================================================
 *  ラゲッジバス：宿・駅の一覧スプレッドシートから取った「集配対象＝y」の宿(2026-11-25)。
 *  元：料金表スプシ 1g9OJWygevv_y79iIV2YnHql0cpUAYrFr8Ihne-qjjcg のタブ「宿一覧（Googleマップ・7地域）」。
 *  y の56行のうち、駅・預け場所5件と、前から選べた宿6件(柏屋・Waku・結い庵・Kinoma・民宿すはら・matarihouse)は
 *  luggage-bus.ts の PLACES のまま。ここはそれ以外の45件。
 *  地点(area)：最寄り駅の列で決めた。十二兼駅＝野尻、原野駅＝木曽福島、藪原駅・木曽平沢＝奈良井(料金表に無い駅は近い地点に読みかえ)。
 *  ============================================================ */
export type SheetInn = { id: string; area: string; name: string; map: string; jr: string };

export const SHEET_INNS: SheetInn[] = [
  { id: "inn-chijgq-0fdjjhgarkcnlkpt4", area: "sakashita", name: "Guesthouse 24 ゲストハウス にじゅうよん", map: "https://www.google.com/maps/place/?q=place_id:ChIJGQ_0FDjJHGARkcNlkpT4EQg", jr: "坂下駅" },
  { id: "inn-chijd780q-ljhgar0s3v-of2", area: "sakashita", name: "Guesthouse SHIGI", map: "https://www.google.com/maps/place/?q=place_id:ChIJD780q-LJHGAR0s3v_OF25z8", jr: "坂下駅" },
  { id: "inn-chijrsgpjgrjhgarcbktggez", area: "tadachi", name: "OKANIWA 丘庭", map: "https://www.google.com/maps/place/?q=place_id:ChIJrSGpjgrJHGARCBktggezonY", jr: "田立駅" },
  { id: "inn-chij73soszhjhgark6b0q3sq", area: "tadachi", name: "The Expedition Hotel \"Zenagi\"", map: "https://www.google.com/maps/place/?q=place_id:ChIJ73sOSZHJHGARK6B0Q3Sqmqw", jr: "田立駅" },
  { id: "inn-chijwy3zze7hhgar7b9qyyli", area: "nagiso", name: "DARUMA PUREMIUM-INN", map: "https://www.google.com/maps/place/?q=place_id:ChIJWY3zzE7HHGAR7B9QYyliO1g", jr: "南木曽駅" },
  { id: "inn-chijf3mqi2jhhgarun-sloqy", area: "nagiso", name: "MOUNTAinn Nagiso", map: "https://www.google.com/maps/place/?q=place_id:ChIJF3mQi2jHHGARun_SlOqyhKA", jr: "南木曽駅" },
  { id: "inn-chij8bfsaadhhgar1ii3qzcb", area: "nagiso", name: "Nakasendo Shiki", map: "https://www.google.com/maps/place/?q=place_id:ChIJ8bfSAADHHGAR1Ii3qZcBX1Q", jr: "南木曽駅" },
  { id: "inn-chijfxdrwqdhhgaruhqq0zi6", area: "nagiso", name: "YAMO Nagiso 時編みの宿", map: "https://www.google.com/maps/place/?q=place_id:ChIJfXDrWQDHHGARUhQq0zI6Alc", jr: "南木曽駅" },
  { id: "inn-chijiqnud1hjhgar1gqk6md1", area: "nagiso", name: "ame nakasendo / 「雨 中山道」", map: "https://www.google.com/maps/place/?q=place_id:ChIJIQNUd1HJHGAR1gqK6md1K5Q", jr: "南木曽駅" },
  { id: "inn-chijzyzfnndhhgarq6pl4jdt", area: "nagiso", name: "ties Camp Ground Nagiso", map: "https://www.google.com/maps/place/?q=place_id:ChIJZYzfNNDHHGARq6Pl4jDT4NM", jr: "南木曽駅" },
  { id: "inn-chijzxq7lwlhhgarf-gl8qnw", area: "nagiso", name: "tsumugi tei", map: "https://www.google.com/maps/place/?q=place_id:ChIJZXq7LwLHHGARf-gL8qNWsfw", jr: "南木曽駅" },
  { id: "inn-chij5w-anvbhhgart-nnaije", area: "nagiso", name: "灯 AKARI -Nagiso Holiday rental-", map: "https://www.google.com/maps/place/?q=place_id:ChIJ5w-aNvbHHGART_nNAIje-1k", jr: "南木曽駅" },
  { id: "inn-chijg80smn3hhgara95zyo9x", area: "nagiso", name: "Phong'house", map: "https://www.google.com/maps/place/?q=place_id:ChIJg80SmN3HHGARa95ZYo9xk4c", jr: "南木曽駅" },
  { id: "inn-chijf9tufothhgarhl2bclre", area: "nagiso", name: "Nakasendo Shiki - Private Garden Villa", map: "https://www.google.com/maps/place/?q=place_id:ChIJf9TUfOTHHGARHL2BCLreIPM", jr: "南木曽駅" },
  { id: "inn-chijbun-wy3hhgarur9x-604", area: "nagiso", name: "Oyado Katsu", map: "https://www.google.com/maps/place/?q=place_id:ChIJBUN_WY3HHGARuR9X_604wss", jr: "南木曽駅" },
  { id: "inn-chijxv3xzd7hhgarusvbh9l0", area: "nagiso", name: "Rin's house", map: "https://www.google.com/maps/place/?q=place_id:ChIJXV3xzd7HHGARUSVBH9l0bjE", jr: "南木曽駅" },
  { id: "inn-chijbzxjlolhhgar3qqrwvlp", area: "nagiso", name: "Tranquil Mountain Getaway", map: "https://www.google.com/maps/place/?q=place_id:ChIJBzXJLOLHHGAR3qqrwVLPxKs", jr: "南木曽駅" },
  { id: "inn-chijisuqqanghgar0quubmf-", area: "nojiri", name: "Atera-so Forest Spa Japanese Onsen", map: "https://www.google.com/maps/place/?q=place_id:ChIJISuQQAnGHGAR0QuuBMF_7uQ", jr: "十二兼駅" },
  { id: "inn-chijiwbksvlhhgaryoysmlew", area: "nojiri", name: "みわハウス miwahouse", map: "https://www.google.com/maps/place/?q=place_id:ChIJIWBksvLHHGARYOySMLEwZx0", jr: "野尻駅" },
  { id: "inn-chijbspvz3jchgarfax32fqp", area: "agematsu", name: "Kakehashi Onsen Inn", map: "https://www.google.com/maps/place/?q=place_id:ChIJBSpVz3jcHGARFax32fqPJVY", jr: "上松駅" },
  { id: "inn-chijf1yb8erdhgartgs1rq5z", area: "agematsu", name: "Nezame Hotel", map: "https://www.google.com/maps/place/?q=place_id:ChIJF1Yb8ErDHGARTGS1rQ5ZrlI", jr: "上松駅" },
  { id: "inn-chijhwgcsrzchgarrupkrspi", area: "agematsu", name: "田政旅館", map: "https://www.google.com/maps/place/?q=place_id:ChIJhwGCsrzcHGARrUPkrsPiDlM", jr: "上松駅" },
  { id: "inn-chijwfcnbafchgarlkwemvjs", area: "kisofukushima", name: "民宿 松尾", map: "https://www.google.com/maps/place/?q=place_id:ChIJwfcNBAfcHGARlKweMvjScoo", jr: "木曽福島駅" },
  { id: "inn-chijzqhfsadfhgar7k7lqrjw", area: "kisofukushima", name: "Takumisou2", map: "https://www.google.com/maps/place/?q=place_id:ChIJZQhFSADfHGAR7K7LqrJWeYM", jr: "木曽福島駅" },
  { id: "inn-chijj1ci2ktehgarr7egqkxy", area: "kisofukushima", name: "Iwaya Inn", map: "https://www.google.com/maps/place/?q=place_id:ChIJJ1ci2KTeHGARr7EGqkXyIqI", jr: "木曽福島駅" },
  { id: "inn-chijpdg1w6tehgar5gz702ul", area: "kisofukushima", name: "Kaido-Roman On'yado Tsutaya", map: "https://www.google.com/maps/place/?q=place_id:ChIJPdg1w6TeHGAR5gZ702ULNK8", jr: "木曽福島駅" },
  { id: "inn-chijwvgcoatehgarke6spbl2", area: "kisofukushima", name: "Kiso Mikawaya", map: "https://www.google.com/maps/place/?q=place_id:ChIJwVGCoaTeHGARkE6SpbL2BQU", jr: "木曽福島駅" },
  { id: "inn-chijdy-1f6xehgar4x87kfsj", area: "kisofukushima", name: "Murachiya", map: "https://www.google.com/maps/place/?q=place_id:ChIJdY_1f6XeHGAR4X87kFsJEXc", jr: "木曽福島駅" },
  { id: "inn-chijc6euzqjehgarymcwzap5", area: "kisofukushima", name: "URARA Tsutaya", map: "https://www.google.com/maps/place/?q=place_id:ChIJC6eUzqjeHGARYmCWzaP5_4Y", jr: "木曽福島駅" },
  { id: "inn-chijrzpylhxehgarpznjfftd", area: "kisofukushima", name: "Tenjinonsen Seiunso", map: "https://www.google.com/maps/place/?q=place_id:ChIJRzpYlHXeHGARPzNJfftd8mQ", jr: "原野駅" },
  { id: "inn-chij7u6xksjhhgarth7caqw8", area: "narai", name: "バル&グランピングRiverside Oasis WAKU↑WAKU", map: "https://www.google.com/maps/place/?q=place_id:ChIJ7U6xKSjhHGARtH7CAqW8un0", jr: "藪原駅" },
  { id: "inn-chijr8nas7xhhgaryvoyn2jx", area: "narai", name: "木曽おぎのや蔵の宿", map: "https://www.google.com/maps/place/?q=place_id:ChIJr8Nas7XhHGARYVoYn2JXa6k", jr: "藪原駅" },
  { id: "inn-chijuschdl8fhwarikovvqxo", area: "narai", name: "BYAKU Narai 歳吉屋", map: "https://www.google.com/maps/place/?q=place_id:ChIJuSchDl8fHWARiKoVVQXoYro", jr: "奈良井駅" },
  { id: "inn-chijtz2musgehwar5wuiwzpp", area: "narai", name: "Minshuku Echigoya", map: "https://www.google.com/maps/place/?q=place_id:ChIJtz2mUSgeHWAR5wUiWZpPoa0", jr: "奈良井駅" },
  { id: "inn-chijkyromigehwarebsq-cyx", area: "narai", name: "Minshuku Ikariya Machida", map: "https://www.google.com/maps/place/?q=place_id:ChIJKYrOmigeHWAReBSQ-CYxI6k", jr: "奈良井駅" },
  { id: "inn-chijaby2hcgehwaref5icw-h", area: "narai", name: "Minshuku Kato", map: "https://www.google.com/maps/place/?q=place_id:ChIJAby2hCgeHWAREF5Icw_Hi0w", jr: "奈良井駅" },
  { id: "inn-chijj9ggisyehwarlrnjgkp5", area: "narai", name: "Minshuku Shimada", map: "https://www.google.com/maps/place/?q=place_id:ChIJJ9ggISYeHWARLrnjgKP5oeE", jr: "奈良井駅" },
  { id: "inn-chijix-vqikehwarxxvmfujh", area: "narai", name: "Oyado Iseya", map: "https://www.google.com/maps/place/?q=place_id:ChIJiX_VqikeHWARxXvmfUjHuhQ", jr: "奈良井駅" },
  { id: "inn-chijexmcv-yfhware57oqyrg", area: "narai", name: "yama-niwa-INN", map: "https://www.google.com/maps/place/?q=place_id:ChIJexmCv-YfHWARe57oQYRgG1k", jr: "奈良井駅" },
  { id: "inn-chijz45kpsyehwarhu6dzng-", area: "narai", name: "あぶらや旅館", map: "https://www.google.com/maps/place/?q=place_id:ChIJz45kPSYeHWARHu6DZNG__WQ", jr: "奈良井駅" },
  { id: "inn-chijo4eonkbhhgarqf6m1c6z", area: "narai", name: "サムライの宿ならい荘", map: "https://www.google.com/maps/place/?q=place_id:ChIJO4EOnkbhHGARQF6M1C6Zfuw", jr: "奈良井駅" },
  { id: "inn-chijb33d8oyfhwar4hs0hugp", area: "narai", name: "御宿 美里屋", map: "https://www.google.com/maps/place/?q=place_id:ChIJb33D8oYfHWAR4Hs0hUGPsxM", jr: "奈良井駅" },
  { id: "inn-chijmxmnzd4fhwarux2potjt", area: "narai", name: "花と休息 wakamatsu", map: "https://www.google.com/maps/place/?q=place_id:ChIJmxmnZD4fHWARux2PotJTrVQ", jr: "奈良井駅" },
  { id: "inn-chiji48juwafhwar2iimjcfd", area: "narai", name: "La Terra Hirasawa", map: "https://www.google.com/maps/place/?q=place_id:ChIJI48jUwAfHWAR2Iimjcfd4Gg", jr: "奈良井駅" },
  { id: "inn-chijcuxnolifhwarmjwxnwm3", area: "narai", name: "日々別荘", map: "https://www.google.com/maps/place/?q=place_id:ChIJcUXNOLIfHWARMJwxnWm3-8Q", jr: "奈良井駅" },
];
