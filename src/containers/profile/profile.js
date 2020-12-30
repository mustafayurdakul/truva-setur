import * as React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph, Button, Surface, Divider, List, Portal, Dialog, TextInput } from 'react-native-paper'
import * as ScreenOrientation from 'expo-screen-orientation';
import { Video } from 'expo-av';

const Profile = () => {

	let videoREF = 'asf'

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
				"live": true,
				"places": [
					{
						"id": 11,
						"name": "Rome",
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
			}
		]
	}

	const [visible, setVisible] = React.useState(false);

	const showDialog = () => {
		setVisible(true)
	};

	const hideDialog = () => {
		setVisible(false)
	};

	const fullScreenVideo = () => {
		videoREF.presentFullscreenPlayer();
		ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
	}

	const backFromFullScreen = ({ fullscreenUpdate }) => {
		switch (fullscreenUpdate) {
			case Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
				ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
				break;
		}
	}

	return (
		<View>
			<ScrollView>
				{data.tour.map(tour =>
					tour.live === true ?
						<Card key={tour.id} style={styles.card}>
							<Card.Title title="Şu an Canlı" subtitle="Hemen canlı yayına bağlanın!" />
							<Button icon='play' onPress={showDialog}>Yayına Bağlan</Button>
						</Card>
						:
						<Card style={styles.card}>
							<Card.Title title="Canlı Yayın Yok" subtitle="Şu an herhangi bir canlı yayın bulunmamakta." />
							<Button icon='pause' disabled>Yayın Yok</Button>
						</Card>
				)}
				<Card style={styles.card}>
					<Card.Title title="Seyahat Geçmişi" subtitle="Daha önce ziyaret ettiğiniz yerler." />
					<List.Section>
						<List.Accordion
							title="Geçtiğimiz Ay"
							left={props => <List.Icon {...props} icon="calendar" />}>
							<List.Item title="Fransa" />
						</List.Accordion>
					</List.Section>
				</Card>
				{
					data.tour.map(tour =>
						<Card style={styles.card} key={tour.id}>
							<View style={styles.dayinfo}>
								<Button style={styles.dayinfobutton} labelStyle={{ fontSize: 12 }} color='darkgray'>{tour.startdate}</Button>
								<Button icon="calendar" labelStyle={{ fontSize: 12 }} color='gray'>{tour.days} Gün</Button>
							</View>
							<Card.Title subtitleStyle={styles.cardsubtitle} title="Bir Sonraki Durağınız" subtitle={tour.name} />
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
							{/* <Divider />
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
							} */}
						</Card>
					)
				}
			</ScrollView>
			<Portal>
				<Dialog style={styles.dialog} visible={visible} onDismiss={hideDialog}>
					<Dialog.Content>
						<Button loading style={{ position: 'absolute', alignSelf: 'center', marginTop: 110 }}>Yükleniyor</Button>
						<Video source={{ uri: "https://yuuglp7zahsgsi.data.mediastore.eu-central-1.amazonaws.com/p/index.m3u8" }}
							ref={(ref) => {
								videoREF = ref
							}}
							volume={1.0}
							resizeMode='cover'
							style={styles.video}
							shouldPlay={true}
							onError={console.log('af')}
							onFullscreenUpdate={backFromFullScreen}
						/>
						<Button icon='fullscreen' onPress={fullScreenVideo} style={styles.streamfullscreenbotton}>Tam Ekran</Button>
						<Text style={styles.streamnote}>🎧 En iyi tecrübe için kulaklık takmanızı öneririz.</Text>
						<TextInput mode='outlined' label='Rehbere soru sor?' />
					</Dialog.Content>
					<Dialog.Actions>
						<Button onPress={hideDialog}>Ayrıl</Button>
					</Dialog.Actions>
				</Dialog>
			</Portal>
		</View>

	);
};

export default Profile;

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
		position: 'relative',
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
		position: 'absolute',
		left: 170,
		top: 10
	},
	profilestar: {
		marginRight: -40
	},
	dialog: {
		marginLeft: 5,
		marginRight: 5
	},
	video: {
		width: '100%',
		height: 220,
		alignSelf: 'center',
		borderRadius: 10,
		marginBottom: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	streamnote: {
		marginBottom: 10,
		marginTop: 10
	},
	streamfullscreenbotton: {
	}
});
