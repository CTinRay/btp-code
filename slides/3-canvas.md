# 畫布

---

參考 [MDN 上的教學](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

## [Playground](../web-api/examples/canvas.html)

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Canvas Example</title>        
    </head>
    <body>
        <style>* {margin: 0px;}</style>
        <canvas id="canvas"></canvas>
        <script>
         var canvas = document.getElementById("canvas");
         canvas.setAttribute('width', window.innerWidth);
         canvas.setAttribute('height', window.innerHeight);
         
         var ctx = canvas.getContext("2d");
        </script>        
    </body>
</html>
```

## Canvas 元素

只有 `width` 和 `height` 這兩個特別的屬性，如果不指定，預設是寬度 350px ，高度 150px。

## 取得渲染環境

```js
    let ctx = canvas.getContext('2d');
```

## 繪製矩形

* `fillRect(x, y, width, height)`
* `strokeRect(x, y, width, height)`
* `clearRect(x, y, width, height)`

## 繪製路徑

* `ctx.beginPath()`
* `ctx.XXX`
* `ctx.closePath()`
* `ctx.stroke()`
* `ctx.fill()`


## 路徑函式

* `ctx.moveTo(x, y)`
* `lineTo(x, y)`
* `arc(x, y, radius, startAngle, endAngle, anticlockwise)`
* `arcTo(x1, y1, x2, y2, radius)`

## 顏色

* `fillStyle = color`
* `strokeStyle = color`

## 線條樣式

* `lineWidth = value`
* `lineCap = butt | round | square`
* `lineJoin = round | bevel | miter`

## 繪製文字

* `fillText(text, x, y [, maxWidth])`
* `strokeText(text, x, y [, maxWidth])`


```js
    ctx.font = "30px mono";
```

## 動畫

* `window.requestAnimationFrame(draw);`

[範例](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)

