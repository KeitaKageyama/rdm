## スタート方法

```bash
yarn install

npm run dev
# or
yarn run dev
```

yarn dev をすると [http://localhost:3434](http://localhost:3434) で動作確認することができます。

## 使用技術について

- [Next.js](https://nextjs.org/)
- [chakra-ui](https://chakra-ui.com/)
- [styled-components](https://styled-components.com/)
- [yup](https://github.com/jquense/yup)
- [React-hook-form](https://react-hook-form.com/)
- [firebase まだ設定してない]()
- [ES-lint 入れてるけど commit と同時実行などはまだ](https://eslint.org/)

後欲しいのあれば各自で入れる感じで。

## 色の指定について

src/styles/theme.ts 内の色を参照する

### chakra-ui コンポーネントの場合

特に何も import しなくても theme.ts の colors に記述された色がそのまま使える

```html
<!-- theme.ts colorsオブジェクトのredとwhiteのプロパティが参照される -->
<!-- redは #b61f22 , whiteは #fbfbfb になる -->
<button bg="red" color="white"></button>
```

参考: [Customize Theme - Chakra UI](https://chakra-ui.com/docs/theming/customize-theme)

### styled-component の場合

基本的に chakra-ui の`bg`, `color`Props が使えるはずなのでほとんど必要ないはずだが、コンポーネントを複数使い回すのに props をいちいち指定するのが面倒な場合や、指定する style の関係上どうしても必要な場合は import してきて指定する

```typescript
import { colors } from "../../styles/theme";

const ShadowBox = styled(Box)`
  width: 70px;
  height: 50px;
  box-shadow: 0 10px 25px 0 ${colors.red};
`;
```

## ３つの特殊なコンポーネント

- 文字コンポーネント

使い方

```
//基本的に h1,h2,p　などは使わずchakra-uiのTextかHeadingを使う
<Text>hogehoge</Text>
//SEOに関係ある<h1>タグなどはこれ
<Heading>hogeohge</Heading>
```

- Box コンポーネントと Flexbox コンポーネント

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

- Spacer コンポーネント　/src/components/Spacer/Spacer.tsx

使い方

```
//コンポーネント間のスペースを取りたいときはこれ　基本marginは使わない
//サイズは size={30}などの数字でも取れる
<Spacer size="xl" />
```
