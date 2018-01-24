@echo off

Echo 检查指定端口开放状态
Netstat -a -n >jc.txt
Find jc.txt "7614" >nul
If %errorlevel%==0(
Echo.
Echo 端口开放状态
Go to end
)
Echo.
Echo 端口未开放状态
:end
Del /q jc.txt>nul