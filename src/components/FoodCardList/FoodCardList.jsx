import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './FoodCardList.scss'
import { List } from 'antd';
import FoodCard from '../FoodCard/FoodCard';
import { Modal } from "antd";
import OpenFoodCard from '../OpenFoodCard/OpenFoodCard';


const FoodCardList = ({ DTData, MaDT, setMaDT }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return <div className="FoodCardList tw-py-10 tw-mx-auto tw-flex tw-flex-wrap tw-max-w-4xl">
    <List
      grid={{
        column: 3,  
      }}
      dataSource={DTData}
      pagination={{
        pageSize: 6,
      }}
      renderItem={(item) => (
        <List.Item>
           <FoodCard {...item}
                setMaDT={setMaDT}
                handleDoubleClick={showModal}
                />
           <Modal
                title="THỰC ĐƠN"
                open={isModalOpen}
                okType={"primary"}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
                footer={null}
            >
              <OpenFoodCard MaDT = { MaDT } />
          </Modal>
        </List.Item>
      )}
    />

</div>
}

export default FoodCardList