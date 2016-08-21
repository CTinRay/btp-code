# CSS 入門

## 什麼是 CSS

* 讓我們來看看 [Firefox 官網](https://www.mozilla.org/en-US/firefox/new/) 
* 指定 HTML 元素長什麼樣子! 

## CSS 的引用

* `<style></style>` 元素 
* `<link rel="stylesheet" href="./url/of/your/css/file">`

## Exercise

試著在 HTML 裡加入這個規則吧

```css
    h1 {
        color: red;
    }
```

## CSS 的格式

```css
h1 {
    color: red;
}

.sea {
    color: blue;
}
```

```css
文字 {
   一或多行文字
}
```

## 選取器（Selector）

### 標籤選取器（Tag Selector）

```css
h1 {
   color: red;
}
```

## 選取器（Selector）

### 類別選取器（Class Selector）

```css
.blue {
    color: #0000FF
}
```

```html
    <span class='blue'></span>
```

## Exercise

指定以下的樣式給 `class='big'` 的元素

```css
    font-size: 50px;
```


## 偽類別選取器（Psudo-Class Selector）

* `:hover` 
* `:checked`
* `:active`

```css
.blue:hover {
    color: #0000FF
}
```

## 顏色的表達方式

* 文字
* \#000000
* rgb(0, 0, 0)
* rgba(0, 0, 0, 0.5)


## 長度的單位

* `em`
* `%`
* `px`
* `cm`

## 常見的屬性

* color
* background-color
* width, height

## Exercise

> 讓超連結在遊標移上去的時候顏色變成藍綠色。

> 做出一個寬度跟頁面一樣寬，高度 300px，背景是黃色的`<div></div>`元素。

> bonus: 讓上面的那個 `<div></div>` 元素跟高度頁面一樣。

## 位置

* top
* bottom
* left
* bottom


## 定位

* position
    * `relative`
    * `absolute`
    * `fixed`

[Demo](../css/examples/position.html)


## 顯示方式

* `none`
* `inline`
* `block`
* `inline-block`

[Demo](../css/examples/display.html)

## Box model 

* 只對 display: block 或 inline-block 有效


* 邊框（border, border-style）
* 邊框寬度（border-width）
* 元素外留白的寬度（margin）
* 元素內留白的寬度（padding）

## Exercise

到 [這裡(css/examples/box.html)](../css/examples/box.html) 用 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>c</kbd> 觀察看看這些 box 們。


## 還有很多

* overflow
* 漸層背景
* transition
* ...

自己看吧 :)

## 使用現成的 CSS

* Bootstrap
* Material Design Lite
* Semantic UI
