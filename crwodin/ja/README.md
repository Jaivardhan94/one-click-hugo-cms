# NetlifyIDを使用したNetlifyCMS

[](https://github.com/netlify/victor-hugo) および [](https://github.com/netlify/netlify-cms)で構築され、 [](http://www.darindimitroff.com/)[](https://www.spacefarm.digital)によって開発されたスモールビジネステンプレート。

## 入門

デプロイボタンを使用して、リポジトリの独自のコピーを取得します。

[![Netlifyにデプロイする](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/one-click-hugo-cms&stack=cms)

これにより、CMSの実行に必要なすべてがセットアップされます。

* コードを含むGitHubアカウントの新しいリポジトリ
* NetlifyのグローバルCDNネットワークへの完全な継続的展開
* NetlifyIdentityでユーザーとアクセスを制御する
* NetlifyCMSでコンテンツを管理する

最初のビルドが完了したら、ユーザーとして自分を招待できます。 新しいサイトの[Id] タブに移動し、[招待] をクリックして、自分に招待状を送信します。

これですべての設定が完了し、コンテンツの編集を開始できます。

## ローカル開発

このリポジトリのクローンを作成し、新しいフォルダーから `ヤーン` または `npm install` を実行して、必要なすべての依存関係をインストールします。

次に、 `ヤーンスタート` または `スタート`で開発サーバーを起動します。

## レイアウト

テンプレートは、コンテンツに依存しない小さなパーシャルに基づいており、混合して一致させることができます。 事前に作成されたページは、可能な組み合わせのほんの一部を示しています。 使用可能なすべてのパーシャルについては、 `サイト/レイアウト/パーシャル` フォルダーを参照してください。

Hugoの `機能を使用して、コンテンツをパーシャルにフィードし、繰り返したり、不一致が生じたりしないようにし`。

## CSS

テンプレートは、cssnextとcssnanoでTachyonsとPostCSSのカスタムフォークを使用します。 ブランドのテンプレートをカスタマイズするには、 `src / css / imports / _variables.css` を参照してください。ここには、色や間隔などの重要なグローバル変数のほとんどが格納されています。

## SVG

`site / static / img / icons` に保存されているすべてのSVGアイコンは、SVGO（gulp-svgmin）で自動的に最適化され、 `と呼ばれる部分として保存されている単一のSVGスプライトに連結され`。 最適な結果を得るには、ビューポートとアートディレクションに関して一貫したアイコンを使用するようにしてください。 次のように&lt;use&gt;タグを介して</code> を参照し `。</p>

<pre><code><svg width="16px" height="16px" class="db">
  <use xlink:href="#SVG-ID"></use>
</svg>
`</pre>
