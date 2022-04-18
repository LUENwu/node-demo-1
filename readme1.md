## 删除node与npm

缓存目录:  C:\Users\dell\AppData\Roaming\npm

 

1.从卸载程序卸载程序和功能。

2.重新启动（或者您可能会从任务管理器中杀死所有与节点相关的进程）。

3.寻找这些文件夹并删除它们（及其内容）（如果还有）。根据您安装的版本，UAC设置和CPU架构，这些可能或可能不存在：

C:\Program Files (x86)\Nodejs
C:\Program Files\Nodejs
C:\Users\{User}\AppData\Roaming\npm（或%appdata%\npm）
C:\Users\{User}\AppData\Roaming\npm-cache（或%appdata%\npm-cache）

本人对应安装目录: C:\Users\dell\AppData\Roaming\npm-cache, C:\Users\dell\AppData\Roaming\npm

4.检查您的%PATH%环境变量以确保没有引用Nodejs或npm存在。

5.如果仍然没有卸载，请where node在命令提示符下键入，您将看到它所在的位置 - 删除（也可能是父目录）。

6.重新启动，很好的措施。

 

注意执行上面的清理后，必须重启电脑。
————————————————
版权声明：本文为CSDN博主「蜗牛杨哥」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u014635374/article/details/109504576



安装npm与node 官网下载后正常安装,查看我的电脑的环境变量是否加入.
1. 安装 nrm 命令行 : npm i -g nrm 
2. 绑定国内服务器 :   nrm use taobao
3. 安装 http-server :npm i -g http-server

  