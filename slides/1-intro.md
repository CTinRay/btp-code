% 網頁程式設計


# 網頁程式設計


## 我們是誰？


## 為什麼我們在這裡？

----

為什麼你們在這...？

----

## 課程...

* 目標
* 鬆散（?
* 小 Project （！？

## 網頁 程式 設計

* 網頁？
* 網頁程式？
* 程式設計？

## 課程規劃

* 程式運作 / Javascript
* Javascript / CSS + Js with HTML + Canvas
* Django / Coding..... + Presentation (!?)


# 淺談程式運作


## 程式？

* 指令 + 指令 + 指令 + 指令 + ...
* 指令：命令電腦做事



## 電腦？

* 想像一個黑盒子...
  * RAM
  * CPU
  * 手邊有一塊 ROM ...


## RAM/ROM？

* 一堆格子
* 有編號
* 長得像 [https://btp-code.github.io/btp-code/psudo-assembly-interpreter/](https://btp-code.github.io/btp-code/psudo-assembly-interpreter/)


## 開始跑~

* 把程式寫到 ROM
* 插上去


## Program Counter

* 一開始是 0
* +1 +1 ...

## ？？

## 偷看偷摸

[https://btp-code.github.io/btp-code/psudo-assembly-interpreter/](https://btp-code.github.io/btp-code/psudo-assembly-interpreter/)


## 第 1 ＋ 1 個指令

* hlt
* set addr const

> Exercise: 把 RAM 位址 4 設成 12345

## 一堆指令

### 記憶體操作指令

* mov addr1 addr2: 把記憶體位址 `addr1` 的值複製到 `addr2`。
* mvi addr1 addr2: 把記憶體位址 `addr1` 的值複製到記憶體位址 `addr2` 儲存的位址。
* imv addr1 addr2: 複製記憶體位址 `addr1` 儲存的位址的值到 `addr2`。

## 一堆指令

### 數學運算指令

* inc addr const: 增加記憶體位置 `addr` 的值 `const`
* add addr1 addr2 addr3: 把記憶體位址 `addr2` 的值加上 `addr3`的值儲存到 `addr1`。
* sub addr1 addr2 addr3: 把記憶體位址 `addr2` 的值減去 `addr3`的值儲存到 `addr1`。


## 一堆指令

### 位元運算指令


## 一堆指令

### 流程控制指令

* jmp pc: 跳到 pc 的位址（設定 Program Counter 為 pc）。
* jeq address pc: 如果記憶體位址 address 的值等於零，則跳到 pc 的位址（設定 Program Counter 為 pc）。
* jgt address pc: 如果記憶體位址 address 的值大於零，則跳到 pc 的位址（設定 Program Counter 為 pc）。
* jlt address pc: 如果記憶體位址 address 的值小於零，則跳到 pc 的位址（設定 Program Counter 為 pc）。

## Exercises!!!

> Exercise: 在記憶體位址 2 儲存位址 0 的值乘以位址 1 的值的結果。（只考慮{正整數 + 0}）

> Exercise: 在記憶體位址 5 儲存位址 0 的值 + 位址 1 的值 + ... + 位址 4 的值。（hint: imv）

> Exercise: 把記憶體位址 0 ~ 100 的值分別設成 0 ~ 100。(hint: mvi)

## 想像中/現代的電腦

* 可算的東西**一樣**！
* 偷摸偷看 v.s. 輸入/輸出 
* 更更更更更複雜
  * 指令更多
  * 結構更複雜（週邊設備）

## 「實際」上的電腦

* ROM？
* 指令與資料？
* 暫存器（Register）？

## 運作？

* 二進位編碼的指令
* Decoder
* Data Flow
* [大一計概](http://www.nand2tetris.org/lectures/PDF/lecture%2005%20computer%20architecture.pdf)（好課!!）
* 大三計算機結構（！？？）

## 程式語言

* 組合語言
* 高階語言
  * 靜態語言（C, C++）
  * 動態語言（Javascript, Python）
  * 強/弱型別
  
# Javascript  
  
## 型別

* 字串 string
* 數字 number
* 陣列 array
* ...

* 1 + 'good' ?
* -> 做適合的動作 

## 變數（Variable）

* 記憶體位址
* 存任何東西

## 語法：宣告變數

* 變數名稱規則
  * 區分大小寫（Case Sensitive）
  * 大小寫英文、數字、底線
  * 不可以是數字開頭
* 留一塊空間（感覺）

```js
let v1;
var v2;
```

## 變數有效範圍（Scope）

就 `let` 而言

* 宣告後
* 在同一個 `{}` 裡

## 字面常量

* 數字：
    *  一般：`1234`
    * 8進位： `055`
    * 16進位： `0xFF`
* 字串：
    * `"this is a string"`
    * `'this is a string too'`

## 型別轉換

* 轉成字串

```js
String(1234);
```

* 轉成數字

```js
Number('1234');
```

* 自動轉換（！）

```js
"5" + 3
```
