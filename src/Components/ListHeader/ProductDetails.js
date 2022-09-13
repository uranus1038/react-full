import React from "react";
import "./Displays.css"
const ProductDetails = () => {
    return (
        <div>
            <h2>
                Beautiful World
            </h2>
            <p className="hi">
                อยากเป็นแฟนแต่ได้แค่เพื่อนคุย เฮ้ย! มันจะเกินปุยมุ้ย
                เป็นให้เธอทุกอย่างแล้ว เธอไม่เคยมีฉันบ้างเลย (รึเธอ?)
                อยากเป็นแฟนแต่ได้แค่เพื่อนกัน เฮ้ย! มันจะเกินไปมั้ง?
                แบบว่าใจมันอยากถาม ได้แค่เพื่อนเท่านี้เกินปุยมุ้ยเธอ
            </p>


            <button className="btn btn-danger">สั่งซื้อสินค้า</button>
            <button className="ms-sm-2 btn btn-info display-res">ดูรายละเอียดสินค้า</button>

        </div>
    );
}

export default ProductDetails; 