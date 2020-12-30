import * as React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph, Button, Surface, Divider, List } from 'react-native-paper'

const Dashboard = () => {

	const data = {
		"tour": [
			{
				"id": 1,
				"name": "İtalya",
				"pictureURL": "https://wallpaperaccess.com/full/389007.jpg",
				"days": 5,
				"startdate": "05.05.2020",
				"buyed": true,
				"price": 115,
				"places": [
					{
						"id": 11,
						"name": "Roma",
						"description": "Turumuzda Roma İmparatorluğu boyunca gladyatör dövüşlerine ev sahipliği yapmış antik tiyatro Colosseum imparatorluk zamanında şehrin tören merkezi olan Roma Forumu, efsaneye göre içine para atanın tekrar Roma’ya geleceğine inanılan Aşk Çeşmesi, sokak sanatçılarıyla meşhur İspanyol Merdivenleri, Vatikan (San Pietro), Roma tarihininde büyük yer kaplayan şehri uzaktan izleyebileceğimiz Castel San't Angelo - Melekler Şatosuna gideceğiz.",
						"pictureURL": "https://cdn.tourradar.com/s3/cities/520x406/1938_9aa151.jpg"
					},
					{
						"id": 12,
						"name": "Floransa",
						"description": "Turumuzun ikinci günü olan Pisa’da İtalya’nın simgesi haline gelen eğik Pisa Kulesi ve hemen yanında bulunan Miracoli Meydanına doğru kısa bir yolculuğa çıkıyoruz. Daha sonra kendinizi Orta Çağ’da hissedeceğiniz San Gimignano ‘na kasabasına gideceğiz.",
						"pictureURL": "https://cdn.tourradar.com/s3/cities/520x406/1945_e03e62.jpg"
					},
					{
						"id": 13,
						"name": "Venedik",
						"description": "Bu şehir turumuzda ünlü San Marco Meydanı ve Kilisesi, mahkumların ceza evine girmeden önce son bir kez Venedik’e baktığı Son Nefes Köprüsü, Büyük Kanal ve üzerinde bulunan Rialto Köprüsünü gezeceğiz.Gezimizin devamında Venedik’ in o eşsiz tarihi sularında kısa bir gondol turu yapıp bugünü tamamlayacağız.",
						"pictureURL": "https://cdn.tourradar.com/s3/cities/520x406/1938_9aa151.jpg"
					}
				],
				"dailyplan": [
					{
						"id": 111,
						"time": "10:00",
						"desciption": "Roma"
					},
					{
						"id": 112,
						"time": "12:00",
						"desciption": "Floransa"
					},
					{
						"id": 113,
						"time": "15:00",
						"desciption": "Venedik"
					}
				],
				"guide": {
					"name": "Emre Özdemir",
					"profilepicURL": "https://i.imgur.com/AmhJXcX.png",
					"stars": 5,
					"description": "Merhaba, 16 yıldır tur rehberliği yapıyorum. 9 yıldır İtalya'da özel bir şirkette ağırlıklı olarak Türk müşterilerle özel olarak ilgileniyorum. Ülkeyi çok iyi tanıyan birisi olarak, yılların da verdiği tecrübeyle sizlere en iyi hizmeti sunacağımdan emin olabilirsiniz. 🇮🇹 ✌️",
					"note": "Yerel rehber. 46"
				}
			},
			{
				"id": 2,
				"name": "Güneydoğu Turu",
				"pictureURL": "https://c1.wallpaperflare.com/preview/477/915/666/mardin-city-mesopotamia-turkey.jpg",
				"days": 3,
				"price": 50,
				"startdate": "05.05.2020",
				"buyed": false,
				"places": [
					{
						"id": 14,
						"name": "Diyarbakır",
						"description": "Turumuzun ilk rotasında tarihi ve doğal güzellikleriyle hepimizi büyüleyecek Hasankeyf e gideceğiz. Günün devamında Osmanlı zamanlarından günümüze kalan Diyarbakır Surları, Diyarbakır Ulu Cami’ine gideceğiz. Gezimizin devamında Hasan Paşa Hanı’na gidip hediyelik eşya isteyen Premium üyelerimize beğendikleri ürünleri ücreti karşılığında göndereceğiz. Gezimizde son olarak Meryem Ana Süryani Kadim Kilisesi’ne giderek günü sonlandıracağız.",
						"pictureURL": "https://www.ikolsoftware.com/public/resized/high/image_data/original/570572df50d16d10a291454551d3e9b155b7ce4c/5813576882eb4.jpg"
					},
					{
						"id": 15,
						"name": "Şanlıurfa",
						"description": "Tura Balıkgölle başlıyoruz. Balıklıgöl Hz İbrahim’in ateşe atıldığı ve ateşin suya yanan odunların ise balığa dönüştüğüne inanılan eski bir Urfa ‘nın sembolü bir yerdir. Gezimizin devamında insanlığa ait en eski kalıntıların yeni bulunduğu ve kazıların hala devam ettiği Göbekli Tepeye gideceğiz. Daha sonra hep beraber Hall-ür Rahman Camisi, Hz Eyüp Sabir Makamı ve tarihi Gümrük Hanını gezeceğiz.",
						"pictureURL": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bal%C4%B1kl%C4%B1g%C3%B6l_Urfa2.jpg"
					},
					{
						"id": 16,
						"name": "Mardin",
						"description": "Gezimize Mardin Kalesine çıkarak bütün şehri ve sokakları tepeden görebileceğiz. Turun devamında şehrin dar tarihi sokaklarını ve evlerini beraber yürüyerek seyredeceğiz. Hep beraber Kayseriye Çarşısı ve Mardin Bakırcılar Çarşısına giderek Premium üyelerimize istedikleri takdir de ücreti karşılığında beğendikleri ürünleri göndereceğiz. Daha sonra Mardin’in Midyat ilçesindeki tarihi yeraltı evlerine doğru kısa bir yolculuk yapacağız.",
						"pictureURL": "https://vistapointe.net/images/mardin-2.jpg"
					}
				],
				"dailyplan": [
					{
						"id": 1111,
						"time": "12:00",
						"desciption": "Diyarbakır"
					},
					{
						"id": 1122,
						"time": "11.00",
						"desciption": "Şanlıurfa"
					},
					{
						"id": 1133,
						"time": "12:30",
						"desciption": "Mardin"
					}
				],
				"guide": {
					"id": 2017,
					"name": "Batuhan Aygörmez",
					"profilepicURL": "https://i.imgur.com/hZMGPIa.jpg",
					"stars": 5,
					"description": "Merhaba, ben Batuhan. Diyarbakır'da 4 senedir öğrenciyim. Ek olarak yerel tur rehberliği yapmaktayım. Diyarbakır ve çevre illerini birçok kez gezme fırsatım oldu. Birlikte bu güzel şehirleri gezmeye ne dersiniz? 🚶‍♂️🎒",
					"note": "Yerel rehber. 25"
				}
			},
			{
				"id": 3,
				"name": "Fransa",
				"pictureURL": "https://cdn.tourradar.com/s3/tour/1500x800/99602_c7108e54.jpg",
				"price": 150,
				"days": 1,
				"startdate": "08.08.2020",
				"buyed": false,
				"places": [
					{
						"id": 17,
						"name": "Paris",
						"description": "Güne Eiffel kulesine giderek başlayacağız, etrafı seyredip Eiffel kulesinin 2.katına çıkarak bu güzel estetik şehrin tadını çıkaracağız. Daha sonra Seine nehrinin kıyısında bulunan ve Gotik yapısı ile dikkat çeken dünyaca ünlü Notre Dame Katedraline gideceğiz. Seine nehri Paris’in birçok tarihi yapısını bir araya toplayan bir nehir, burada 1 saatlik tekne gezisi ile adalar etrafında tur atıp Paris’i ve köprülerini nehirden görmenin keyfini sonuna kadar çıkarıcaksınız. Son olarak sizinle Disneyland ‘ı dolaşıp turumuzu noktalandıracağız.",
						"pictureURL": "https://cdn.tourradar.com/s3/tour/1500x800/99602_a4aae1ba.jpg"
					}
				],
				"dailyplan": [
					{
						"id": 111,
						"time": "17:00",
						"desciption": "Paris"
					}
				],
				"guide": {
					"name": "Emre Özdemir",
					"profilepicURL": "https://i.imgur.com/AmhJXcX.png",
					"stars": 5,
					"description": "Merhaba, 16 yıldır tur rehberliği yapıyorum. 9 yıldır İtalya'da özel bir şirkette ağırlıklı olarak Türk müşterilerle özel olarak ilgileniyorum. Ülkeyi çok iyi tanıyan birisi olarak, yılların da verdiği tecrübeyle sizlere en iyi hizmeti sunacağımdan emin olabilirsiniz. 🇮🇹 ✌️",
					"note": "Yerel rehber. 46"
				}
			}
		]
	}

	return (
		<View>
			<ScrollView>
				{
					data.tour.map(tour =>
						<Card style={styles.card} key={tour.id}>
							<View style={styles.dayinfo}>
								<Button style={styles.dayinfobutton} labelStyle={{ fontSize: 12 }} color='darkgray'>{tour.startdate}</Button>
								<Button icon="calendar" labelStyle={{ fontSize: 12 }} color='gray'>{tour.days} Gün</Button>
							</View>
							<Card.Title subtitleStyle={styles.cardsubtitle} title={tour.name} subtitle={tour.places.map(place => { return place.name + " - " })} />
							<Card.Cover style={styles.cardimage} source={{ uri: tour.pictureURL }} />
							<List.Accordion title="Ayrıntılar">
								<View style={styles.detailsmain}>
									<Title>Gezeceğiniz Yerler</Title>
									<View style={styles.surfacegroup}>
										<ScrollView horizontal={true}>
											{tour.places.map(place =>
												<View key={place.id}>
													<Surface style={styles.surface}>
														<Image style={styles.surfaceimage} source={{ uri: place.pictureURL }}></Image>
													</Surface>
													<Text style={styles.surfacetext}>{place.name}</Text>
												</View>
											)}
										</ScrollView>
									</View>
									<Divider style={styles.divider} />
									<View>
										<Title>Tur Programı</Title>
										{tour.places.map(place =>
											<View key={place.id}>
												<Button icon='map-marker' style={styles.destinationicon}>{place.name}</Button>
												<Paragraph>{place.description}</Paragraph>
												<Divider style={styles.divider} />
											</View>
										)}
									</View>
									<View>
										<Title style={styles.profiletitle}>Rehber Hakkında</Title>
										<Card style={styles.profilecard}>
											<Surface style={styles.profilesurface}>
												<Image style={styles.profileimage} source={{ uri: tour.guide.profilepicURL }}></Image>
											</Surface>
											<View style={styles.profilestargroup}>
												<Button style={styles.profilestar} icon="star" color='orange'></Button>
												<Button style={styles.profilestar} icon="star" color='orange'></Button>
												<Button style={styles.profilestar} icon="star" color='orange'></Button>
												<Button style={styles.profilestar} icon="star" color='orange'></Button>
												<Button style={styles.profilestar} icon="star" color='orange'></Button>
												<Button style={styles.profilestar} icon="book" color='orange'></Button>
											</View>
											<Card.Title title={tour.guide.name} subtitle={tour.guide.note} />
											<Paragraph style={styles.profiledesc}>{tour.guide.description}</Paragraph>
										</Card>
									</View>
									<Divider style={styles.divider} />
									<List.Accordion
										style={styles.listdaily}
										title="Günlük Plan"
										left={props => <List.Icon {...props} icon="clock" />}>
										{tour.dailyplan.map((day, index) =>
											<View key={day.id}>
												<List.Item title={(index + 1) + ". Gün: " + day.desciption} />
												<View style={styles.hourdetailgroup}>
													<Button icon='clock' color='gray' style={styles.houricon}></Button>
													<Text style={styles.hourdetail}>{day.time}</Text>
												</View>
											</View>
										)}
									</List.Accordion>
								</View>
							</List.Accordion>
							<Divider />
							{tour.buyed === true ?
								<Card.Actions style={styles.cardactionsbuy}>
									<Text style={{ textDecorationLine: 'line-through' }}>{tour.price} ₺</Text>
									<Button icon="cart" color='orange'>ALINDI</Button>
								</Card.Actions>
								:
								<Card.Actions style={styles.cardactionsbuyed}>
									<Text>{tour.price} ₺</Text>
									<Button icon="cart" >Şimdi Satın Al</Button>
								</Card.Actions>
							}
						</Card>
					)
				}
			</ScrollView>
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	card: {
		margin: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84
	},
	profiletitle: {
		marginLeft: 5,
		marginBottom: 10
	},
	cardsubtitle: {
		fontSize: 15
	},
	cardimage: {
		margin: 10,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.00,
		elevation: 1
	},
	cardactionsbuy: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	cardactionsbuyed: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	detailsmain: {
		margin: 15
	},
	surfacegroup: {
		marginTop: 10,
		marginBottom: 10
	},
	surface: {
		width: 135,
		height: 135,
		borderRadius: 10,
		marginRight: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.18,
		shadowRadius: 1.00,
		elevation: 1
	},
	surfaceimage: {
		width: 135,
		height: 135,
		borderRadius: 10
	},
	surfacetext: {
		marginTop: 5,
		marginRight: 10
	},
	divider: {
		margin: -15,
		marginTop: 10,
		marginBottom: 10,
	},
	listdaily: {
		marginLeft: -15,
		marginRight: -15
	},
	hourdetailgroup: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: -43,
		marginBottom: 40
	},
	hourdetail: {
		marginRight: 20
	},
	houricon: {
		marginRight: -20
	},
	dayinfo: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		marginBottom: -60,
		marginTop: 10
	},
	dayinfobutton: {
		marginBottom: -15
	},
	destinationicon: {
		alignSelf: 'flex-start',
		marginLeft: -15
	},
	profilecard: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	profileimage: {
		width: 150,
		height: 100,
		borderRadius: 10
	},
	profilesurface: {
		margin: 10,
		width: 150,
		height: 100,
		borderRadius: 10
	},
	profiledesc: {
		marginLeft: 15,
		marginRight: 15,
		marginBottom: 15
	},
	profilestargroup: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: -110,
		marginRight: -15,
		marginBottom: 60
	},
	profilestar: {
		marginLeft: -40
	},
});
