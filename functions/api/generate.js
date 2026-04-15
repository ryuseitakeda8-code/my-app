export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { words, partStyle, cefrLevel } = body;

    if (!words || words.length === 0) {
      return new Response(
        JSON.stringify({ error: "単語が入力されていません" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const pickRandom = (items) =>
      items[Math.floor(Math.random() * items.length)];

    const part2Scenarios = [
      "office request",
      "schedule confirmation",
      "telephone inquiry",
      "meeting arrangement",
      "travel question",
      "delivery confirmation",
      "customer service response",
      "equipment problem",
      "reservation question",
      "location inquiry",
      "payment confirmation",
      "staff coordination",
      "deadline reminder",
      "facility use question"
    ];

    const part4Scenarios = [
      "news report",
      "airport announcement about a delay or gate change",
      "weather forecast",
      "radio commercial",
      "voicemail message",
      "train or bus service update",
      "store announcement",
      "tour guidance message",
      "museum or event information",
      "public safety notice",
      "podcast or radio program introduction",
      "technical support phone message",
      "hotel announcement",
      "flight boarding update"
    ];

    const part5Scenarios = [
      "business email",
      "office memo",
      "meeting notice",
      "shipping update",
      "customer complaint response",
      "purchase order",
      "travel arrangement",
      "invoice notice",
      "job posting",
      "store announcement",
      "internal policy notice",
      "product update",
      "training reminder",
      "service information"
    ];

    const randomPart2Scenario = pickRandom(part2Scenarios);
    const randomPart4Scenario = pickRandom(part4Scenarios);
    const randomPart5Scenario = pickRandom(part5Scenarios);

    let prompt = "";

    if (partStyle === "Part4") {
      prompt = `
あなたはTOEIC Listening Part 4 問題作成者です。
以下の条件を満たす問題をJSON形式のみで1つ作成してください。

【対象単語】
${words.join(", ")}

【難易度】
CEFR ${cefrLevel}

【形式】
TOEIC Part 4風の一方向ナレーション

【今回のジャンル】
${randomPart4Scenario}

【必須条件】
・ニュース、留守電、ラジオ広告、天気予報、飛行機の遅延案内、交通情報、店舗放送、観光案内など、TOEIC Part 4 で自然な題材にする
・"Good morning, everyone" では始めない
・書き出しは毎回できるだけ変える
・ナレーションは自然な英語で、TOEICらしい実務・案内・放送文体にする
・80〜140語程度
・日時、場所、目的、依頼事項などの要素をできるだけ含める
・対象単語を必ず本文に含める
・不自然に難しい語は避ける
・full_text は完全文
・questions は対象単語を使った穴埋め問題
・english_options は正解1つ＋紛らわしい3つ
・japanese_options は正解の意味1つ＋紛らわしい3つ
・出力はJSONのみ
・マークダウン、説明文、前置きは禁止

必ず以下のJSON構造だけを返すこと。

{
  "full_text": "完全な英文",
  "questions": [
    {
      "target_word": "単語",
      "blanked_text": "ブランク(_____)を含む文",
      "english_options": ["正解", "ダミー1", "ダミー2", "ダミー3"],
      "japanese_options": ["正解の意味", "ダミー1", "ダミー2", "ダミー3"]
    }
  ]
}
`;
    } else if (partStyle === "Part2") {
      prompt = `
あなたはTOEIC Listening Part 2 問題作成者です。
以下の条件を満たす問題をJSON形式のみで1つ作成してください。

【対象単語】
${words.join(", ")}

【難易度】
CEFR ${cefrLevel}

【形式】
TOEIC Part 2風の短い応答問題

【今回のジャンル】
${randomPart2Scenario}

【必須条件】
・2発話程度の自然な短い会話にする
・最初の発話側にブランクを作る
・TOEICらしい職場・電話・依頼・確認・予定調整・予約・配送・会議準備などの文脈にする
・毎回できるだけ異なる問い方にする
・Yes/No疑問、Wh疑問、平叙文への応答、依頼、確認などをバランスよく使う
・不自然に難しい語は避ける
・対象単語を必ず本文に含める
・full_text は2発話を含む完全な英文
・questions は対象単語を使った穴埋め問題
・english_options は正解1つ＋紛らわしい3つ
・japanese_options は正解の意味1つ＋紛らわしい3つ
・出力はJSONのみ
・マークダウン、説明文、前置きは禁止

必ず以下のJSON構造だけを返すこと。

{
  "full_text": "完全な英文",
  "questions": [
    {
      "target_word": "単語",
      "blanked_text": "ブランク(_____)を含む文",
      "english_options": ["正解", "ダミー1", "ダミー2", "ダミー3"],
      "japanese_options": ["正解の意味", "ダミー1", "ダミー2", "ダミー3"]
    }
  ]
}
`;
    } else {
      prompt = `
あなたはTOEIC Part 5 風の短文穴埋め問題作成者です。
以下の条件を満たす問題をJSON形式のみで作成してください。

【対象単語】
${words.join(", ")}

【難易度】
CEFR ${cefrLevel}

【形式】
TOEIC Part 5風

【今回のジャンル】
${randomPart5Scenario}

【必須条件】
・1文の穴埋め問題にする
・自然で文法的に正確な英文にする
・ビジネス、オフィス、会議、連絡、注文、案内、社内通知などTOEICらしい題材を優先する
・各問題につき1ブランク
・対象単語を正答にする
・毎回できるだけ異なる文脈にする
・語彙、品詞、動詞形、前置詞、接続表現、コロケーションなどにバリエーションを持たせる
・english_options は正解1つ＋紛らわしい3つ
・japanese_options は正解の意味1つ＋紛らわしい3つ
・出力はJSONのみ
・マークダウン、説明文、前置きは禁止

必ず以下のJSON構造だけを返すこと。

{
  "full_text": "完全な英文",
  "questions": [
    {
      "target_word": "単語",
      "blanked_text": "ブランク(_____)を含む文",
      "english_options": ["正解", "ダミー1", "ダミー2", "ダミー3"],
      "japanese_options": ["正解の意味", "ダミー1", "ダミー2", "ダミー3"]
    }
  ]
}
`;
    }

    const models = [
      "gemini-2.5-flash",
      "gemini-2.5-flash-lite"
    ];

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let lastError = null;

    for (const model of models) {
      const geminiUrl =
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;

      for (let attempt = 1; attempt <= 3; attempt++) {
        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              response_mime_type: "application/json",
            },
          }),
        });

        const raw = await geminiRes.text();
        console.log(`MODEL: ${model} / ATTEMPT: ${attempt} / STATUS: ${geminiRes.status}`);
        console.log(`RAW: ${raw}`);

        if (geminiRes.ok) {
          const data = JSON.parse(raw);
          const resultText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (!resultText) {
            return new Response(
              JSON.stringify({ error: "生成結果が空です" }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          return new Response(resultText, {
            headers: { "Content-Type": "application/json" },
          });
        }

        lastError = raw;

        if (geminiRes.status === 503 && attempt < 3) {
          await sleep(3000 * attempt);
          continue;
        }

        break;
      }
    }

    return new Response(
      JSON.stringify({
        error: "Gemini API error",
        detail: lastError || "すべての候補モデルで失敗しました"
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "サーバーエラー",
        detail: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
