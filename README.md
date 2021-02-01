## スタート方法

```bash
yarn install 

npm run dev
# or
yarn run dev
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


- 文字コンポーネント

使い方
```
//基本的に h1,h2,p　などは使わずchakra-uiのTextかHeaderを使う
<Text>hogehoge</Text>
<Header>hogeohge</Header>
```

- BoxコンポーネントとFlexboxコンポーネント

使い方
```
//基本的に divは使わずどちらか chakra-uiのFlexかBoxなどをつかう
https://chakra-ui.com/docs/layout/box
https://chakra-ui.com/docs/layout/flex

<Box>
  <Text>hogehoge</Text>
  <Text>hogehoge</Text>
</Box>


//横並びの場合
<Flex>
  <Text>hogehoge</Text>
  <Text>hogehoge</Text>
</Flex>
```

- Spacerコンポーネント　/src/components/Spacer/Spacer.tsx

使い方
```
//コンポーネント間のスペースを取りたいときはこれ　基本marginは使わない
//サイズは size={30}などの数字でも取れる
<Spacer size="xl" />
```

