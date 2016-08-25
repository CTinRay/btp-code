% Javascript

# JavaScript

## 物件

* 物品
* 分類

## 建立物件

```js
    new XXX();
```

## 建立物件

```js
    var obj = {}
```

## 物件的屬性、方法

```js
    obj.XXX
    obj['XXX']
```

# 內建物件

## 陣列

### 建立陣列

```js
var a = [];
var b = [1, 2, 4, 5];
```

## 陣列

### []

```js
a[5] = 100;
```

> Exercise: 陣列的合。

## 陣列

### 屬性、方法

* a.length： 陣列的長度
* a.indexOf()：找到元素的位置
* [More...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## 字串

```js
s = "abcde"
```

* s[N]：取得第N個字
* s1 + s2：把 s1 跟 s2 接起來。

## 字串

* s.split(',')：把字串按照','切成一段一段。
* s.slice(start, end)：取得 start 到 end 部分的字串。
* s.replace(a, b)：把字串裡的 a 取代成 b。
* [More...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## 時間

```js
var d = new Date();
```

## 時間

* 年：date.getFullYear()
* 月：date.getMonth()
* 日：date.getDate()
* 星期：date.getDay()
* 時：date.getHours()
* 分：date.getMinutes() 
* 秒：date.getSeconds()
* [More...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

