# Web API

## DOM

## 取得元素

* `document.getElementById`
* `document.getElementsTagName` (return array)
* `document.getElementByClassName` (return array)

## Exercise

> 使用 `console.log` 印出一個頁面上的物件。

## 元素物件屬性

* `Element.className`
* `Element.innerHTML`
* `Element.style`
* `HTMLInputElement.value`


## Exercise

> 使用 `Element.style` 移動一個元素的位址。（你可能會需要考慮 position 屬性）


## 元素物件方法

* `Element.getAttribute(attributeName)`
* `Element.setAttribute(attributeName, value)`
* `Element.removeAttribute(attributeName)`


## Exercise

> 使用 `Element.innerHTML` 顯示九九乘法表。（注意：你的 script 必須放在  body 內容的最後面，否則可能會失敗。）

> 使用 `Element.setAttribute('disabled', 'disabled')` 使一個按鈕失效。


## 新增元素

* `document.createElement(tagName)` 
* `parent.appendChild(element)` 
* `document.createTextNode(text)`


## 刪除元素


```js
    element.parentElement.removeChild(element);
```

```js
    element.remove()
```

# 事件處理 <br>（Event Processing）

## 註冊事件處理函式
 
### 在 HTML 裡指定

* 元素的 Event Handler 屬性
    * onclick （滑鼠按下）
    * ondbclick （滑鼠按兩下）
    * onchange （input 的值被改變）
    * onselect
    * ...

```html
<div onclick='handler()'></div>
```
## 註冊事件處理函式

### js: onXXX

```js
document.getElementById('btn').onclick = handler;

function handler(event){
    console.log('clicked!! event:', event);
};
```

## 註冊事件處理函式

### js: addEventListener 

```js
document.getElementById('btn').addEventListener('click', handler);

function handler(event){
    console.log('clicked!! event:', event);
};
```

## [範例](https://btp-code.github.io/btp-code/web-api/examples/event.html) 


## Exercise

> 建立兩個 type 為 number 的 input，並在旁邊即時顯示兩個 input 數字相乘的結果。（提示：使用 `onchange` 或 `change`。）

> 利用 `window.onload` 在頁面載入後用 js 建立一個長度為 100 、每一項的內容從 100 到 1 的列表。

>對於上一題做出來的列表中的每一項，按一下即刪除。（event object 的 traget 屬性可能很有用）


# 雜七雜八

## 計時器

* window.setInterval(func, delay)
* window.setTimeout(func, delay)
* window.clearInterval(id)
* window.clearTimeout(id)

## Exercise

> 時鐘 :)
