import { Space } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import { useSelector } from "react-redux";
import { selectColors } from "../../../store/slices/paletteSlice";
import ColorItem from "../ColorItem/ColorItem";

const ColorsList: FC = () => {
   const colors = useSelector(selectColors);

   return colors.length > 0 ? (
      <Space size="middle" wrap>
         {colors.map((color, i) => (
            <ColorItem colorId={color.id} key={color.id} isLastEl={colors.length - 1 === i} />
         ))}
      </Space>
   ) : (
      <Title level={4} type="warning">
         Палитра пустая
      </Title>
   );
};

export default ColorsList;
