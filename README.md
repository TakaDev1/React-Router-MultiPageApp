# React Router Multi Page App

React Routerを使用して、`Home`、`Profile`、`Settings`の3ページをルーティングする練習アプリです。

## 概要

`Routes`と`Route`を使用して3つのページを定義し、`Link`を使用して各ページを自由に移動できるようにします。

| URL         | ページ      |
| ----------- | -------- |
| `/`         | Home     |
| `/profile`  | Profile  |
| `/settings` | Settings |

## 学習内容

* 複数の`Route`を定義する方法
* `Link`を使用したページ遷移
* `Routes`によるルーティング管理
* URLとコンポーネントの対応付け

## 条件

* `/` → `Home`
* `/profile` → `Profile`
* `/settings` → `Settings`
* 3ページすべてに`Link`を作成する
* `Routes`の中に3つの`Route`を定義する

## ディレクトリ構成

```text
src/
├── components/
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx
│   ├── Profile.tsx
│   └── Settings.tsx
├── App.tsx
└── main.tsx
```

## ルーティング

`Routes`の中に3つの`Route`を定義します。

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/settings" element={<Settings />} />
</Routes>
```

それぞれのURLに対応するページが表示されます。

## Navigation

`Link`を使用して3ページへのリンクを作成します。

```tsx
import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
};

export default Navigation;
```

## App.tsx

```tsx
import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## 実行

```bash
npm install
npm run dev
```

ブラウザで以下のURLを確認します。

```text
http://localhost:5173/
http://localhost:5173/profile
http://localhost:5173/settings
```

各ページから`Home`、`Profile`、`Settings`へ移動できれば完成です。

