import { AiFillDelete } from "react-icons/ai"
import { RiEdit2Fill } from "react-icons/ri"
import { AiFillEyeInvisible } from "react-icons/ai"
// CSSSS
import "../../css/tables.css";
import useOwner from "../../hooks/useOwner";
import { useEffect, useState } from "react";

function ProductRow(props) {
    const { ProductNum, ProductItem, ProductImg, id, type, active } = props;
    const { hadleClickVisibility, setElement, handleAction, handleClickModal } = useOwner();
    const [visible, setVisible] = useState(active);

    const handleClickVisible = (type, id) => {
        // setElement({ type: type, id: id, name: ProductItem, editando: false });
        hadleClickVisibility(type, id)
        setVisible(!visible);
    }

    const handleClickEdit = (type, id) => {
        handleAction("uppdating");
        handleClickModal();
        setElement({ type: type, id: id, name: ProductItem, editando: true });
        // window.product_modal_2.showModal(id)
    }

    const handleClickDelete = (type, id) => {
        handleAction("deleting");
        handleClickModal();
        setElement({ type: type, id: id });
    }

    return (
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td className="border-grey-light border hover:bg-gray-100 p-3">{ProductNum + 1}</td>
            <td className="tableRow">{ProductItem}</td>
            <td className="tableRow h-[236px] sm:h-auto ">
                <section className="flex h-full items-center justify-center self-center text-center">
                    <img src={`../../assets/products/${ProductImg}`} className='w-[10rem] h-[10rem] rounded-lg' />
                </section>
            </td>
            {/* <td className="tableRow">{props.ProductPrice}</td> */}
            <td className="tableRow sm:h-[236px] border-grey-light border p-3 hover:font-medium flex items-center justify-center gap-3 ">
                <AiFillEyeInvisible
                    className={`cursor-pointer text-2xl sm:text-2xl text-gray-400 hover:text-gray-600'
                    ${!visible ? 'text-gray-600' : 'text-gray-400 hover:text-gray-600'}`}
                    onClick={() => handleClickVisible(type, id)}>
                </AiFillEyeInvisible>

                {/* Modals */}
                <RiEdit2Fill className='cursor-pointer text-2xl sm:text-2xl text-terc hover:text-[#6dcfa1]'
                    onClick={() => handleClickEdit(type, id)}>
                </RiEdit2Fill>
                <AiFillDelete className='cursor-pointer text-2xl sm:text-2xl text-red-400 hover:text-red-600'
                    onClick={() => handleClickDelete(type, id)}>
                </AiFillDelete>
            </td>
        </tr>


    )
}

export default ProductRow
