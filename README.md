# notion-timeline-view-styling# Notion Timeline View Styler

NotionのタイムラインビューのタスクアイテムをカスタマイズできるChrome拡張機能です。

## 機能

- タイムラインアイテムの背景色をカスタマイズ
- 透明度の調整
- 設定の自動保存
- リアルタイムプレビュー

## インストール方法

### Chrome Web Storeからインストール
1. [Chrome Web Store](https://chrome.google.com/webstore/category/extensions)で「Notion Timeline View Styler」を検索
2. 「Chromeに追加」をクリック

### 開発版をインストール
1. このリポジトリをクローン
2. Chrome で `chrome://extensions` を開く
3. 右上の「デベロッパーモード」を有効化
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. クローンしたディレクトリを選択

## 使い方

1. Chromeツールバーの拡張機能アイコンをクリック
2. カラーピッカーで好みの色を選択
3. スライダーで透明度を調整
4. 設定は自動的に保存され、即座にタイムラインアイテムに反映されます

## 開発者向け情報

### ファイル構成
- `manifest.json`: 拡張機能の設定ファイル
- `content.js`: タイムラインアイテムのスタイリングを行うスクリプト
- `popup.html`: 設定画面のUI
- `popup.js`: 設定画面の制御
- `icon.svg`: 拡張機能のアイコン
- `privacy-policy.html`: プライバシーポリシー

### ビルド方法
この拡張機能は追加のビルドステップを必要としません。

### Chrome Web Storeへの公開手順
1. [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole)にアクセス
2. デベロッパー登録(初回のみ、$5.00の登録料が必要)
3. 「新しい商品を追加」をクリック
4. 必要な情報を入力:
   - 拡張機能の説明
   - スクリーンショット(最低2枚)
   - プライバシーポリシー
   - アイコン
5. ZIPファイルをアップロード:
   ```bash
   zip -r extension.zip * -x "*.git*" -x "*.DS_Store"
   ```
6. 審査を待つ(数日から2週間程度)

## プライバシーポリシー

プライバシーポリシーの詳細は[こちら](privacy-policy.html)をご覧ください。

## ライセンス

MIT License
Notionのタイムラインビューのタスクバーの色が薄くて期日を把握できないのでスタイリングできるようにする。
