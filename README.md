# getNBA
获取每日NBA比赛比分的Chrome插件

### 前言
~~若是想直接使用的可直接[下载](https://raw.githubusercontent.com/xiolovelife/getNBA/master/runnable/getNBA.crx)，然后查看以下“安装使用”~~
<br>服务器已关闭，所以该应用不再提供服务<br>
抱歉，不能支撑到NBA总决赛

### 编译打包
打开谷歌浏览器输入chrome://extensions/地址，勾选"开发者模式"，点击"打包扩展程序"，选择项目的文件夹路径打包<br>
一般第一次打包，Chrome会生成一个项目的.pem私钥文件，以供下次修改重新打包使用，请保存好<br>
不过若是丢失也无所谓，下次重新打包时会被当成第一次，也会生成一个私钥文件

### 安装使用
打开谷歌浏览器输入chrome://extensions/地址，直接把打包生成的.crx文件拖拽进页面便可安装<br>
安装完成后，在浏览器Url输入框右侧会出现NBA的Logo，点击即可获取比赛比分

### 注意
* 该插件是基于Chrome浏览器开发，由于其所使用的是Webkit内核，理论上支持所有使用Webkit内核的浏览器，比如360浏览器、猎豹浏览器等，
需要帮助可查看[Chrome extensions 开发文档](https://feizhaojun.com/chrome-developer/extensions/)<br>
* 此为前端项目，若想查看后端服务请点击[查看](https://github.com/xiolovelife/nba)
