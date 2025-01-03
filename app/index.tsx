import { Text, View } from "react-native";
import Area from "@/components/Area";
import InputField from "@/components/InputField";
import { TextProvider } from "@/components/TextProvider";

export default function Index() {
  return (
    <TextProvider>
       <View style={{backgroundColor: 'gray'}}>
      <InputField />
     <Area />
    </View>
    </TextProvider>

  );
}
