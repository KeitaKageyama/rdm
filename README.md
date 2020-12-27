## スタート方法

```bash
yarn install 

npm run dev
# or
yarn dev
```

yarn devをすると [http://localhost:3434](http://localhost:3434) で動作確認することができます。

## 使用技術について

-  [Next.js](https://nextjs.org/)
-  [chakra-ui](https://chakra-ui.com/)
-  [styled-components](https://styled-components.com/)
-  [yup](https://github.com/jquense/yup)
-  [React-hook-form](https://react-hook-form.com/)
-  [firebaseまだ設定してない]()
-  [ES-lint入れてるけどcommitと同時実行などはまだ](https://eslint.org/)
後欲しいのあれば各自で入れる感じで。

## ３つの特殊なコンポーネント

下記二つのコンポーネントは一応用意したけどchakra-uiで代用できるかも、、
使ってみてから判断しようかな、じゅんじゅんに相談！！

- Textコンポーネント　src/components/lib/text.tsx

使い方
```
//基本的に h1,h2,p　などは使わず文字はこれもしくはchakra-uiのTextでもいいかも
<Text>hogehoge</Text>
```

- ViewコンポーネントとFlexboxコンポーネント　/src/components/lib/view.tsx

使い方
```
//基本的に divは使わずどちらか chakra-uiのFlexでもいいかも

<View>
  <Text>hogehoge</Text>
  <Text>hogehoge</Text>
</View>

//縦並びの場合
<Flexbox>
  <Text>hogehoge</Text>
  <Text>hogehoge</Text>
</Flexbox>

//横並びの場合
<Flexbox　horizontal>
  <Text>hogehoge</Text>
  <Text>hogehoge</Text>
</Flexbox>
```

- Spacerコンポーネント　/src/components/Spacer/Spacer.tsx

使い方
```
//コンポーネント間のスペースを取りたいときはこれ　基本marginは使わない
//サイズは size={30}などの数字でも取れる
<Spacer size="xl" />
```

