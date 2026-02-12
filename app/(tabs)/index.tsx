// import ParallaxScrollView from "@/app-example/components/parallax-scroll-view";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const NoticiasScreen = () => {
  return (
    <ScrollView>

      <View style={Styles.body}>
        <View style={Styles.header}>
          <Text style={Styles.Cabecalho}>Portal de Notícias</Text>
          <Text style={Styles.Cabecalho}>Pagina inicial</Text>
          <Text style={Styles.Cabecalho}>Contato</Text>
          <Text style={Styles.Cabecalho}>Notícias</Text>
        </View>
        <View style={Styles.oneNoticia}>
          <Image
            source={require("../assets/img/IMG_5496-1024x761.jpg")}
            style={Styles.imgNoticias}>

          </Image>
          <Text style={Styles.textNoticias}> Novo vazamento na Baía de Guanabara abre caminho para canal de
            denúncia online</Text>
          <Text style={Styles.Noticiap}>Um novo vazamento de óleo ocorrido na tarde deste domingo, em São
            Gonçalo (RJ), trouxe à tona a necessidade de um canal participativo
            de denúncias online para identificar responsáveis por vazamentos de
            óleo nas baías fluminenses (Guanabara, Sepetiba e da Ilha Grande).</Text>
        </View>

        <View style={Styles.twoNoticia}>
          <Image
            source={require("../assets/img/1_enem-1-60987139.webp")}
            style={Styles.imgNoticias}>

          </Image>
          <Text style={Styles.textNoticias}> MEC aciona PF e anula três questões do segundo dia do Enem</Text>
          <Text style={Styles.Noticiap}> Medida foi adotada após relatos nas redes sociais sugerirem a
            antecipação de questões semelhantes às aplicadas no segundo dia do
            exame.</Text>
        </View>

        <View style={Styles.threeNoticia}>
          <Image
            source={require("../assets/img/paqueta-censo-2022090620210064.webp")} 
            style={Styles.imgNoticias}>

          </Image>
          <Text style={Styles.textNoticias}> Novo vazamento na Baía de Guanabara abre caminho para canal de
            denúncia online</Text>
          <Text style={Styles.Noticiap}>Um novo vazamento de óleo ocorrido na tarde deste domingo, em São
            Gonçalo (RJ), trouxe à tona a necessidade de um canal participativo
            de denúncias online para identificar responsáveis por vazamentos de
            óleo nas baías fluminenses (Guanabara, Sepetiba e da Ilha Grande).</Text>
        </View>
        <View style={Styles.footer}>
          <Text style={Styles.textfooter}> @anna.souza 2025-11-26 NewsLinks</Text>
        </View>
      </View>
    </ScrollView>
  );
};


const Styles = StyleSheet.create({
  body:{
     backgroundColor: "light grey",
     fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
     margin: 0,
     padding: 0,
     boxSizing: "border-box",
     lineHeight: 1.6
    },

  header:{
     backgroundColor: "red",
     color: "write",
     padding: 5,
     boxShadow:'0 4px 6px rgba(0,0,0,0.1)',
     top: 0,
     zIndex: 1000,
     flexDirection:"row",
  },

  Cabecalho:{
     backgroundColor: "light grey",
     maxWidth: 1200,
     margin: 0,
     padding: 20,
     
     justifyContent: "space-between",
     alignItems: "center",
     flexWrap: "wrap" 
  },

  oneNoticia:{
     backgroundColor: "white",
     padding: 15,
     borderRadius: 8,
     boxShadow:'0 2px 4px rgba(243, 7, 7, 0.05',
     textAlign:"justify"
  },

  textNoticias:{
    fontWeight:'bold',
    fontSize: 1.3,
    color: "Red"
  },

  Noticiap: {
    fontSize: 0.9,
    color:"grey",
    marginBottom: 0
  },

  twoNoticia:{
     backgroundColor: "white",
     padding: 15,
     borderRadius: 8,
     boxShadow:'0 2px 4px rgba(243, 7, 7, 0.05',
     textAlign:"justify"

  },

  threeNoticia:{
    backgroundColor: "light grey"
  },

  footer:{
    backgroundColor: "light grey"
  },

  textfooter:{
    color: "light grey"
  },

  imgNoticias :{
    width: 100,
    height: 180,
    objectFit: "cover",
    borderRadius: 6,
    marginBottom: 10
  }

});



export default NoticiasScreen;
