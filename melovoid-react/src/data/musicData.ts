import type { Song, Album, Band } from '../types/music';

// --- SONGS DATABASE ---
export const SONGS: Record<string, Song> = {
  cry: {
    id: 'cry',
    title: 'Cry',
    artist: 'Cigarettes After Sex',
    album: 'Cry',
    coverImage: '/cry.webp',
    audioSrc: '/Cry.mp3',
    lyrics: `It's making you cry every time\nYou give your love to me this way\nSayin' you'd wait for me to stay\nI know it hurts you\nBut I need to tell you something\nMy heart just can't be faithful for long\nI swear I'll only make you cry\nMaybe I'd change for you someday\nBut I can't help the way I feel`
  },
  there_is_a_light: {
    id: 'there_is_a_light',
    title: 'There Is A Light That Never Goes Out',
    artist: 'The Smiths',
    album: 'The Queen Is Dead',
    coverImage: '/There_is_a_Light_That_Never_Goes_Out_Neon_Sign_U705_3bbdd44f-b8e1-4d50-a996-3a3f0d460a21.webp',
    audioSrc: '/audio/309 There Is A Light That Never Goes Out [2011 Remastered Version].mp3',
    lyrics: `Take me out tonight\nWhere there's music and there's people\nAnd they're young and alive\nDriving in your car\nI never never want to go home\nBecause I haven't got one anymore`
  },
  sweater_weather: {
    id: 'sweater_weather',
    title: 'Sweater Weather',
    artist: 'The Neighbourhood',
    album: 'I Love You.',
    coverImage: '/sweater.jpg',
    audioSrc: "/'Sweater Weather'.mp3",
    lyrics: `All I am is a man\nI want the world in my hands\nI hate the beach but I stand\nIn California with my toes in the sand\nUse the sleeves of my sweater\nLet's have an adventure`
  },
  creep: {
    id: 'creep',
    title: 'Creep',
    artist: 'Radiohead',
    album: 'Pablo Honey',
    coverImage: '/creep.jpg',
    audioSrc: '/Radiohead - Creep.mp3',
    lyrics: `When you were here before\nCouldn't look you in the eye\nYou're just like an angel\nYour skin makes me cry\n\nBut I'm a creep\nI'm a weirdo\nWhat the hell am I doing here?\nI don't belong here`
  },
  ru_mine: {
    id: 'ru_mine',
    title: 'R U Mine?',
    artist: 'Arctic Monkeys',
    album: 'AM',
    coverImage: '/are you mine.jpg',
    audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - R U Mine.mp3',
    lyrics: `I'm a puppet on a string\nTracy Island, time-traveling\nCoconuts, yup, she's nice\n\nAre you mine?\nAre you mine?\nAre you mine?\nAre you mine?`
  },
  come_as_you_are: {
    id: 'come_as_you_are',
    title: 'Come As You Are',
    artist: 'Nirvana',
    album: 'Nevermind',
    coverImage: '/come as you are.jpg',
    audioSrc: '/nirvana-nevermind-1991/03 Come as You Are (MTV Unplugged in New York).mp3',
    lyrics: `Come as you are, as you were\nAs I want you to be\nAs a friend, as a friend\nAs an old enemy\n\nTake your time, hurry up\nChoice is yours, don't be late`
  },
  karma_police: {
    id: 'karma_police',
    title: 'Karma Police',
    artist: 'Radiohead',
    album: 'OK Computer',
    coverImage: '/karma police.jpg',
    audioSrc: '/audio/06 Karma Police.mp3'
  },
  all_i_need: {
    id: 'all_i_need',
    title: 'All I Need',
    artist: 'Radiohead',
    album: 'In Rainbows',
    coverImage: '/In Rainbows.jpg',
    audioSrc: '/audio/All I Need_spotdown.app.mp3'
  },
  let_down: {
    id: 'let_down',
    title: 'Let Down',
    artist: 'Radiohead',
    album: 'OK Computer',
    coverImage: '/OK_Computer.jpg',
    audioSrc: '/audio/05 Let Down.mp3'
  },
  apocalypse: {
    id: 'apocalypse',
    title: 'Apocalypse',
    artist: 'Cigarettes After Sex',
    album: 'Cigarettes After Sex',
    coverImage: '/cas.jpg',
    audioSrc: '/Apocalypse_spotdown.app.mp3'
  },
  k: {
    id: 'k',
    title: 'K.',
    artist: 'Cigarettes After Sex',
    album: 'Cigarettes After Sex',
    coverImage: '/k.jpg',
    audioSrc: '/K._spotdown.app.mp3'
  },
  sunsetz: {
    id: 'sunsetz',
    title: 'Sunsetz',
    artist: 'Cigarettes After Sex',
    album: 'Cigarettes After Sex',
    coverImage: '/cas.jpg',
    audioSrc: '/Sunsetz_spotdown.app.mp3'
  },
  sweet: {
    id: 'sweet',
    title: 'Sweet',
    artist: 'Cigarettes After Sex',
    album: 'Cigarettes After Sex',
    coverImage: '/sweet.jpg',
    audioSrc: '/Sweet_spotdown.app.mp3'
  },
  fake_plastic_trees: {
    id: 'fake_plastic_trees',
    title: 'Fake Plastic Trees',
    artist: 'Radiohead',
    album: 'The Bends',
    coverImage: '/the bends.png',
    audioSrc: '/Fake Plastic Trees_spotdown.app.mp3'
  },
  this_charming_man: {
    id: 'this_charming_man',
    title: 'This Charming Man',
    artist: 'The Smiths',
    album: 'Hatful of Hollow',
    coverImage: '/12290-0-medium.jpg',
    audioSrc: '/Hatful of Hollow/This Charming Man - John Peel Session 14_09_83_spotdown.app.mp3'
  },
  back_to_the_old_house: {
    id: 'back_to_the_old_house',
    title: 'Back to the Old House',
    artist: 'The Smiths',
    album: 'Hatful of Hollow',
    coverImage: '/12290-0-medium.jpg',
    audioSrc: '/Hatful of Hollow/Back to the Old House - John Peel Session 14_09_83_spotdown.app.mp3'
  }
};

// --- ALBUMS DATABASE ---
export const ALBUMS: Record<string, Album> = {
  the_bends: {
    id: 'the_bends',
    title: 'The Bends',
    artist: 'Radiohead',
    releaseDate: 'February 27, 1995',
    coverImage: '/the bends.png',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'the_1', title: 'Planet Telex', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '4:19', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2a/89/31/2a8931cd-3ccc-1b83-225d-759e89e4cd34/mzaf_14134260997503685558.plus.aac.p.m4a' },
      { id: 'the_2', title: 'The Bends', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '4:16', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5a/1b/38/5a1b38c0-e751-b65a-91f4-5c0ecf8981fe/mzaf_13497506801332646990.plus.aac.p.m4a' },
      { id: 'the_3', title: 'High and Dry', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '4:17', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a5/c9/75/a5c975f6-d8a1-4975-b66f-a16e0c49cb27/mzaf_6303791502772489233.plus.aac.p.m4a' },
      { id: 'the_4', title: 'Fake Plastic Trees', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '4:27', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/88/7c/92/887c92d6-0979-9f01-1e9b-6762fca517bd/mzaf_1998812167371306210.plus.aac.p.m4a' },
      { id: 'the_5', title: 'Bones', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '3:09', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/8e/70/49/8e70494a-8072-45a6-116c-a21c5db16c01/mzaf_16999969639048262563.plus.aac.p.m4a' },
      { id: 'the_6', title: '(Nice Dream)', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '3:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c2/ed/04/c2ed04b3-b960-97b6-5515-5db8167c9580/mzaf_16873795646063224379.plus.aac.p.m4a' },
      { id: 'the_7', title: 'Just', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '3:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/03/a5/21/03a521e5-d3a4-87d4-4966-9530a1c79ae0/mzaf_1348815026268628507.plus.aac.p.m4a' },
      { id: 'the_8', title: 'My Iron Lung', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '4:36', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/25/e6/d4/25e6d426-dd1e-03a2-50d4-4606d9bb09b5/mzaf_10188444084718925797.plus.aac.p.m4a' },
      { id: 'the_9', title: 'Bullet Proof ... I Wish I Was', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '3:29', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/5e/ae/9a/5eae9a9f-32d7-d8d6-fa80-7be5c2eb1ece/mzaf_649507979241863335.plus.aac.p.m4a' },
      { id: 'the_10', title: 'Black Star', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '3:39', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ea/bd/85/eabd8501-4338-c21c-7922-acc04af3ac35/mzaf_175550197550552181.plus.aac.p.m4a' },
      { id: 'the_11', title: 'Sulk', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '3:43', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0c/b9/ac/0cb9ac66-aebb-2d5a-1f00-f4fe1286ed53/mzaf_16958907133218294626.plus.aac.p.m4a' },
      { id: 'the_12', title: 'Street Spirit (Fade Out)', artist: 'Radiohead', album: 'The Bends', coverImage: '/the bends.png', duration: '3:49', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cc/d4/f2/ccd4f280-499c-fa45-bb7b-7b1baba555e3/mzaf_8792301374285941952.plus.aac.p.m4a' }
    ]
  },
  kid_a: {
    id: 'kid_a',
    title: 'Kid A',
    artist: 'Radiohead',
    releaseDate: 'October 2, 2000',
    coverImage: '/KId A.jpg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'kid_1', title: 'Everything In Its Right Place', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '4:11', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bd/05/e4/bd05e458-59dc-d46d-ea33-ea9c44523f57/mzaf_3986687910331329159.plus.aac.p.m4a' },
      { id: 'kid_2', title: 'Kid A', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '6:34', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/dd/17/5b/dd175b86-947b-2833-a955-526977f5c4ba/mzaf_310731774401592456.plus.aac.p.m4a' },
      { id: 'kid_3', title: 'The National Anthem', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '5:52', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e3/dc/d8/e3dcd8c9-3687-de34-61ab-8b286a493d90/mzaf_16249265476549684137.plus.aac.p.m4a' },
      { id: 'kid_4', title: 'How to Disappear Completely', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '5:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ba/c2/10/bac210fb-77c0-43c5-22fc-16c4c071f55d/mzaf_13607765750791747786.plus.aac.p.m4a' },
      { id: 'kid_5', title: 'Treefingers', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '3:43', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/4d/91/ee/4d91ee83-c657-a65b-b0eb-cc08da6586eb/mzaf_3924922006052002449.plus.aac.p.m4a' },
      { id: 'kid_6', title: 'Optimistic', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '5:16', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/40/56/64/40566449-4548-62cd-e678-3e7b3822cd44/mzaf_11494473252875252484.plus.aac.p.m4a' },
      { id: 'kid_7', title: 'In Limbo', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '3:31', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/4f/9a/30/4f9a30e5-0741-6f5a-69fa-8fd10bf54bef/mzaf_12996542171304534758.plus.aac.p.m4a' },
      { id: 'kid_8', title: 'Idioteque', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '5:09', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b9/8c/60/b98c60b8-154b-0e41-5fdf-deda24f997e4/mzaf_17204055347562714250.plus.aac.p.m4a' },
      { id: 'kid_9', title: 'Morning Bell', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '4:36', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/af/4a/e0/af4ae03c-3d6e-32e6-db95-7ac36920a97b/mzaf_8717728254581075254.plus.aac.p.m4a' },
      { id: 'kid_10', title: 'Motion Picture Soundtrack', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '3:20', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/62/54/4f/62544f47-6dcf-f1c6-94aa-6c33a56bd254/mzaf_7303879598402754582.plus.aac.p.m4a' },
      { id: 'kid_11', title: 'Untitled', artist: 'Radiohead', album: 'Kid A', coverImage: '/KId A.jpg', duration: '0:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f2/b2/8e/f2b28ef6-bb07-7eea-c758-f908cb471892/mzaf_382587313713436863.plus.aac.p.m4a' }
    ]
  },
  amnesiac: {
    id: 'amnesiac',
    title: 'Amnesiac',
    artist: 'Radiohead',
    releaseDate: 'June 4, 2001',
    coverImage: '/Radiohead_-_Amnesiac_cover.png',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'amn_1', title: 'Packt Like Sardines in a Crushed Tin Box', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '4:00', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ef/fc/ac/effcaca6-a67f-8df0-2c6f-c8cdc001622c/mzaf_2102368269140007441.plus.aac.p.m4a' },
      { id: 'amn_2', title: 'Pyramid Song', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '4:49', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2f/c4/93/2fc493e2-715f-cda6-4a9c-c8af6d734249/mzaf_2159298284715693075.plus.aac.p.m4a' },
      { id: 'amn_3', title: 'Pulk / Pull Revolving Doors', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '4:07', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f4/fd/5b/f4fd5b5a-041e-9748-03f5-7c4ef36c31cc/mzaf_18235843617521269124.plus.aac.p.m4a' },
      { id: 'amn_4', title: 'You and Whose Army?', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '3:11', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1f/49/cc/1f49cc78-c1c1-1295-4d2c-3c192446514c/mzaf_11291313330585893461.plus.aac.p.m4a' },
      { id: 'amn_5', title: 'I Might Be Wrong', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '4:54', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/73/37/95/7337958b-2635-4431-6ed3-efd973840cd0/mzaf_18412204372051632958.plus.aac.p.m4a' },
      { id: 'amn_6', title: 'Knives Out', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '4:15', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fe/51/c3/fe51c3fd-437d-29d0-f20f-51cf18a19ab8/mzaf_2541751744390602734.plus.aac.p.m4a' },
      { id: 'amn_7', title: 'Morning Bell / Amnesiac', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '3:14', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/43/22/79/4322798c-ae7d-82d5-70f1-5f448532ca6b/mzaf_11576735268126493551.plus.aac.p.m4a' },
      { id: 'amn_8', title: 'Dollars & Cents', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '4:52', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/18/98/2c/18982c19-f4bb-9ca0-a818-46de29a77ee6/mzaf_510125448439139877.plus.aac.p.m4a' },
      { id: 'amn_9', title: 'Hunting Bears', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '2:01', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/68/a3/87/68a387a2-d0d0-ced4-f65a-ccb5ee0bdbd4/mzaf_5998347594490281470.plus.aac.p.m4a' },
      { id: 'amn_10', title: 'Like Spinning Plates', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '3:57', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b7/7d/c2/b77dc237-42f0-b8f2-1655-8e193d07b62a/mzaf_11024189245102842874.plus.aac.p.m4a' },
      { id: 'amn_11', title: 'Life in a Glasshouse', artist: 'Radiohead', album: 'Amnesiac', coverImage: '/Radiohead_-_Amnesiac_cover.png', duration: '4:37', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2c/51/68/2c5168fd-0d95-ee74-4fe4-24abd7785540/mzaf_16110509892322053309.plus.aac.p.m4a' }
    ]
  },
  pablo_honey: {
    id: 'pablo_honey',
    title: 'Pablo Honey',
    artist: 'Radiohead',
    releaseDate: 'February 22, 1993',
    coverImage: '/creep.jpg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'pab_1', title: 'You', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', duration: '3:29', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/43/0d/18/430d185f-5f4e-b4a3-04d1-05d4c2130dc8/mzaf_2514685066057802275.plus.aac.p.m4a' },
      { id: 'pab_3', title: 'How Do You?', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', duration: '2:12', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a3/da/32/a3da32bd-db3d-c36b-6f91-53fc718ca5c2/mzaf_1644115693478857614.plus.aac.p.m4a' },
      { id: 'pab_4', title: 'Stop Whispering', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', duration: '5:26', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/6e/b0/f6/6eb0f646-1b76-ca2c-7ee6-017a04508ebf/mzaf_424099550323418597.plus.aac.p.m4a' },
      { id: 'pab_5', title: 'Thinking About You', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', duration: '2:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/67/77/7e/67777e27-7dd3-6e9a-6b76-d8e8f717f8f0/mzaf_10939723814371564312.plus.aac.p.m4a' },
      { id: 'pab_6', title: 'Anyone Can Play Guitar', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', duration: '3:38', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/4b/86/8c/4b868c07-f297-c34d-67c4-b80f226c937c/mzaf_15339064488409505583.plus.aac.p.m4a' },
      { id: 'pab_7', title: 'Ripcord', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', duration: '3:10', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/eb/9d/34/eb9d34cc-06cc-2b7a-8c7e-93b7694e8f1f/mzaf_1414632360549915001.plus.aac.p.m4a' },
      { id: 'pab_8', title: 'Vegetable', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', duration: '3:13', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/82/18/62/82186263-51c7-741c-cef9-b2aee96e6b66/mzaf_11531525780168942568.plus.aac.p.m4a' },
      { id: 'pab_9', title: 'Prove Yourself', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', duration: '2:25', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a0/f2/12/a0f212ff-a7b4-2157-e97c-f722db89ecdb/mzaf_15878398277313574494.plus.aac.p.m4a' },
      { id: 'pab_10', title: 'I Can\'t', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1c/af/ca/1cafca8f-10e7-0cbc-1d48-c340df48ccdc/mzaf_6685300487573816530.plus.aac.p.m4a' },
      { id: 'pab_11', title: 'Lurgee', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', duration: '3:08', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/35/9f/72/359f7240-55b2-f987-9258-42b0aefade83/mzaf_7160632199225056274.plus.aac.p.m4a' },
      { id: 'pab_12', title: 'Blow Out', artist: 'Radiohead', album: 'Pablo Honey', coverImage: '/creep.jpg', duration: '4:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e8/5c/9c/e85c9c99-b2e9-da1d-f5f8-7b8faebda9c2/mzaf_577262832983577241.plus.aac.p.m4a' }
    ]
  },
  cigarettes_after_sex: {
    id: 'cigarettes_after_sex',
    title: 'Cigarettes After Sex',
    artist: 'Cigarettes After Sex',
    releaseDate: 'December 1, 2016',
    coverImage: '/cass.jpg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'cig_1', title: 'K.', artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', coverImage: '/cass.jpg', duration: '5:20', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/06/ec/9106ec5f-6dad-d8f8-0745-8e3ad98438bb/mzaf_10776239593810001655.plus.aac.p.m4a' },
      { id: 'cig_2', title: 'Each Time You Fall in Love', artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', coverImage: '/cass.jpg', duration: '4:50', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0a/62/96/0a6296fb-c6d9-972a-3ea8-4551ca660bda/mzaf_14875951605378095402.plus.aac.p.m4a' },
      { id: 'cig_3', title: 'Sunsetz', artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', coverImage: '/cass.jpg', duration: '3:35', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/a4/4a/44a44a75-0576-12fa-6002-2f464c091102/mzaf_17923299166743083363.plus.aac.p.m4a' },
      { id: 'cig_4', title: 'Apocalypse', artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', coverImage: '/cass.jpg', duration: '4:50', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b1/43/b0/b143b0ee-863a-8f7c-3c56-a67110ef1591/mzaf_10438092015459317290.plus.aac.p.m4a' },
      { id: 'cig_5', title: 'Flash', artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', coverImage: '/cass.jpg', duration: '4:34', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e0/5b/10/e05b1091-4a1d-335e-67c2-9c78e771eae3/mzaf_13355282379050475405.plus.aac.p.m4a' },
      { id: 'cig_6', title: 'Sweet', artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', coverImage: '/cass.jpg', duration: '4:52', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1f/56/4a/1f564a2c-ecbb-47ac-1aed-b171f48acfb8/mzaf_2289328977316131156.plus.aac.p.m4a' },
      { id: 'cig_7', title: 'Opera House', artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', coverImage: '/cass.jpg', duration: '6:05', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6e/2e/00/6e2e00ef-95e1-622d-114e-fec568692753/mzaf_5439623287797616326.plus.aac.p.m4a' },
      { id: 'cig_8', title: 'Truly', artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', coverImage: '/cass.jpg', duration: '4:04', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cd/c4/ae/cdc4aeb2-873b-8a28-8d6e-83e358da5dcb/mzaf_9760323933008504334.plus.aac.p.m4a' },
      { id: 'cig_9', title: 'John Wayne', artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', coverImage: '/cass.jpg', duration: '4:18', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a1/f6/dc/a1f6dccd-b3fe-1463-ed9f-e9de7db056a0/mzaf_6951302062012584312.plus.aac.p.m4a' }
    ]
  },
  cry: {
    id: 'cry',
    title: 'Cry',
    artist: 'Cigarettes After Sex',
    releaseDate: 'October 25, 2019',
    coverImage: '/cas2.webp',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'cry_1', title: 'Don\'t Let Me Go', artist: 'Cigarettes After Sex', album: 'Cry', coverImage: '/cas2.webp', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/08/b1/ee/08b1ee14-8a6f-c6a1-7d28-68260e580993/mzaf_8707488069322804684.plus.aac.p.m4a' },
      { id: 'cry_3', title: 'Heavenly', artist: 'Cigarettes After Sex', album: 'Cry', coverImage: '/cas2.webp', duration: '4:47', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f5/22/6c/f5226cfa-072d-4704-733f-26fa378cdcca/mzaf_6155016458585983986.plus.aac.p.m4a' },
      { id: 'cry_5', title: 'Touch', artist: 'Cigarettes After Sex', album: 'Cry', coverImage: '/cas2.webp', duration: '4:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f6/93/f1/f693f13b-85c4-d9ff-1fa7-a7b954ea4c99/mzaf_11663339271541594147.plus.aac.p.m4a' },
      { id: 'cry_6', title: 'Hentai', artist: 'Cigarettes After Sex', album: 'Cry', coverImage: '/cas2.webp', duration: '4:45', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/05/b6/af/05b6af4a-9ee5-9b12-86ea-d0b97bfc468a/mzaf_14473457802398712404.plus.aac.p.m4a' },
      { id: 'cry_7', title: 'Cry', artist: 'Cigarettes After Sex', album: 'Cry', coverImage: '/cas2.webp', duration: '4:17', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6d/0f/5f/6d0f5f2b-e60d-48e5-acc1-75caed5e79ea/mzaf_2590555406097753428.plus.aac.p.m4a' },
      { id: 'cry_8', title: 'Falling in Love', artist: 'Cigarettes After Sex', album: 'Cry', coverImage: '/cas2.webp', duration: '4:06', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3c/5c/61/3c5c6160-f6f6-fe1c-361a-5f85b631360d/mzaf_793628274942606095.plus.aac.p.m4a' },
      { id: 'cry_9', title: 'Pure', artist: 'Cigarettes After Sex', album: 'Cry', coverImage: '/cas2.webp', duration: '4:15', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/33/99/d7/3399d756-0dc7-87ed-b007-ed6165006f6b/mzaf_13789397431760725608.plus.aac.p.m4a' }
    ]
  },
  the_new_album: {
    id: 'the_new_album',
    title: 'The New Album',
    artist: 'Cigarettes After Sex',
    releaseDate: 'Unknown',
    coverImage: '/crush.jpg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
    ]
  },
  k: {
    id: 'k',
    title: 'K.',
    artist: 'Cigarettes After Sex',
    releaseDate: 'December 1, 2016',
    coverImage: '/i can.jpg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'k_1', title: 'K.', artist: 'Cigarettes After Sex', album: 'K.', coverImage: '/i can.jpg', duration: '5:20', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview111/v4/bb/aa/b3/bbaab3fe-c15e-f7b6-41be-e4f504b5c750/mzaf_2775728559107780096.plus.aac.p.m4a' }
    ]
  },
  whatever_people_say_i_am: {
    id: 'whatever_people_say_i_am',
    title: 'Whatever People Say I Am',
    artist: 'Arctic Monkeys',
    releaseDate: 'January 23, 2006',
    coverImage: '/Whatever People Say.webp',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'wha_1', title: 'The View from the Afternoon', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', duration: '3:38', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3a/58/d8/3a58d850-d878-b06d-6458-9aa2e5db153e/mzaf_10063283014383622252.plus.aac.p.m4a' },
      { id: 'wha_2', title: 'I Bet You Look Good on the Dancefloor', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', duration: '2:54', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d5/fa/0b/d5fa0b43-8a9d-71b8-c174-06120380e2f2/mzaf_9555095373337300237.plus.aac.p.m4a' },
      { id: 'wha_4', title: 'Dancing Shoes', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', duration: '2:21', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/06/92/2c/06922c3e-758c-3731-a94c-7c7773923c04/mzaf_180932878046659006.plus.aac.p.m4a' },
      { id: 'wha_5', title: 'You Probably Couldn\'t See for the Lights but You Were Staring Straight At Me', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/46/fd/17/46fd17b6-48ab-01d3-ba1e-b64b081d9cd0/mzaf_16548106207059000938.plus.aac.p.m4a' },
      { id: 'wha_6', title: 'Still Take You Home', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', duration: '2:54', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/44/82/e8/4482e8a1-db9c-566e-4f22-866e1a653bc0/mzaf_2901222696120843070.plus.aac.p.m4a' },
      { id: 'wha_7', title: 'Riot Van', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', duration: '2:15', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c2/0f/e2/c20fe2e1-dedc-a4d0-4bcd-6dc40a62be3a/mzaf_12101821170396827554.plus.aac.p.m4a' },
      { id: 'wha_8', title: 'Red Light Indicates Doors Are Secured', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', duration: '2:24', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c2/75/d8/c275d8bc-e7fc-1f4a-68d2-eed26d67da5d/mzaf_17565591865487726343.plus.aac.p.m4a' },
      { id: 'wha_9', title: 'Mardy Bum', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', duration: '2:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0a/53/4a/0a534ab0-afbc-15b3-8dfc-087f3991d1d2/mzaf_925220595981036171.plus.aac.p.m4a' },
      { id: 'wha_10', title: 'Perhaps Vampires Is a Bit Strong But…', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', duration: '4:29', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/46/08/6c/46086ce4-8bf7-d1ba-e14a-d36c66fb36e0/mzaf_83903175534317196.plus.aac.p.m4a' },
      { id: 'wha_12', title: 'From the Ritz to the Rubble', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', duration: '3:13', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c5/56/14/c55614ca-271f-08ce-8f6a-c1f9bc5c2e8a/mzaf_10235689436543737766.plus.aac.p.m4a' },
      { id: 'wha_13', title: 'A Certain Romance', artist: 'Arctic Monkeys', album: 'Whatever People Say I Am', coverImage: '/Whatever People Say.webp', duration: '5:31', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/19/e2/5d/19e25db9-1a12-b587-b32c-802dcfac464b/mzaf_8420047581821862433.plus.aac.p.m4a' }
    ]
  },
  humbug: {
    id: 'humbug',
    title: 'Humbug',
    artist: 'Arctic Monkeys',
    releaseDate: 'August 19, 2009',
    coverImage: '/Humbug.webp',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'hum_1', title: 'My Propeller', artist: 'Arctic Monkeys', album: 'Humbug', coverImage: '/Humbug.webp', duration: '3:27', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/15/d7/a2/15d7a293-d1d2-78c8-b2e4-0ac53b7410f1/mzaf_13139084304907458874.plus.aac.p.m4a' },
      { id: 'hum_2', title: 'Crying Lightning', artist: 'Arctic Monkeys', album: 'Humbug', coverImage: '/Humbug.webp', duration: '3:43', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a1/39/c0/a139c0de-722a-5a7a-944b-7e83312ea015/mzaf_11615992920297279403.plus.aac.p.m4a' },
      { id: 'hum_3', title: 'Dangerous Animals', artist: 'Arctic Monkeys', album: 'Humbug', coverImage: '/Humbug.webp', duration: '3:31', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/65/24/cf/6524cf0d-307a-17d7-4a4b-d8e471255d7e/mzaf_8655166764723850604.plus.aac.p.m4a' },
      { id: 'hum_5', title: 'Potion Approaching', artist: 'Arctic Monkeys', album: 'Humbug', coverImage: '/Humbug.webp', duration: '3:32', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fc/39/17/fc39175c-38e5-48aa-4536-b25595233992/mzaf_2308351021599079094.plus.aac.p.m4a' },
      { id: 'hum_6', title: 'Fire and the Thud', artist: 'Arctic Monkeys', album: 'Humbug', coverImage: '/Humbug.webp', duration: '3:57', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ad/ed/20/aded2053-e2a4-5cdd-8b72-0d75fcc65652/mzaf_14816315065376505429.plus.aac.p.m4a' },
      { id: 'hum_7', title: 'Cornerstone', artist: 'Arctic Monkeys', album: 'Humbug', coverImage: '/Humbug.webp', duration: '3:18', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/0f/62/a1/0f62a1ab-e1f3-37a3-d610-cb83f987a8c9/mzaf_16890687991762936772.plus.aac.p.m4a' },
      { id: 'hum_8', title: 'Dance Little Liar', artist: 'Arctic Monkeys', album: 'Humbug', coverImage: '/Humbug.webp', duration: '4:43', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/97/21/b2/9721b25a-4716-c3ff-56ed-5a1d0e999ef2/mzaf_7590036750456050817.plus.aac.p.m4a' },
      { id: 'hum_10', title: 'The Jeweller\'s Hands', artist: 'Arctic Monkeys', album: 'Humbug', coverImage: '/Humbug.webp', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d6/f9/af/d6f9af12-db14-e8ee-99a9-f32cb09c4c1a/mzaf_8813183875525287642.plus.aac.p.m4a' },
      { id: 'hum_11', title: 'I Haven\'t Got My Strange', artist: 'Arctic Monkeys', album: 'Humbug', coverImage: '/Humbug.webp', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/cb/47/4c/cb474ce4-049b-25b2-11a2-9dfc950f44d8/mzaf_9202260116457222249.plus.aac.p.m4a' }
    ]
  },
  suck_it_and_see: {
    id: 'suck_it_and_see',
    title: 'Suck It and See',
    artist: 'Arctic Monkeys',
    releaseDate: 'June 1, 2011',
    coverImage: '/Suck It and See.webp',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'suc_1', title: 'Suck It and See', artist: 'Arctic Monkeys', album: 'Suck It and See', coverImage: '/Suck It and See.webp', duration: '3:46', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/40/07/a3/4007a3f5-e8ed-447b-e30f-69e51abf1ae4/mzaf_14329924562305677446.plus.aac.p.m4a' },
      { id: 'suc_2', title: 'Black Treacle', artist: 'Arctic Monkeys', album: 'Suck It and See', coverImage: '/Suck It and See.webp', duration: '3:35', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/2f/ca/68/2fca68bd-ad4a-85ca-6616-d0e33654c593/mzaf_13137406353156640542.plus.aac.p.m4a' },
      { id: 'suc_3', title: 'Brick By Brick', artist: 'Arctic Monkeys', album: 'Suck It and See', coverImage: '/Suck It and See.webp', duration: '2:60', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/44/b4/1f/44b41f0e-3982-7387-cfca-524869816395/mzaf_9113479380268236046.plus.aac.p.m4a' },
      { id: 'suc_5', title: 'Don\'t Sit Down \'Cause I\'ve Moved Your Chair', artist: 'Arctic Monkeys', album: 'Suck It and See', coverImage: '/Suck It and See.webp', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/64/64/24/6464248c-ec9c-87bf-c230-4641c130c1ce/mzaf_10030982941717681781.plus.aac.p.m4a' },
      { id: 'suc_6', title: 'Library Pictures', artist: 'Arctic Monkeys', album: 'Suck It and See', coverImage: '/Suck It and See.webp', duration: '2:22', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/28/e5/d7/28e5d772-81a2-699b-e8f0-cb1510be1a07/mzaf_9097356734370924938.plus.aac.p.m4a' },
      { id: 'suc_7', title: 'All My Own Stunts', artist: 'Arctic Monkeys', album: 'Suck It and See', coverImage: '/Suck It and See.webp', duration: '3:52', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e7/0a/76/e70a76f3-c4dc-3e1c-86e7-106af0e61b50/mzaf_10528133703475372400.plus.aac.p.m4a' },
      { id: 'suc_9', title: 'Piledriver Waltz', artist: 'Arctic Monkeys', album: 'Suck It and See', coverImage: '/Suck It and See.webp', duration: '3:24', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/2e/7b/1d/2e7b1dd5-6dbc-a692-4b92-105398b0a349/mzaf_3231655306179565337.plus.aac.p.m4a' },
      { id: 'suc_10', title: 'Love Is a Laserquest', artist: 'Arctic Monkeys', album: 'Suck It and See', coverImage: '/Suck It and See.webp', duration: '3:11', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bc/9e/ac/bc9eacb8-491f-b3bf-747c-2eaa16a3a438/mzaf_4086966402830883173.plus.aac.p.m4a' },
      { id: 'suc_11', title: 'Suck It and See', artist: 'Arctic Monkeys', album: 'Suck It and See', coverImage: '/Suck It and See.webp', duration: '3:46', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9f/e8/77/9fe8777a-3b27-04ba-b88a-0457edb09f57/mzaf_1954836396508918259.plus.aac.p.m4a' },
      { id: 'suc_12', title: 'That\'s Where You\'re Wrong', artist: 'Arctic Monkeys', album: 'Suck It and See', coverImage: '/Suck It and See.webp', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/98/f4/d4/98f4d4fc-1d56-ea0e-c672-ba0abebd151d/mzaf_3051192056519813557.plus.aac.p.m4a' }
    ]
  },
  the_car: {
    id: 'the_car',
    title: 'The Car',
    artist: 'Arctic Monkeys',
    releaseDate: 'August 29, 2022',
    coverImage: '/The Car.jpg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'the_1', title: 'There’d Better Be A Mirrorball', artist: 'Arctic Monkeys', album: 'The Car', coverImage: '/The Car.jpg', duration: '4:26', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1a/e9/2e/1ae92e5c-d3f6-9fb5-bf9b-e53a3336fa51/mzaf_2472080240575894890.plus.aac.p.m4a' },
      { id: 'the_2', title: 'I Ain’t Quite Where I Think I Am', artist: 'Arctic Monkeys', album: 'The Car', coverImage: '/The Car.jpg', duration: '3:11', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c0/c0/91/c0c091c1-64f2-0fd7-a7fa-45a3cdb7b4b5/mzaf_10318965573334038481.plus.aac.p.m4a' },
      { id: 'the_3', title: 'Sculptures Of Anything Goes', artist: 'Arctic Monkeys', album: 'The Car', coverImage: '/The Car.jpg', duration: '3:59', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1c/9b/06/1c9b06eb-2ce3-f105-a26a-6bddf317b0ed/mzaf_9824645339113221765.plus.aac.p.m4a' },
      { id: 'the_4', title: 'Jet Skis On The Moat', artist: 'Arctic Monkeys', album: 'The Car', coverImage: '/The Car.jpg', duration: '3:18', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/46/de/4a/46de4a32-464e-1d42-056b-f9a83679b682/mzaf_14113706221212534892.plus.aac.p.m4a' },
      { id: 'the_5', title: 'Body Paint', artist: 'Arctic Monkeys', album: 'The Car', coverImage: '/The Car.jpg', duration: '4:51', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/28/36/e7/2836e7ce-8c3d-6c5c-9a55-ab60e1d699e0/mzaf_1022523138529544916.plus.aac.p.m4a' },
      { id: 'the_6', title: 'The Car', artist: 'Arctic Monkeys', album: 'The Car', coverImage: '/The Car.jpg', duration: '3:19', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/bf/f8/9c/bff89cdd-06fe-16a3-7ebc-c2ef362515b5/mzaf_8913641530715088259.plus.aac.p.m4a' },
      { id: 'the_7', title: 'Big Ideas', artist: 'Arctic Monkeys', album: 'The Car', coverImage: '/The Car.jpg', duration: '3:58', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/f3/b6/53/f3b653b6-96df-2533-b042-d2cfb7155a8c/mzaf_8511101372790422450.plus.aac.p.m4a' },
      { id: 'the_8', title: 'Hello You', artist: 'Arctic Monkeys', album: 'The Car', coverImage: '/The Car.jpg', duration: '4:05', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/45/16/78/45167869-087c-0eca-9d8e-860c3f4a1df8/mzaf_12407165466631045570.plus.aac.p.m4a' },
      { id: 'the_9', title: 'Mr Schwartz', artist: 'Arctic Monkeys', album: 'The Car', coverImage: '/The Car.jpg', duration: '3:30', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/32/d1/e3/32d1e397-1e96-8084-7c77-f236d5191b6c/mzaf_5464329901417096014.plus.aac.p.m4a' },
      { id: 'the_10', title: 'Perfect Sense', artist: 'Arctic Monkeys', album: 'The Car', coverImage: '/The Car.jpg', duration: '2:47', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/16/d8/c4/16d8c42f-3bb2-83c9-4c4c-7a1ed3341804/mzaf_7512458327621691609.plus.aac.p.m4a' }
    ]
  },
  live_at_the_royal_albert_hall: {
    id: 'live_at_the_royal_albert_hall',
    title: 'Live at the Royal Albert Hall',
    artist: 'Arctic Monkeys',
    releaseDate: 'December 4, 2020',
    coverImage: '/Live at the Royal Albert Hall.jpg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'liv_1', title: 'Four out of Five (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '5:32', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/72/0f/cf720fa4-6834-f18b-e5ff-9387b68becd8/mzaf_3801509571790055825.plus.aac.p.m4a' },
      { id: 'liv_2', title: 'Brianstorm (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '3:30', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4c/1e/e3/4c1ee34a-3b16-5877-4385-c8b0d9545d25/mzaf_2951379458797295783.plus.aac.p.m4a' },
      { id: 'liv_3', title: 'Crying Lightning (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '4:01', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ed/be/0e/edbe0ea7-346d-9ff2-3506-2558439a198a/mzaf_1885869119626470883.plus.aac.p.m4a' },
      { id: 'liv_4', title: 'Do I Wanna Know? (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '4:41', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d2/fd/e3/d2fde3e1-791e-ec85-18ff-bba6c1a3b33a/mzaf_8865074488639466479.plus.aac.p.m4a' },
      { id: 'liv_5', title: 'Why\'d You Only Call Me When You\'re High? (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/93/56/1f/93561f10-2fe1-c5e7-ae70-02fcdf98b671/mzaf_14080748142817680547.plus.aac.p.m4a' },
      { id: 'liv_6', title: '505 (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '4:36', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/88/e7/30/88e730e6-cd89-cb1e-1ffa-bde0c05ce008/mzaf_2811206503522968220.plus.aac.p.m4a' },
      { id: 'liv_7', title: 'One Point Perspective (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '3:23', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d0/3f/e8/d03fe8e6-c878-c92f-9838-59d218a2fb7d/mzaf_2865517990726913194.plus.aac.p.m4a' },
      { id: 'liv_9', title: 'Cornerstone (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '3:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c2/b1/db/c2b1db89-cf1d-bc4b-5dab-fdf6710943a9/mzaf_1235096686091474202.plus.aac.p.m4a' },
      { id: 'liv_10', title: 'Knee Socks (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '5:50', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/29/5d/88/295d8879-848e-35a3-7a69-2383362ef545/mzaf_6182255111518383714.plus.aac.p.m4a' },
      { id: 'liv_11', title: 'Arabella (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '4:07', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/09/bd/fd/09bdfd8e-6ea2-a3e8-be4c-bce36c250cd4/mzaf_15499370607443151654.plus.aac.p.m4a' },
      { id: 'liv_12', title: 'Tranquility Base Hotel & Casino (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '4:03', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/19/19/a6/1919a643-3c24-47f5-9e01-14937711c1aa/mzaf_11876375653742540530.plus.aac.p.m4a' },
      { id: 'liv_13', title: 'She Looks Like Fun (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '3:22', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/46/9b/9b/469b9b73-bad8-3314-fec6-506a49e2a5a3/mzaf_12073430559938189322.plus.aac.p.m4a' },
      { id: 'liv_14', title: 'From the Ritz to the Rubble (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '3:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/21/36/7e/21367e88-b818-987a-455f-f3826853e790/mzaf_17159968107025222501.plus.aac.p.m4a' },
      { id: 'liv_15', title: 'Pretty Visitors (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '4:01', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/06/29/2e/06292ede-da4f-1e48-2e3c-bf54c8b7fdd2/mzaf_9977310709710044330.plus.aac.p.m4a' },
      { id: 'liv_16', title: 'Don\'t Sit Down \'cause I\'ve Moved Your Chair (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/81/15/35/811535c5-158f-6529-94e6-3bb511d1968a/mzaf_12134730370741082329.plus.aac.p.m4a' },
      { id: 'liv_17', title: 'I Bet You Look Good on the Dancefloor (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '4:54', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/53/53/5b/53535bdf-fe45-8bcd-01ff-0ec190558523/mzaf_8087126529744121392.plus.aac.p.m4a' },
      { id: 'liv_18', title: 'Star Treatment (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '5:35', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/22/35/6b/22356baf-862c-0dc5-d750-a16bf29ea335/mzaf_18173538841996951698.plus.aac.p.m4a' },
      { id: 'liv_19', title: 'The View from the Afternoon (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '4:24', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9a/e4/28/9ae428d0-130b-4920-b510-174114f7ea33/mzaf_14924122804595929204.plus.aac.p.m4a' },
      { id: 'liv_20', title: 'R U Mine? (Live)', artist: 'Arctic Monkeys', album: 'Live at the Royal Albert Hall', coverImage: '/Live at the Royal Albert Hall.jpg', duration: '6:12', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fc/fd/27/fcfd2723-dc17-039b-cffa-17a41bca595a/mzaf_15495936821441564222.plus.aac.p.m4a' }
    ]
  },
  tranquility_base_hotel_casino: {
    id: 'tranquility_base_hotel_casino',
    title: 'Tranquility Base Hotel & Casino',
    artist: 'Arctic Monkeys',
    releaseDate: 'May 11, 2018',
    coverImage: '/Tranquility Base Hotel & Casino.jpg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'tra_1', title: 'Star Treatment', artist: 'Arctic Monkeys', album: 'Tranquility Base Hotel & Casino', coverImage: '/Tranquility Base Hotel & Casino.jpg', duration: '5:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1a/4b/b0/1a4bb0f1-1f24-4ed7-55b2-9e0f1f32cc7c/mzaf_7211194893973615243.plus.aac.p.m4a' },
      { id: 'tra_2', title: 'One Point Perspective', artist: 'Arctic Monkeys', album: 'Tranquility Base Hotel & Casino', coverImage: '/Tranquility Base Hotel & Casino.jpg', duration: '3:29', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8b/01/c1/8b01c1c7-addb-c178-c7e8-674a0a0b3e8d/mzaf_4864409493452608291.plus.aac.p.m4a' },
      { id: 'tra_3', title: 'American Sports', artist: 'Arctic Monkeys', album: 'Tranquility Base Hotel & Casino', coverImage: '/Tranquility Base Hotel & Casino.jpg', duration: '2:38', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/45/bb/d1/45bbd1c7-6299-5f9f-1dfe-9790217cc5cd/mzaf_815496728631807686.plus.aac.p.m4a' },
      { id: 'tra_5', title: 'Golden Trunks', artist: 'Arctic Monkeys', album: 'Tranquility Base Hotel & Casino', coverImage: '/Tranquility Base Hotel & Casino.jpg', duration: '2:54', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/40/e3/6a/40e36a1a-8c26-dac9-7a1e-e4a3ae185bce/mzaf_14159651418798813073.plus.aac.p.m4a' },
      { id: 'tra_6', title: 'Four out of Five', artist: 'Arctic Monkeys', album: 'Tranquility Base Hotel & Casino', coverImage: '/Tranquility Base Hotel & Casino.jpg', duration: '5:12', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fa/73/63/fa7363c0-4d6b-a41b-2cb7-6ecc4ed5c1d5/mzaf_7718326777126411788.plus.aac.p.m4a' },
      { id: 'tra_8', title: 'Science Fiction', artist: 'Arctic Monkeys', album: 'Tranquility Base Hotel & Casino', coverImage: '/Tranquility Base Hotel & Casino.jpg', duration: '3:06', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/35/2b/54/352b544c-1e73-5651-faa6-0bd325476f19/mzaf_10973869151681649376.plus.aac.p.m4a' },
      { id: 'tra_10', title: 'Batphone', artist: 'Arctic Monkeys', album: 'Tranquility Base Hotel & Casino', coverImage: '/Tranquility Base Hotel & Casino.jpg', duration: '4:32', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/84/9e/b6/849eb60d-ba52-7eca-b9e1-c69c4f9c0791/mzaf_14594732516650433244.plus.aac.p.m4a' },
      { id: 'tra_11', title: 'The Ultracheese', artist: 'Arctic Monkeys', album: 'Tranquility Base Hotel & Casino', coverImage: '/Tranquility Base Hotel & Casino.jpg', duration: '3:38', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1d/2e/74/1d2e7447-d8a3-8b7e-9cf2-a12a192abf36/mzaf_17164229232393066332.plus.aac.p.m4a' }
    ]
  },
  a_rush_of_blood_to_the_head: {
    id: 'a_rush_of_blood_to_the_head',
    title: 'A Rush of Blood to the Head',
    artist: 'Coldplay',
    releaseDate: 'August 26, 2002',
    coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'a_r_1', title: 'Politik', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a7/8e/72/a78e724a-219d-309e-d6bf-25697eeb9e74/mzaf_6520644222361864750.plus.aac.p.m4a' },
      { id: 'a_r_2', title: 'In My Place', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:32', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/7e/4a/64/7e4a6499-cc19-c959-52f4-85d8b112dea2/mzaf_83693645677956157.plus.aac.p.m4a' },
      { id: 'a_r_3', title: 'God Put a Smile Upon Your Face', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/02/86/42/028642c4-6916-cef6-4346-69d5a72fa0f0/mzaf_3636603560377706106.plus.aac.p.m4a' },
      { id: 'a_r_4', title: 'The Scientist', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ae/a6/27/aea62715-e6ae-9562-ba81-1f969a2ee2fa/mzaf_9054259057357054559.plus.aac.p.m4a' },
      { id: 'a_r_5', title: 'Clocks', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d2/9b/17/d29b173f-546a-606b-378f-8f3c333e81f1/mzaf_3952108508633208951.plus.aac.p.m4a' },
      { id: 'a_r_6', title: 'Daylight', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fd/ba/9c/fdba9c44-559c-4f55-3155-10bd73fd3d55/mzaf_7315405944222867734.plus.aac.p.m4a' },
      { id: 'a_r_7', title: 'Green Eyes', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:54', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8a/ec/6d/8aec6d06-b619-8ce4-2696-03f59254a139/mzaf_15939756984836122254.plus.aac.p.m4a' },
      { id: 'a_r_8', title: 'Warning Sign', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a6/91/05/a6910523-362d-ddba-4fc5-32c2e4782387/mzaf_14860630057469373437.plus.aac.p.m4a' },
      { id: 'a_r_9', title: 'A Whisper', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/96/9a/7c/969a7c20-61a2-2895-e69f-742bcf17f3e1/mzaf_14162056296061375381.plus.aac.p.m4a' },
      { id: 'a_r_10', title: 'A Rush of Blood to the Head', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/e5/02/cfe50285-9ffc-1a9d-9a0c-50298acec428/mzaf_954443433755685006.plus.aac.p.m4a' },
      { id: 'a_r_11', title: 'Amsterdam', artist: 'Coldplay', album: 'A Rush of Blood to the Head', coverImage: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg', duration: '4:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/07/04/09/07040935-1201-e88f-643b-a51e0a2c13b7/mzaf_13254265746167379550.plus.aac.p.m4a' }
    ]
  },
  a_head_full_of_dreams: {
    id: 'a_head_full_of_dreams',
    title: 'A Head Full of Dreams',
    artist: 'Coldplay',
    releaseDate: 'December 4, 2015',
    coverImage: '/parachutes/A rush.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'a_h_1', title: 'A Head Full of Dreams', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '3:16', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/37/05/13/370513c1-3bd5-c3f3-84ca-c545cd6b242a/mzaf_9571715642607529965.plus.aac.p.m4a' },
      { id: 'a_h_2', title: 'Birds', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '3:49', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a3/f6/ba/a3f6ba86-73f2-1834-b887-089b6a4b32ce/mzaf_17976784228667475898.plus.aac.p.m4a' },
      { id: 'a_h_3', title: 'Hymn for the Weekend', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '3:59', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0f/4c/17/0f4c17b5-4c32-a75b-2121-4f0585f65d8e/mzaf_16455841633683979502.plus.aac.p.m4a' },
      { id: 'a_h_4', title: 'Everglow', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '4:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/04/cb/99/04cb99bc-73fd-b7a6-51a9-28443109b6d3/mzaf_1623339256922498895.plus.aac.p.m4a' },
      { id: 'a_h_5', title: 'Adventure of a Lifetime', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '4:04', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/b9/78/7b/b9787b6d-2bcc-6fd7-231f-9e79b91d988e/mzaf_13866407877410073156.plus.aac.p.m4a' },
      { id: 'a_h_6', title: 'Fun (feat. Tove Lo)', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '4:28', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/52/81/6f/52816fb5-a2bb-d328-a18b-92312c9aa0c0/mzaf_12174983693092610114.plus.aac.p.m4a' },
      { id: 'a_h_7', title: 'Kaleidoscope', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '1:52', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0c/f3/f7/0cf3f7de-ec61-62ea-9eb4-e144808ba910/mzaf_8048867952279467504.plus.aac.p.m4a' },
      { id: 'a_h_8', title: 'Army of One', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '3:28', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/9a/39/b6/9a39b64d-2bea-d388-b052-776a5a7c573e/mzaf_16172863098718303723.plus.aac.p.m4a' },
      { id: 'a_h_9', title: 'Amazing Day', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '3:54', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/fd/4d/33/fd4d33ae-704d-ff5c-87bc-2b6952fc5981/mzaf_14878465526436872659.plus.aac.p.m4a' },
      { id: 'a_h_10', title: 'Colour Spectrum', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '1:00', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/bc/1b/39/bc1b39f1-61f2-0eee-31af-4ff2630d92e5/mzaf_11159238596718730480.plus.aac.p.m4a' },
      { id: 'a_h_11', title: 'Up&Up', artist: 'Coldplay', album: 'A Head Full of Dreams', coverImage: '/parachutes/A rush.jpeg', duration: '6:45', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/62/5c/6f/625c6f3b-51ac-7ed7-68dd-48c966139e5e/mzaf_8600193041406758040.plus.aac.p.m4a' }
    ]
  },
  ghost_stories: {
    id: 'ghost_stories',
    title: 'Ghost Stories',
    artist: 'Coldplay',
    releaseDate: 'May 19, 2014',
    coverImage: '/parachutes/gost.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'gho_1', title: 'Always In My Head', artist: 'Coldplay', album: 'Ghost Stories', coverImage: '/parachutes/gost.jpeg', duration: '3:37', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f5/34/5d/f5345d96-909d-c79e-03fb-28a49ad535ae/mzaf_11852457186130942648.plus.aac.p.m4a' },
      { id: 'gho_2', title: 'Magic', artist: 'Coldplay', album: 'Ghost Stories', coverImage: '/parachutes/gost.jpeg', duration: '4:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/23/e4/d5/23e4d5ef-f001-dee1-055d-276f9088f725/mzaf_9119785706370797971.plus.aac.p.m4a' },
      { id: 'gho_3', title: 'Ink', artist: 'Coldplay', album: 'Ghost Stories', coverImage: '/parachutes/gost.jpeg', duration: '4:45', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/3b/c0/8b/3bc08b7a-5cb8-59b1-8a85-25e08645079f/mzaf_8073530428818333168.plus.aac.p.m4a' },
      { id: 'gho_4', title: 'True Love', artist: 'Coldplay', album: 'Ghost Stories', coverImage: '/parachutes/gost.jpeg', duration: '4:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/49/0f/8f/490f8fe2-b99c-9400-d6c5-5f736cbfebea/mzaf_1505071865820946849.plus.aac.p.m4a' },
      { id: 'gho_5', title: 'Midnight', artist: 'Coldplay', album: 'Ghost Stories', coverImage: '/parachutes/gost.jpeg', duration: '4:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/29/e2/68/29e26874-ed3c-49f1-1fcc-cf7a3e5cde17/mzaf_14514475775303545273.plus.aac.p.m4a' },
      { id: 'gho_6', title: 'Another\'s Arms', artist: 'Coldplay', album: 'Ghost Stories', coverImage: '/parachutes/gost.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/4a/1c/f4/4a1cf49a-f935-e277-4322-877daed1a38d/mzaf_1483815456440542131.plus.aac.p.m4a' },
      { id: 'gho_7', title: 'Oceans', artist: 'Coldplay', album: 'Ghost Stories', coverImage: '/parachutes/gost.jpeg', duration: '4:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/6b/39/9e/6b399ec5-e05b-570a-8423-d83aa025d903/mzaf_15220406950873185945.plus.aac.p.m4a' },
      { id: 'gho_8', title: 'A Sky Full of Stars', artist: 'Coldplay', album: 'Ghost Stories', coverImage: '/parachutes/gost.jpeg', duration: '4:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a2/31/4b/a2314b97-10b6-190c-72b3-45cc21bbf56b/mzaf_740612971315603868.plus.aac.p.m4a' },
      { id: 'gho_9', title: 'O (Hidden Track)', artist: 'Coldplay', album: 'Ghost Stories', coverImage: '/parachutes/gost.jpeg', duration: '7:47', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ec/e9/39/ece93994-0ad7-38f5-e1fa-f87b96676c5d/mzaf_10466256602556752955.plus.aac.p.m4a' }
    ]
  },
  moon_music: {
    id: 'moon_music',
    title: 'Moon Music',
    artist: 'Coldplay',
    releaseDate: 'October 4, 2024',
    coverImage: '/parachutes/moon.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'moo_1', title: 'MOON MUSiC', artist: 'Coldplay & Jon Hopkins', album: 'Moon Music', coverImage: '/parachutes/moon.jpeg', duration: '4:36', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cd/2c/3d/cd2c3dec-51d8-e07b-4c9d-570725be95ab/mzaf_9142680361231051002.plus.aac.p.m4a' },
      { id: 'moo_2', title: 'feelslikeimfallinginlove', artist: 'Coldplay', album: 'Moon Music', coverImage: '/parachutes/moon.jpeg', duration: '3:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/52/81/9e/52819ebd-cf41-99f6-358f-7fa13133272c/mzaf_6135080692167989461.plus.aac.p.m4a' },
      { id: 'moo_3', title: 'WE PRAY', artist: 'Coldplay, Little Simz, Burna Boy, Elyanna & TINI', album: 'Moon Music', coverImage: '/parachutes/moon.jpeg', duration: '3:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f8/47/b7/f847b71d-63d9-8dd6-d547-c482a86bb7ba/mzaf_5768004375856692765.plus.aac.p.m4a' },
      { id: 'moo_4', title: 'JUPiTER', artist: 'Coldplay', album: 'Moon Music', coverImage: '/parachutes/moon.jpeg', duration: '4:01', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/be/9e/9b/be9e9b13-d2cc-2f74-5b34-3b96505abc84/mzaf_7682343340978927688.plus.aac.p.m4a' },
      { id: 'moo_5', title: 'GOOD FEELiNGS', artist: 'Coldplay & Ayra Starr', album: 'Moon Music', coverImage: '/parachutes/moon.jpeg', duration: '3:37', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8b/56/7c/8b567ce1-6180-7e30-f685-21a58c35033c/mzaf_18170047460039487968.plus.aac.p.m4a' },
      { id: 'moo_6', title: '🌈', artist: 'Coldplay', album: 'Moon Music', coverImage: '/parachutes/moon.jpeg', duration: '6:10', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/79/ae/80/79ae8035-d1fd-0d7a-d27c-f81e931d1d73/mzaf_1558824709098784101.plus.aac.p.m4a' },
      { id: 'moo_7', title: 'iAAM', artist: 'Coldplay', album: 'Moon Music', coverImage: '/parachutes/moon.jpeg', duration: '3:03', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8f/0c/17/8f0c1799-ca71-f144-5dff-19cb6cc7def7/mzaf_12769040486890236210.plus.aac.p.m4a' },
      { id: 'moo_8', title: 'AETERNA', artist: 'Coldplay', album: 'Moon Music', coverImage: '/parachutes/moon.jpeg', duration: '4:13', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ac/59/1c/ac591c49-8185-c337-0a1e-1f3010f19404/mzaf_13669730467555023429.plus.aac.p.m4a' },
      { id: 'moo_9', title: 'ALL MY LOVE', artist: 'Coldplay', album: 'Moon Music', coverImage: '/parachutes/moon.jpeg', duration: '3:43', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d2/7b/38/d27b3887-8233-7927-50ee-1e340cae6da3/mzaf_3449246519901782513.plus.aac.p.m4a' },
      { id: 'moo_10', title: 'ONE WORLD', artist: 'Coldplay', album: 'Moon Music', coverImage: '/parachutes/moon.jpeg', duration: '6:48', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/94/15/ff/9415ff15-0344-1a9d-584a-5b3931fdee10/mzaf_14470390706892475720.plus.aac.p.m4a' }
    ]
  },
  music_of_the_spheres: {
    id: 'music_of_the_spheres',
    title: 'Music Of The Spheres',
    artist: 'Coldplay',
    releaseDate: 'October 15, 2021',
    coverImage: '/parachutes/music of.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'mus_1', title: '⦵', artist: 'Coldplay', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '0:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bc/e3/6a/bce36a15-d2d3-3a53-f7be-f38ae3a5303f/mzaf_5074288519417413648.plus.aac.p.m4a' },
      { id: 'mus_2', title: 'Higher Power', artist: 'Coldplay', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '3:31', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/70/2b/db/702bdb04-43ea-bb30-4d0e-b341a314b051/mzaf_3860467338493177497.plus.aac.p.m4a' },
      { id: 'mus_3', title: 'Humankind', artist: 'Coldplay', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '4:27', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a8/bc/c7/a8bcc72f-f514-4c38-5e72-92ca830e84ad/mzaf_10410498282464957088.plus.aac.p.m4a' },
      { id: 'mus_4', title: '*✧', artist: 'Coldplay', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '0:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8a/88/46/8a88462b-5dfe-3eff-2914-63497829dec8/mzaf_13536744633012162898.plus.aac.p.m4a' },
      { id: 'mus_5', title: 'Let Somebody Go', artist: 'Coldplay X Selena Gomez', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '4:02', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5c/eb/28/5ceb28b5-5e07-62d5-c2fc-10e86bafebb6/mzaf_11588831374014573310.plus.aac.p.m4a' },
      { id: 'mus_6', title: '♡', artist: 'Coldplay X We Are KING X Jacob Collier', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '3:45', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d3/75/97/d3759792-8ddf-bc8b-9b2f-a49f3c878193/mzaf_12918486288544773988.plus.aac.p.m4a' },
      { id: 'mus_7', title: 'People of The Pride', artist: 'Coldplay', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '3:37', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c7/c5/9a/c7c59aac-1aff-a8c8-735f-c2c4151d4ecf/mzaf_4392816999533661834.plus.aac.p.m4a' },
      { id: 'mus_8', title: 'Biutyful', artist: 'Coldplay', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '3:12', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d3/b3/3d/d3b33d12-12e7-d701-f5f9-9eac0254940b/mzaf_17181023360946836004.plus.aac.p.m4a' },
      { id: 'mus_9', title: '❍', artist: 'Coldplay', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '0:21', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/43/55/f9/4355f962-eedf-fbc4-1aa3-b71a6850f37f/mzaf_14734047148708293373.plus.aac.p.m4a' },
      { id: 'mus_10', title: 'My Universe', artist: 'Coldplay X BTS', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '3:48', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ac/9a/20/ac9a20f7-0065-92f0-7fbe-c136bc5ddcf4/mzaf_10985566651421931051.plus.aac.p.m4a' },
      { id: 'mus_11', title: '∞', artist: 'Coldplay', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '3:46', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/65/8a/34/658a343d-9cc4-2d7d-b19b-eed46c47122a/mzaf_8013419094319892682.plus.aac.p.m4a' },
      { id: 'mus_12', title: 'Coloratura', artist: 'Coldplay', album: 'Music Of The Spheres', coverImage: '/parachutes/music of.jpeg', duration: '10:17', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4e/ea/a3/4eeaa327-5a9f-75c9-c3f0-c0b986a5fa5d/mzaf_5942202568429528868.plus.aac.p.m4a' }
    ]
  },
  everyday_life: {
    id: 'everyday_life',
    title: 'Everyday Life',
    artist: 'Coldplay',
    releaseDate: 'Unknown',
    coverImage: '/parachutes/everyday life.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
    ]
  },
  louder_than_bombs: {
    id: 'louder_than_bombs',
    title: 'Louder Than Bombs',
    artist: 'The Smiths',
    releaseDate: 'March 30, 1987',
    coverImage: '/Hatful of Hollow/louder.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'lou_1', title: 'Is It Really So Strange? (John Peel Session, 12/2/86)', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '3:07', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/da/41/ee/da41eea8-7a37-db81-2f26-5d423c6c91f8/mzaf_7069460965675779821.plus.aac.p.m4a' },
      { id: 'lou_2', title: 'Sheila Take a Bow', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '2:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/24/4e/57/244e57a7-10c6-a568-9d6a-24e82951ba48/mzaf_7594771367783792074.plus.aac.p.m4a' },
      { id: 'lou_3', title: 'Shoplifters of the World Unite', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '2:58', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e0/ad/7a/e0ad7a53-b323-5f8e-10d5-68bbb60963d3/mzaf_4545136031667287128.plus.aac.p.m4a' },
      { id: 'lou_4', title: 'Sweet and Tender Hooligan (John Peel Session, 12/2/86)', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '3:37', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8c/cc/0d/8ccc0d3d-73b9-312b-d99f-cb280ad22e47/mzaf_8221748182911232877.plus.aac.p.m4a' },
      { id: 'lou_5', title: 'Half a Person', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '3:37', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/f0/67/d9/f067d945-5a2f-eb17-3463-814aed56e9b7/mzaf_16483895849241819182.plus.aac.p.m4a' },
      { id: 'lou_6', title: 'London', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '2:07', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/6e/da/99/6eda999a-160c-37a0-6131-5dd86d8ccc09/mzaf_1276028082469604804.plus.aac.p.m4a' },
      { id: 'lou_7', title: 'Panic', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '2:21', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8d/32/01/8d320143-0b09-299d-edbe-97417daff8ee/mzaf_8752258587991530379.plus.aac.p.m4a' },
      { id: 'lou_8', title: 'Girl Afraid', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '2:46', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/03/ed/14/03ed148f-eba6-8eec-c50b-0fb192b2d28e/mzaf_7390606291156975481.plus.aac.p.m4a' },
      { id: 'lou_9', title: 'Shakespeare\'s Sister', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/2c/3a/fb/2c3afb36-94a3-bbf0-2fe5-84fa430ec4fe/mzaf_17601701350089198208.plus.aac.p.m4a' },
      { id: 'lou_10', title: 'William, It Was Really Nothing', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '2:11', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/18/0f/76/180f7605-eb33-ba9d-0d9c-15f1fafca8e3/mzaf_2107496892164362293.plus.aac.p.m4a' },
      { id: 'lou_11', title: 'You Just Haven\'t Earned It Yet, Baby (US Mix)', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/1e/9d/f7/1e9df7e1-96c7-4afd-7eed-1574b16d0da4/mzaf_3496367918552675682.plus.aac.p.m4a' },
      { id: 'lou_12', title: 'Heaven Knows I\'m Miserable Now', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/f4/ea/29/f4ea294a-c0b4-f85a-91c0-3bbf9f2c21fc/mzaf_15912052804759688752.plus.aac.p.m4a' },
      { id: 'lou_13', title: 'Ask (Remix)', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '3:16', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/68/ae/69/68ae69bf-44c3-3fa6-d5e8-8704c5fcb2f2/mzaf_611178821673257598.plus.aac.p.m4a' },
      { id: 'lou_14', title: 'Golden Lights', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '2:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/be/c4/64/bec464fa-3e98-4079-e2b5-51134f06d3d7/mzaf_5065099677433873012.plus.aac.p.m4a' },
      { id: 'lou_15', title: 'Oscillate Wildly', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '3:28', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/22/15/0a/22150a27-61f4-7f16-9741-511c21351bf3/mzaf_15538145954479492574.plus.aac.p.m4a' },
      { id: 'lou_16', title: 'These Things Take Time', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '2:24', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/ba/5b/16/ba5b16e6-0de2-99e5-68e7-2137cf724833/mzaf_12745773481457469545.plus.aac.p.m4a' },
      { id: 'lou_17', title: 'Rubber Ring', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '3:49', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/81/8a/51/818a51c4-269b-d52e-e618-5b29a35c6693/mzaf_6163323650341831132.plus.aac.p.m4a' },
      { id: 'lou_18', title: 'Back to the Old House', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '3:05', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/86/62/20/866220b0-7138-bcf3-ea0c-fd04008704ac/mzaf_12553643161494243762.plus.aac.p.m4a' },
      { id: 'lou_19', title: 'Hand In Glove (Single A-Side Mix)', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '3:17', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/fe/08/7b/fe087b84-827a-0beb-af6b-a603d34d523d/mzaf_4242300419406673785.plus.aac.p.m4a' },
      { id: 'lou_20', title: 'Stretch Out and Wait', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '2:40', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/31/09/8f/31098f24-277b-c6aa-d919-49195dbc267a/mzaf_13234963839842237922.plus.aac.p.m4a' },
      { id: 'lou_21', title: 'Please Please Please Let Me Get What I Want', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '1:52', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/39/b2/2a/39b22a7e-cf18-bbe3-a54f-d64ba82e5d6c/mzaf_13084066445925559787.plus.aac.p.m4a' },
      { id: 'lou_22', title: 'This Night Has Opened My Eyes', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '3:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/97/5d/39/975d39c2-1674-6aa5-2b6f-440fa70f3ee8/mzaf_1229360427276782545.plus.aac.p.m4a' },
      { id: 'lou_23', title: 'Unloveable (Single B-Side)', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '3:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/02/03/ce/0203ced4-defe-f003-b420-1899c7913e2d/mzaf_17498241244426192826.plus.aac.p.m4a' },
      { id: 'lou_24', title: 'Asleep', artist: 'The Smiths', album: 'Louder Than Bombs', coverImage: '/Hatful of Hollow/louder.jpeg', duration: '4:11', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c8/25/ce/c825cea3-2954-e11f-2d71-38039f92fb80/mzaf_3844932511146056928.plus.aac.p.m4a' }
    ]
  },
  the_smiths: {
    id: 'the_smiths',
    title: 'The Smiths',
    artist: 'The Smiths',
    releaseDate: 'February 20, 1984',
    coverImage: '/Hatful of Hollow/the smiths.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'the_1', title: 'Reel Around the Fountain', artist: 'The Smiths', album: 'The Smiths', coverImage: '/Hatful of Hollow/the smiths.jpeg', duration: '5:57', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/76/48/d5/7648d515-3e3e-6663-f651-9a79c6172cce/mzaf_1563752395377090290.plus.aac.p.m4a' },
      { id: 'the_2', title: 'This Charming Man', artist: 'The Smiths', album: 'The Smiths', coverImage: '/Hatful of Hollow/the smiths.jpeg', duration: '2:43', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a0/57/b8/a057b8f7-63b6-38bb-2738-149427014fd6/mzaf_4159989033145105507.plus.aac.p.m4a' },
      { id: 'the_4', title: 'Pretty Girls Make Graves', artist: 'The Smiths', album: 'The Smiths', coverImage: '/Hatful of Hollow/the smiths.jpeg', duration: '3:43', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/9f/52/55/9f5255c5-a9be-7034-2a3e-9efcc69c4b0d/mzaf_3288946445120994474.plus.aac.p.m4a' },
      { id: 'the_5', title: 'Heaven Knows I\'m Miserable Now', artist: 'The Smiths', album: 'The Smiths', coverImage: '/Hatful of Hollow/the smiths.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/21/f9/0f/21f90f7d-c780-e57f-aa84-e0c694a5c21c/mzaf_3607787143775365629.plus.aac.p.m4a' },
      { id: 'the_6', title: 'This Charming Man', artist: 'The Smiths', album: 'The Smiths', coverImage: '/Hatful of Hollow/the smiths.jpeg', duration: '2:43', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/80/b0/2b/80b02b47-dd50-02f0-8dbd-700f117f4c47/mzaf_6865508113176690808.plus.aac.p.m4a' },
      { id: 'the_7', title: 'Still Ill', artist: 'The Smiths', album: 'The Smiths', coverImage: '/Hatful of Hollow/the smiths.jpeg', duration: '3:21', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4b/0b/9d/4b0b9dea-f5e9-87e2-1fa8-494782265608/mzaf_12302704237818093906.plus.aac.p.m4a' },
      { id: 'the_9', title: 'What Difference Does It Make?', artist: 'The Smiths', album: 'The Smiths', coverImage: '/Hatful of Hollow/the smiths.jpeg', duration: '3:50', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/61/2e/d2/612ed2cc-bb1a-8dda-5e48-51a48b7ddd2e/mzaf_14230201236061891318.plus.aac.p.m4a' },
      { id: 'the_10', title: 'I Don\'t Owe You Anything', artist: 'The Smiths', album: 'The Smiths', coverImage: '/Hatful of Hollow/the smiths.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/ba/f9/bf/baf9bf82-39d1-2c9f-96b0-cc44cfaf5569/mzaf_17524755581588479317.plus.aac.p.m4a' }
    ]
  },
  rank: {
    id: 'rank',
    title: 'Rank',
    artist: 'The Smiths',
    releaseDate: 'Unknown',
    coverImage: '/Hatful of Hollow/rank.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
    ]
  },
  strangeways_here_we_come: {
    id: 'strangeways_here_we_come',
    title: 'Strangeways, Here We Come',
    artist: 'The Smiths',
    releaseDate: 'September 28, 1987',
    coverImage: '/Hatful of Hollow/strayway.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'str_1', title: 'A Rush and a Push and the Land Is Ours', artist: 'The Smiths', album: 'Strangeways, Here We Come', coverImage: '/Hatful of Hollow/strayway.jpeg', duration: '3:01', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/36/ce/c1/36cec156-0178-87c7-c9bb-e9e72efa979c/mzaf_3541214610327753406.plus.aac.p.m4a' },
      { id: 'str_2', title: 'I Started Something I Couldn\'t Finish', artist: 'The Smiths', album: 'Strangeways, Here We Come', coverImage: '/Hatful of Hollow/strayway.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/74/41/3b/74413bfd-b678-ce77-c099-2b2cc63caeb7/mzaf_5559777538409596954.plus.aac.p.m4a' },
      { id: 'str_3', title: 'Death of a Disco Dancer', artist: 'The Smiths', album: 'Strangeways, Here We Come', coverImage: '/Hatful of Hollow/strayway.jpeg', duration: '5:26', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/40/ff/12/40ff1237-4aa4-776e-df1c-d3657c83c8fb/mzaf_980794807259166078.plus.aac.p.m4a' },
      { id: 'str_4', title: 'Girlfriend In a Coma', artist: 'The Smiths', album: 'Strangeways, Here We Come', coverImage: '/Hatful of Hollow/strayway.jpeg', duration: '2:03', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f3/a8/f3/f3a8f3b6-8423-87ce-0253-de140f300b53/mzaf_16750427665456868124.plus.aac.p.m4a' },
      { id: 'str_5', title: 'Stop Me If You Think You\'ve Heard This One Before', artist: 'The Smiths', album: 'Strangeways, Here We Come', coverImage: '/Hatful of Hollow/strayway.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0e/24/81/0e2481c0-b314-8e4f-6454-eaf2805fe7a8/mzaf_7936155950283719399.plus.aac.p.m4a' },
      { id: 'str_6', title: 'Last Night I Dreamt That Somebody Loved Me', artist: 'The Smiths', album: 'Strangeways, Here We Come', coverImage: '/Hatful of Hollow/strayway.jpeg', duration: '5:06', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e8/fb/35/e8fb35fe-61f1-ca21-3f7f-79f2d93fdec5/mzaf_9863357976529147189.plus.aac.p.m4a' },
      { id: 'str_7', title: 'Unhappy Birthday', artist: 'The Smiths', album: 'Strangeways, Here We Come', coverImage: '/Hatful of Hollow/strayway.jpeg', duration: '2:45', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/2c/35/e5/2c35e530-50bf-afaf-6bdf-2e14f863de49/mzaf_16439274266907555668.plus.aac.p.m4a' },
      { id: 'str_8', title: 'Paint a Vulgar Picture', artist: 'The Smiths', album: 'Strangeways, Here We Come', coverImage: '/Hatful of Hollow/strayway.jpeg', duration: '5:35', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2f/fb/24/2ffb24f1-cad3-cd1a-a991-8f60ed054885/mzaf_747117831607403833.plus.aac.p.m4a' },
      { id: 'str_9', title: 'Death at One\'s Elbow', artist: 'The Smiths', album: 'Strangeways, Here We Come', coverImage: '/Hatful of Hollow/strayway.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/21/f7/d8/21f7d83e-c431-3c47-3c62-f23941dc6b7b/mzaf_5051595827246448117.plus.aac.p.m4a' },
      { id: 'str_10', title: 'I Won\'t Share You', artist: 'The Smiths', album: 'Strangeways, Here We Come', coverImage: '/Hatful of Hollow/strayway.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/58/f9/7e/58f97ea4-2f9a-d4bb-06b1-4462d80d60eb/mzaf_606032361416535959.plus.aac.p.m4a' }
    ]
  },
  the_queen_is_dead_deluxe: {
    id: 'the_queen_is_dead_deluxe',
    title: 'The Queen Is Dead (Deluxe)',
    artist: 'The Smiths',
    releaseDate: 'Unknown',
    coverImage: '/Hatful of Hollow/the queen.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
    ]
  },
  i_know_it: {
    id: 'i_know_it',
    title: 'I Know It',
    artist: 'The Smiths',
    releaseDate: 'Unknown',
    coverImage: '/Hatful of Hollow/the queen.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
    ]
  },
  rubber_ring: {
    id: 'rubber_ring',
    title: 'Rubber Ring',
    artist: 'The Smiths',
    releaseDate: 'Unknown',
    coverImage: '/Hatful of Hollow/the queen.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
    ]
  },
  in_utero: {
    id: 'in_utero',
    title: 'In Utero',
    artist: 'Nirvana',
    releaseDate: 'September 21, 1993',
    coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'in__1', title: 'Serve the Servants', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:37', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fd/02/c1/fd02c1b1-0569-1b2a-f022-5a618fdf99c6/mzaf_17297726495644404406.plus.aac.p.m4a' },
      { id: 'in__2', title: 'Scentless Apprentice', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:48', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/fc/55/3a/fc553a8d-1fbe-8419-512a-1f8a761a18e4/mzaf_3020406388538517003.plus.aac.p.m4a' },
      { id: 'in__3', title: 'Heart-Shaped Box', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '4:41', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c2/e6/8c/c2e68c1c-f722-e98d-1f0e-64ccc75ee60b/mzaf_6980430959019315343.plus.aac.p.m4a' },
      { id: 'in__4', title: 'Rape Me', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:50', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6f/0d/43/6f0d439f-494e-d6a6-c05a-573b57baeaa8/mzaf_8485864812719065621.plus.aac.p.m4a' },
      { id: 'in__5', title: 'Frances Farmer Will Have Her Revenge On Seattle', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '4:10', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/03/ba/48/03ba487f-2c7b-3182-f192-3f589af606e6/mzaf_7767932884085370680.plus.aac.p.m4a' },
      { id: 'in__6', title: 'Dumb', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:32', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3f/9e/dc/3f9edcf0-85bd-4f77-f76b-fd8dddf54833/mzaf_15265546566067665047.plus.aac.p.m4a' },
      { id: 'in__7', title: 'Very Ape', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '1:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/60/dc/fc/60dcfcb6-e5cf-10b1-ecf9-045d7f31b88f/mzaf_9773748681295858453.plus.aac.p.m4a' },
      { id: 'in__8', title: 'Milk It', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e7/a0/b7/e7a0b765-26c1-a807-36cc-99e786661d3f/mzaf_18314232991509860851.plus.aac.p.m4a' },
      { id: 'in__9', title: 'Pennyroyal Tea', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:39', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/21/a4/53/21a453e6-1654-b428-f6b2-3575c561a878/mzaf_4024671077104281997.plus.aac.p.m4a' },
      { id: 'in__10', title: 'Radio Friendly Unit Shifter', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '4:52', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/85/a5/f0/85a5f02a-21da-b32b-5c21-682a430a02e9/mzaf_9565910278203255722.plus.aac.p.m4a' },
      { id: 'in__11', title: 'Tourette\'s', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/38/ed/14/38ed1411-3e1d-1b11-8b9d-4d7ff77ccc20/mzaf_13326197527429959384.plus.aac.p.m4a' },
      { id: 'in__12', title: 'All Apologies', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a4/40/3a/a4403a55-f448-99b0-b113-c202d245b429/mzaf_12282190075798883236.plus.aac.p.m4a' },
      { id: 'in__14', title: 'Marigold (B-Side)', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:34', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/25/51/5d/25515d04-9e64-7e75-b225-9935aa2991ce/mzaf_6837730580323955689.plus.aac.p.m4a' },
      { id: 'in__15', title: 'Moist Vagina (2013 Mix)', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:33', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5a/94/99/5a949974-f007-2a06-4353-90ee4c3af6bc/mzaf_16066982093417157939.plus.aac.p.m4a' },
      { id: 'in__16', title: 'Sappy (2013 Mix)', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:26', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/da/3e/8f/da3e8ffe-93aa-394d-ebe3-0175dc995603/mzaf_11804803889513406317.plus.aac.p.m4a' },
      { id: 'in__17', title: 'I Hate Myself And Want To Die (2023 Remaster)', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:49', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/2a/03/bc/2a03bcd3-50e0-3867-2d50-730077af9122/mzaf_1644807079050036113.plus.aac.p.m4a' },
      { id: 'in__19', title: 'Heart-Shaped Box (Steve Albini 1993 Mix)', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '4:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/aa/3a/c6/aa3ac616-f504-7a1e-77e1-cb76352aec50/mzaf_582974725951092740.plus.aac.p.m4a' },
      { id: 'in__20', title: 'All Apologies (Steve Albini 1993 Mix)', artist: 'Nirvana', album: 'In Utero', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/31/d0/6f/31d06f95-3442-5e1d-e824-6b3b21510859/mzaf_4683612950524902544.plus.aac.p.m4a' }
    ]
  },
  mtv_unplugged: {
    id: 'mtv_unplugged',
    title: 'MTV Unplugged',
    artist: 'Nirvana',
    releaseDate: 'November 1, 1994',
    coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'mtv_1', title: 'About a Girl (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '3:38', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f6/6a/b6/f66ab64b-28d0-fddd-f47c-5eb253842775/mzaf_10640201943789237498.plus.aac.p.m4a' },
      { id: 'mtv_2', title: 'Come As You Are (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '4:14', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/03/35/cd/0335cd4c-b2cc-4ca3-1318-2ed89af56871/mzaf_1734682192103151102.plus.aac.p.m4a' },
      { id: 'mtv_3', title: 'Jesus Doesn\'t Want Me for a Sunbeam (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/71/d9/53/71d953c7-a83d-8ec3-8ebd-9677f9fc9545/mzaf_771057969374103816.plus.aac.p.m4a' },
      { id: 'mtv_4', title: 'The Man Who Sold the World (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '4:21', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e5/27/7a/e5277ad5-2777-e074-04c8-9ebc8d61297c/mzaf_1834049229068555483.plus.aac.p.m4a' },
      { id: 'mtv_5', title: 'Pennyroyal Tea (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '3:39', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/45/97/15/4597154d-aa1e-5980-51a9-06aa80d325ba/mzaf_17765227852724117697.plus.aac.p.m4a' },
      { id: 'mtv_6', title: 'Dumb (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '2:55', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/37/49/88/3749884d-4414-e312-57f3-2f80e824831e/mzaf_16721923873518535065.plus.aac.p.m4a' },
      { id: 'mtv_7', title: 'Polly (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '3:16', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c2/c9/de/c2c9deb0-39ad-8b57-b663-f1d7e8a016b0/mzaf_8298176782520694191.plus.aac.p.m4a' },
      { id: 'mtv_8', title: 'On a Plain (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '3:45', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/af/ab/33/afab33fb-085b-d884-436c-283309a37465/mzaf_6854005543176126415.plus.aac.p.m4a' },
      { id: 'mtv_9', title: 'Something In the Way (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '4:02', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9f/9c/92/9f9c92db-6842-fd60-db2d-a207335a3c7c/mzaf_4598272432598101571.plus.aac.p.m4a' },
      { id: 'mtv_10', title: 'Plateau (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '3:38', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e2/bb/e0/e2bbe0bb-3e29-981e-a56d-59ca20822071/mzaf_15628287966584861323.plus.aac.p.m4a' },
      { id: 'mtv_11', title: 'Oh, Me (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '3:26', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/52/bd/44/52bd4426-a23e-91cd-c2bf-10974d961a50/mzaf_9379474032184366392.plus.aac.p.m4a' },
      { id: 'mtv_12', title: 'Lake of Fire (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '2:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/da/98/12/da981207-76fb-8ced-6ec3-dca2eb308524/mzaf_8222845030155476412.plus.aac.p.m4a' },
      { id: 'mtv_13', title: 'All Apologies (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '4:23', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8d/ca/dc/8dcadc08-19e3-cf9f-aa62-d4b84373a775/mzaf_17820897525877506395.plus.aac.p.m4a' },
      { id: 'mtv_14', title: 'Where Did You Sleep Last Night (Live Acoustic)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '5:07', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/24/ab/c4/24abc43a-ec5e-a149-df97-210989a8fc7f/mzaf_17516118546009764028.plus.aac.p.m4a' },
      { id: 'mtv_15', title: 'Come As You Are (Rehearsal)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '4:46', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/8c/e2/15/8ce2156b-5fe5-0316-2152-f7541a5c15db/mzaf_8285181012155462998.plus.aac.p.m4a' },
      { id: 'mtv_16', title: 'Polly (Rehearsal)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '4:04', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/01/dd/9e/01dd9e3c-76f5-64dd-b309-591183abcbb1/mzaf_13174912945683240145.plus.aac.p.m4a' },
      { id: 'mtv_17', title: 'Plateau (Rehearsal)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '4:41', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c0/33/ea/c033ea5b-1779-7376-b491-fb8bcc5a715a/mzaf_11751067612556802093.plus.aac.p.m4a' },
      { id: 'mtv_18', title: 'Pennyroyal Tea (Rehearsal)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '4:30', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7a/a5/83/7aa58341-9d91-fcc2-6410-ab21ea898299/mzaf_4746740961169291557.plus.aac.p.m4a' },
      { id: 'mtv_19', title: 'The Man Who Sold the World (Rehearsal)', artist: 'Nirvana', album: 'MTV Unplugged', coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', duration: '4:40', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/69/21/0f/69210f11-e395-091d-b845-e346451aea31/mzaf_1494900612050244974.plus.aac.p.m4a' }
    ]
  },
  bleach: {
    id: 'bleach',
    title: 'Bleach',
    artist: 'Nirvana',
    releaseDate: 'June 15, 1989',
    coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'ble_1', title: 'Blew', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:54', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/1c/5a/d3/1c5ad383-4f71-c159-1e5d-113e2a342004/mzaf_6181111561960142439.plus.aac.p.m4a' },
      { id: 'ble_2', title: 'Floyd the Barber', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:18', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/59/91/88/59918805-b843-2b51-cfeb-fe595f930636/mzaf_11220123258126187487.plus.aac.p.m4a' },
      { id: 'ble_3', title: 'About a Girl', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:48', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/26/17/c9/2617c9fa-a83d-dd66-e1d2-5a56ec998b55/mzaf_13350941850004137640.plus.aac.p.m4a' },
      { id: 'ble_4', title: 'School', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/e1/fe/ce/e1fece59-406b-65f9-a684-98ed072ea719/mzaf_2131897399553548530.plus.aac.p.m4a' },
      { id: 'ble_5', title: 'Love Buzz', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:35', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/ba/f6/a7baf64f-1897-6eea-26e8-ddcd51cb9519/mzaf_9097637760565655331.plus.aac.p.m4a' },
      { id: 'ble_6', title: 'Paper Cuts', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '4:06', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/61/8c/08/618c0825-4d48-4dde-a8c7-cbb9c934b43a/mzaf_9535993852684145187.plus.aac.p.m4a' },
      { id: 'ble_7', title: 'Negative Creep', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e8/f3/61/e8f36163-a715-5cc8-4f8f-84e8784d7d3d/mzaf_4687107037342030810.plus.aac.p.m4a' },
      { id: 'ble_8', title: 'Scoff', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '4:10', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/95/e4/8c/95e48ca5-03b9-ea87-8ed1-f8e3915e0d08/mzaf_791920639154812212.plus.aac.p.m4a' },
      { id: 'ble_9', title: 'Swap Meet', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:03', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b3/fd/fd/b3fdfdaa-babe-ebde-d761-48f09fc588bf/mzaf_11544389185585726053.plus.aac.p.m4a' },
      { id: 'ble_10', title: 'Mr. Moustache', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:24', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/81/31/3e/81313e68-9df5-d579-ed91-33e0265c89c0/mzaf_16498288249329245012.plus.aac.p.m4a' },
      { id: 'ble_11', title: 'Sifting', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '5:23', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/23/f0/78/23f07854-9106-319c-9e0d-da2e7e08198f/mzaf_5446238949122774604.plus.aac.p.m4a' },
      { id: 'ble_12', title: 'Big Cheese', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5f/be/06/5fbe0648-ff32-c8e0-3b04-f6aafd27c9ef/mzaf_11820221808713048681.plus.aac.p.m4a' },
      { id: 'ble_13', title: 'Downer', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '1:44', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/13/e3/87/13e38700-a7de-7d61-1edd-dca9669fb17b/mzaf_18087887139846092809.plus.aac.p.m4a' },
      { id: 'ble_14', title: 'Intro (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '0:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/1b/df/c7/1bdfc752-8cd8-3c11-0fed-270bb6869d47/mzaf_5120873337030642996.plus.aac.p.m4a' },
      { id: 'ble_15', title: 'School (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:36', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/86/a5/8c/86a58c27-70a4-adc1-90bd-d4e10fca552b/mzaf_11068091915352543144.plus.aac.p.m4a' },
      { id: 'ble_16', title: 'Floyd the Barber (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:17', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/54/7a/e4/547ae46c-3ee8-b34b-302e-deae44df9634/mzaf_13064689621845877497.plus.aac.p.m4a' },
      { id: 'ble_17', title: 'Dive (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:42', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/29/45/00/29450077-30c0-8480-73dd-630e882a9081/mzaf_6563032231383456533.plus.aac.p.m4a' },
      { id: 'ble_18', title: 'Love Buzz (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:58', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/93/6c/4e/936c4e8e-8421-0d19-7f4b-404d7ea49470/mzaf_1032660869223498448.plus.aac.p.m4a' },
      { id: 'ble_19', title: 'Spank Thru (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:59', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/47/2e/60/472e6009-5da4-5310-1f78-574cb1d9680d/mzaf_14604937282206307441.plus.aac.p.m4a' },
      { id: 'ble_20', title: 'Molly\'s Lips (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d8/d4/ee/d8d4ee9c-e50a-e883-42b1-6d6e79e806ef/mzaf_2488328016362428725.plus.aac.p.m4a' },
      { id: 'ble_21', title: 'Sappy (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:19', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c9/91/71/c9917142-52b0-6922-0e08-3c45963daafd/mzaf_6301045537297310196.plus.aac.p.m4a' },
      { id: 'ble_22', title: 'Scoff (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '3:53', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5d/c6/b0/5dc6b0dc-3716-8a50-1eb5-4f153b0356b6/mzaf_7772758316210912501.plus.aac.p.m4a' },
      { id: 'ble_23', title: 'About a Girl (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:28', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/06/d8/7a/06d87a8a-968b-33fc-124d-7f1d814fe966/mzaf_8135967635213828334.plus.aac.p.m4a' },
      { id: 'ble_24', title: 'Been a Son (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '2:01', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/48/af/26/48af2651-5630-cd7f-f3e2-e4d6c2997379/mzaf_885403928069110392.plus.aac.p.m4a' },
      { id: 'ble_25', title: 'Blew (Live at Pine Street Theatre)', artist: 'Nirvana', album: 'Bleach', coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', duration: '4:30', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/89/95/02/89950242-3cb5-ebbe-8e32-6927efd134e2/mzaf_13745109003443843837.plus.aac.p.m4a' }
    ]
  },
  live_at_the_paramount: {
    id: 'live_at_the_paramount',
    title: 'Live At The Paramount',
    artist: 'Nirvana',
    releaseDate: 'September 24, 2011',
    coverImage: '/nirvana-nevermind-1991/nevermind.jpeg',
    bgColor: '#111111',
    accentColor: '#555555',
    songs: [
      { id: 'liv_1', title: 'Jesus Doesn\'t Want Me for a Sunbeam (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/70/cc/7d/70cc7d59-fd00-652c-ab19-a28db33c40e1/mzaf_3851940651856728398.plus.aac.p.m4a' },
      { id: 'liv_2', title: 'Aneurysm (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '4:50', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/49/9e/67/499e67c8-1c80-25d3-640c-d12f3583e332/mzaf_2668409945774449174.plus.aac.p.m4a' },
      { id: 'liv_3', title: 'Drain You (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '3:47', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a6/14/e2/a614e217-3bc6-ada3-8a00-40a2d0152890/mzaf_14469106479942789472.plus.aac.p.m4a' },
      { id: 'liv_4', title: 'School (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '2:52', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d1/9b/55/d19b552a-4d27-d6ec-cdba-b1421d9e4721/mzaf_6761157102386075819.plus.aac.p.m4a' },
      { id: 'liv_5', title: 'Floyd the Barber (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '2:27', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/39/1f/7c/391f7c43-ffcb-8b2d-4083-b5d7c66109f0/mzaf_9913284390085391596.plus.aac.p.m4a' },
      { id: 'liv_6', title: 'Smells Like Teen Spirit (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '4:46', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e6/52/69/e65269e4-ab9f-ae41-ceff-2d9deff16fa9/mzaf_8911542456174399901.plus.aac.p.m4a' },
      { id: 'liv_7', title: 'About a Girl (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '3:13', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/36/06/af/3606afa3-5804-667d-ed47-3114cd556be2/mzaf_8548941070503401915.plus.aac.p.m4a' },
      { id: 'liv_8', title: 'Polly (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '3:04', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/83/37/f4/8337f4e7-8854-d10d-6c1d-25a33c6fde46/mzaf_15639937657459352179.plus.aac.p.m4a' },
      { id: 'liv_9', title: 'Breed (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '3:11', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/24/87/41/248741a1-95cf-927f-e83f-3a5472304b95/mzaf_5252181502252591947.plus.aac.p.m4a' },
      { id: 'liv_10', title: 'Sliver (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '2:11', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/22/cf/a4/22cfa452-dd1c-093a-47a0-3d4ec7877c3f/mzaf_11752422464022788357.plus.aac.p.m4a' },
      { id: 'liv_11', title: 'Love Buzz (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '3:34', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/c2/cf/a7c2cf71-3a92-dbae-2cf0-bf04aa29f5f2/mzaf_3265475907318615889.plus.aac.p.m4a' },
      { id: 'liv_12', title: 'Lithium (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '4:38', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2e/82/c8/2e82c898-2c0e-b53a-61b6-b89d598e4938/mzaf_17754081912980806630.plus.aac.p.m4a' },
      { id: 'liv_13', title: 'Been a Son (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '2:16', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/04/cc/9f/04cc9fa0-d53d-dd28-5c2b-65f46d2d083a/mzaf_2836183959465310496.plus.aac.p.m4a' },
      { id: 'liv_14', title: 'Negative Creep (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '2:44', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7c/da/36/7cda36c7-8349-7ae3-438c-8b9322120123/mzaf_12433040671138067834.plus.aac.p.m4a' },
      { id: 'liv_15', title: 'On a Plain (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '3:04', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/11/f2/d4/11f2d4a6-8f1f-434d-20e0-be5b0f6ea3bc/mzaf_5363539857411469330.plus.aac.p.m4a' },
      { id: 'liv_16', title: 'Blew (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '4:09', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/6b/b7/e7/6bb7e744-fdcb-1a39-527b-d5960d4f502b/mzaf_13098435662807352803.plus.aac.p.m4a' },
      { id: 'liv_17', title: 'Rape Me (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '2:60', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d0/fe/8c/d0fe8c2a-e397-3580-f102-9d65d20cdcc0/mzaf_2207760171534499370.plus.aac.p.m4a' },
      { id: 'liv_18', title: 'Territorial Pissings (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '2:56', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6b/23/01/6b230117-2b3a-1da5-9138-9c3e0727c46c/mzaf_11987660807484610460.plus.aac.p.m4a' },
      { id: 'liv_19', title: 'Endless, Nameless (Live at The Paramount, 1991)', artist: 'Nirvana', album: 'Live At The Paramount', coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', duration: '6:25', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/6d/34/22/6d3422e3-c962-e921-0280-9c580e90a332/mzaf_180064687450101200.plus.aac.p.m4a' }
    ]
  },

  ok_computer: {
    id: 'ok_computer',
    title: 'OK Computer',
    artist: 'Radiohead',
    releaseDate: 'June 16, 1997',
    coverImage: '/OK_Computer.jpg',
    bgColor: '#1a3644',
    accentColor: '#DC2626',
    description: 'OK Computer is the third studio album by English rock band Radiohead, released on 16 June 1997 on Parlophone and Capitol Records.',
    songs: [
      { id: 'ok_1', title: 'Airbag', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '4:44', audioSrc: '/audio/01 Airbag.mp3' },
      { id: 'ok_2', title: 'Paranoid Android', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '6:23', audioSrc: '/audio/02 Paranoid Android.mp3' },
      { id: 'ok_3', title: 'Subterranean Homesick Alien', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '4:27', audioSrc: '/audio/03 Subterranean Homesick Alien.mp3' },
      { id: 'ok_4', title: 'Exit Music (For a Film)', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '4:24', audioSrc: '/audio/04 Exit Music (For a Film).mp3' },
      { id: 'ok_5', title: 'Let Down', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '4:59', audioSrc: '/audio/05 Let Down.mp3' },
      { id: 'ok_6', title: 'Karma Police', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '4:21', audioSrc: '/audio/06 Karma Police.mp3' },
      { id: 'ok_7', title: 'Fitter Happier', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '1:57', audioSrc: '/audio/07 Fitter Happier.mp3' },
      { id: 'ok_8', title: 'Electioneering', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '3:50', audioSrc: '/audio/08 Electioneering.mp3' },
      { id: 'ok_9', title: 'Climbing Up the Walls', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '4:45', audioSrc: '/audio/09 Climbing Up the Walls.mp3' },
      { id: 'ok_10', title: 'No Surprises', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '3:48', audioSrc: '/audio/10 No Surprises.mp3' },
      { id: 'ok_11', title: 'Lucky', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '4:19', audioSrc: '/audio/11 Lucky.mp3' },
      { id: 'ok_12', title: 'The Tourist', artist: 'Radiohead', album: 'OK Computer', coverImage: '/OK_Computer.jpg', duration: '5:24', audioSrc: '/audio/12 The Tourist.mp3' }
    ]
  },
  the_queen_is_dead: {
    id: 'the_queen_is_dead',
    title: 'The Queen Is Dead',
    artist: 'The Smiths',
    releaseDate: 'June 16, 1986',
    coverImage: '/Smiths.webp',
    bgColor: '#172e1e',
    accentColor: '#3a7f6f',
    description: 'The Queen Is Dead is the third studio album by English rock band the Smiths. It was released on 16 June 1986.',
    songs: [
      { id: 'tqid_1', title: 'The Queen Is Dead', artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/Smiths.webp', duration: '5:35', audioSrc: '/audio/301 The Queen Is Dead [2011 Remastered Version].mp3' },
      { id: 'tqid_2', title: 'Frankly, Mr. Shankly', artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/Smiths.webp', duration: '2:18', audioSrc: '/audio/302 Frankly, Mr. Shankly [2011 Remastered Version].mp3' },
      { id: 'tqid_3', title: "I Know It's Over", artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/Smiths.webp', audioSrc: '/audio/303 I Know Its Over [2011 Remastered Version].mp3' },
      { id: 'tqid_4', title: 'Never Had No One Ever', artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/Smiths.webp', duration: '3:37', audioSrc: '/audio/304 Never Had No One Ever [2011 Remastered Version].mp3' },
      { id: 'tqid_5', title: 'Cemetry Gates', artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/Smiths.webp', duration: '2:38', audioSrc: '/audio/305 Cemetery Gates [2011 Remastered Version].mp3' },
      { id: 'tqid_6', title: 'Bigmouth Strikes Again', artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/Smiths.webp', duration: '3:13', audioSrc: '/audio/306 Bigmouth Strikes Again [2011 Remastered Version].mp3' },
      { id: 'tqid_7', title: 'The Boy with the Thorn in His Side', artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/Smiths.webp', duration: '3:16', audioSrc: '/audio/307 The Boy With The Thorn In His Side [2011 Remastered Version].mp3' },
      { id: 'tqid_8', title: 'Vicar in a Tutu', artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/Smiths.webp', duration: '2:22', audioSrc: '/audio/308 Vicar In A Tutu [2011 Remastered Version].mp3' },
      { id: 'tqid_9', title: 'There Is a Light That Never Goes Out', artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/Smiths.webp', duration: '4:04', audioSrc: '/audio/309 There Is A Light That Never Goes Out [2011 Remastered Version].mp3' },
      { id: 'tqid_10', title: 'Some Girls Are Bigger Than Others', artist: 'The Smiths', album: 'The Queen Is Dead', coverImage: '/Smiths.webp', duration: '3:16', audioSrc: '/audio/310 Some Girls Are Bigger Than Others [2011 Remastered Version].mp3' }
    ]
  },
  am: {
    id: 'am',
    title: 'AM',
    artist: 'Arctic Monkeys',
    releaseDate: 'September 9, 2013',
    coverImage: '/AM.jpg',
    bgColor: '#111111',
    accentColor: '#f97316',
    description: 'AM is the fifth studio album by English indie rock band Arctic Monkeys. It was released in September 2013.',
    songs: [
      { id: 'am_1', title: 'Do I Wanna Know?', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '4:32', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - Do I Wanna Know.mp3' },
      { id: 'am_2', title: 'R U Mine?', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '3:22', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - R U Mine.mp3' },
      { id: 'am_3', title: 'One for the Road', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '3:26', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - One For The Road.mp3' },
      { id: 'am_4', title: 'Arabella', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '3:27', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - Arabella.mp3' },
      { id: 'am_5', title: 'I Want It All', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '3:04', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - I Want It All.mp3' },
      { id: 'am_6', title: 'No. 1 Party Anthem', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '4:03', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - No.1 Party Anthem.mp3' },
      { id: 'am_7', title: 'Mad Sounds', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '3:35', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - Mad Sounds.mp3' },
      { id: 'am_8', title: 'Fireside', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '3:01', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - Fireside.mp3' },
      { id: 'am_9', title: "Why'd You Only Call Me When You're High?", artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - Whyd You Only Call Me When Youre High.mp3' },
      { id: 'am_10', title: 'Snap Out of It', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '3:13', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - Snap Out Of It.mp3' },
      { id: 'am_11', title: 'Knee Socks', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '4:18', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - Knee Socks.mp3' },
      { id: 'am_12', title: 'I Wanna Be Yours', artist: 'Arctic Monkeys', album: 'AM', coverImage: '/AM.jpg', duration: '3:04', audioSrc: '/audio/arctic-monkeys-album/Arctic Monkeys - I Wanna Be Yours.mp3' }
    ]
  },
  nevermind: {
    id: 'nevermind',
    title: 'Nevermind',
    artist: 'Nirvana',
    releaseDate: 'September 24, 1991',
    coverImage: '/Nevermind.jpg',
    bgColor: '#10273a',
    accentColor: '#00ff88',
    description: 'Nevermind is the second studio album by American rock band Nirvana, released on September 24, 1991.',
    songs: [
      { id: 'nirv_1', title: 'Smells Like Teen Spirit', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '5:02', audioSrc: '/nirvana-nevermind-1991/01 Smells Like Teen Spirit.mp3' },
      { id: 'nirv_2', title: 'In Bloom', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '4:15', audioSrc: '/nirvana-nevermind-1991/02 In Bloom.mp3' },
      { id: 'nirv_3', title: 'Come as You Are', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '3:39', audioSrc: '/nirvana-nevermind-1991/03 Come as You Are (MTV Unplugged in New York).mp3' },
      { id: 'nirv_4', title: 'Breed', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '3:04', audioSrc: '/nirvana-nevermind-1991/04 Breed.mp3' },
      { id: 'nirv_5', title: 'Lithium', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '4:17', audioSrc: '/nirvana-nevermind-1991/05 Lithium (Live at Reading).mp3' },
      { id: 'nirv_6', title: 'Polly', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '2:57', audioSrc: '/nirvana-nevermind-1991/06 Polly.mp3' },
      { id: 'nirv_7', title: 'Territorial Pissings', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '2:23', audioSrc: '/nirvana-nevermind-1991/07 Territorial Pissings.mp3' },
      { id: 'nirv_8', title: 'Drain You', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '3:44', audioSrc: '/nirvana-nevermind-1991/08 Drain You.mp3' },
      { id: 'nirv_9', title: 'Lounge Act', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '3:45', audioSrc: '/nirvana-nevermind-1991/09 Lounge Act.mp3' },
      { id: 'nirv_10', title: 'Stay Away', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '3:32', audioSrc: '/nirvana-nevermind-1991/10 Stay Away.mp3' },
      { id: 'nirv_11', title: 'On a Plain', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '3:16', audioSrc: '/nirvana-nevermind-1991/11 On a Plain.mp3' },
      { id: 'nirv_12', title: 'Something in the Way', artist: 'Nirvana', album: 'Nevermind', coverImage: '/Nevermind.jpg', duration: '3:52', audioSrc: '/nirvana-nevermind-1991/12 Something in the Way.mp3' }
    ]
  },
  hail_to_the_thief: {
    id: 'hail_to_the_thief',
    title: 'Hail to the Thief',
    artist: 'Radiohead',
    releaseDate: 'June 9, 2003',
    coverImage: '/hail_to_the_thief_by_nobodyy.jpg',
    bgColor: '#311010',
    accentColor: '#DC2626',
    songs: [
      { id: 'htt_1', title: '2 + 2 = 5', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '3:19', audioSrc: '/Hail to the Thief/2 + 2 = 5_spotdown.app.mp3' },
      { id: 'htt_2', title: 'Sit Down. Stand Up.', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '4:20', audioSrc: '/Hail to the Thief/Sit Down. Stand Up_spotdown.app.mp3' },
      { id: 'htt_3', title: 'Sail to the Moon', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '4:18', audioSrc: '/Hail to the Thief/Sail To The Moon_spotdown.app.mp3' },
      { id: 'htt_4', title: 'Backdrifts', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '5:23', audioSrc: '/Hail to the Thief/Backdrifts_spotdown.app.mp3' },
      { id: 'htt_5', title: 'Go to Sleep', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '3:22', audioSrc: '/Hail to the Thief/Go To Sleep_spotdown.app.mp3' },
      { id: 'htt_6', title: 'Where I End and You Begin', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '4:29', audioSrc: '/Hail to the Thief/Where I End and You Begin_spotdown.app.mp3' },
      { id: 'htt_7', title: 'We Suck Young Blood', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '4:57', audioSrc: '/Hail to the Thief/We Suck Young Blood_spotdown.app.mp3' },
      { id: 'htt_8', title: 'The Gloaming', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '3:32', audioSrc: '/Hail to the Thief/The Gloaming_spotdown.app.mp3' },
      { id: 'htt_9', title: 'There There', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '3:45', audioSrc: '/Hail to the Thief/There, There_spotdown.app.mp3' },
      { id: 'htt_10', title: 'I Will', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '1:59', audioSrc: '/Hail to the Thief/I Will_spotdown.app.mp3' },
      { id: 'htt_11', title: 'A Punchup at a Wedding', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '3:45', audioSrc: '/Hail to the Thief/A Punch Up at a Wedding_spotdown.app.mp3' },
      { id: 'htt_12', title: 'Myxomatosis', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '3:45', audioSrc: '/Hail to the Thief/Myxomatosis_spotdown.app.mp3' },
      { id: 'htt_13', title: 'Scatterbrain', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '3:22', audioSrc: '/Hail to the Thief/Scatterbrain_spotdown.app.mp3' },
      { id: 'htt_14', title: 'A Wolf at the Door', artist: 'Radiohead', album: 'Hail to the Thief', coverImage: '/hail_to_the_thief_by_nobodyy.jpg', duration: '3:45', audioSrc: '/Hail to the Thief/A Wolf At the Door_spotdown.app.mp3' }
    ]
  },
  favourite_worst_nightmare: {
    id: 'favourite_worst_nightmare',
    title: 'Favourite Worst Nightmare',
    artist: 'Arctic Monkeys',
    releaseDate: 'April 23, 2007',
    coverImage: '/favourite-worst-nightmare-album.jpg',
    bgColor: '#1e242a',
    accentColor: '#f97316',
    songs: [
      { id: 'fwn_1', title: 'Brianstorm', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '2:52', audioSrc: '/Favourite Worst Nightmare/Brianstorm_spotdown.app.mp3' },
      { id: 'fwn_2', title: 'Teddy Picker', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '3:45', audioSrc: '/Favourite Worst Nightmare/Teddy Picker_spotdown.app.mp3' },
      { id: 'fwn_3', title: 'D is for Dangerous', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '2:15', audioSrc: '/Favourite Worst Nightmare/D is for Dangerous_spotdown.app.mp3' },
      { id: 'fwn_4', title: 'Balaclava', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '2:47', audioSrc: '/Favourite Worst Nightmare/Balaclava_spotdown.app.mp3' },
      { id: 'fwn_5', title: 'Fluorescent Adolescent', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '2:53', audioSrc: '/Favourite Worst Nightmare/Fluorescent Adolescent_spotdown.app.mp3' },
      { id: 'fwn_6', title: 'Only Ones Who Know', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '3:01', audioSrc: '/Favourite Worst Nightmare/Only Ones Who Know_spotdown.app.mp3' },
      { id: 'fwn_7', title: 'Do Me a Favour', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '3:45', audioSrc: '/Favourite Worst Nightmare/Do Me a Favour_spotdown.app.mp3' },
      { id: 'fwn_8', title: 'This House Is a Circus', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '3:45', audioSrc: '/Favourite Worst Nightmare/This House is a Circus_spotdown.app.mp3' },
      { id: 'fwn_9', title: 'If You Were There, Beware', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '4:34', audioSrc: '/Favourite Worst Nightmare/If You Were There, Beware_spotdown.app.mp3' },
      { id: 'fwn_10', title: 'The Bad Thing', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '2:23', audioSrc: '/Favourite Worst Nightmare/The Bad Thing_spotdown.app.mp3' },
      { id: 'fwn_11', title: 'Old Yellow Bricks', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '3:07', audioSrc: '/Favourite Worst Nightmare/Old Yellow Bricks_spotdown.app.mp3' },
      { id: 'fwn_12', title: '505', artist: 'Arctic Monkeys', album: 'Favourite Worst Nightmare', coverImage: '/favourite-worst-nightmare-album.jpg', duration: '4:14', audioSrc: '/Favourite Worst Nightmare/505_spotdown.app.mp3' }
    ]
  },
  parachutes: {
    id: 'parachutes',
    title: 'Parachutes',
    artist: 'Coldplay',
    releaseDate: 'July 10, 2000',
    coverImage: '/parachutes.jpg',
    bgColor: '#291b0f',
    accentColor: '#ff7b00',
    songs: [
      { id: 'para_1', title: "Don't Panic", artist: 'Coldplay', album: 'Parachutes', coverImage: '/parachutes.jpg', audioSrc: '/parachutes/Dont Panic_spotdown.app.mp3' },
      { id: 'para_2', title: 'Shiver', artist: 'Coldplay', album: 'Parachutes', coverImage: '/parachutes.jpg', duration: '4:59', audioSrc: '/parachutes/Shiver_spotdown.app.mp3' },
      { id: 'para_3', title: 'Spies', artist: 'Coldplay', album: 'Parachutes', coverImage: '/parachutes.jpg', duration: '5:18', audioSrc: '/parachutes/Spies_spotdown.app.mp3' },
      { id: 'para_4', title: 'Sparks', artist: 'Coldplay', album: 'Parachutes', coverImage: '/parachutes.jpg', duration: '3:47', audioSrc: '/parachutes/Sparks_spotdown.app.mp3' },
      { id: 'para_5', title: 'Yellow', artist: 'Coldplay', album: 'Parachutes', coverImage: '/parachutes.jpg', duration: '4:29', audioSrc: '/parachutes/Yellow_spotdown.app.mp3' },
      { id: 'para_6', title: 'Trouble', artist: 'Coldplay', album: 'Parachutes', coverImage: '/parachutes.jpg', duration: '4:31', audioSrc: '/parachutes/Trouble_spotdown.app.mp3' },
      { id: 'para_7', title: 'Parachutes', artist: 'Coldplay', album: 'Parachutes', coverImage: '/parachutes.jpg', duration: '2:20', audioSrc: '/parachutes/Parachutes_spotdown.app.mp3' },
      { id: 'para_8', title: 'High Speed', artist: 'Coldplay', album: 'Parachutes', coverImage: '/parachutes.jpg', duration: '4:14', audioSrc: '/parachutes/High Speed_spotdown.app.mp3' },
      { id: 'para_9', title: 'We Never Change', artist: 'Coldplay', album: 'Parachutes', coverImage: '/parachutes.jpg', duration: '4:09', audioSrc: '/parachutes/We Never Change_spotdown.app.mp3' },
      { id: 'para_10', title: "Everything's Not Lost", artist: 'Coldplay', album: 'Parachutes', coverImage: '/parachutes.jpg', audioSrc: "/parachutes/Everything's Not Lost - Includes Hidden Track 'Life Is For Living'_spotdown.app.mp3" }
    ]
  },
  in_rainbows: {
    id: 'in_rainbows',
    title: 'In Rainbows',
    artist: 'Radiohead',
    releaseDate: 'October 10, 2007',
    coverImage: '/In Rainbows.jpg',
    bgColor: '#4a1f11',
    accentColor: '#DC2626',
    description: 'In Rainbows is the seventh studio album by the English rock band Radiohead, self-released on 10 October 2007 as a pay-what-you-want download.',
    spotifyId: '5vkqYmiPBYLaalcmjujWxK',
    songs: [
      { id: 'ir_1', title: '15 Step', artist: 'Radiohead', album: 'In Rainbows', coverImage: '/In Rainbows.jpg', duration: '3:47', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/af/72/85/af728523-8048-4a8b-9e13-e8f4f64e9d69/mzaf_8205306206851675436.plus.aac.p.m4a' },
      { id: 'ir_2', title: 'Bodysnatchers', artist: 'Radiohead', album: 'In Rainbows', coverImage: '/In Rainbows.jpg', duration: '4:03', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/92/07/ed/9207eda5-8f35-1a27-65e2-bf271fee8e6d/mzaf_15407763232352401876.plus.aac.p.m4a' },
      { id: 'ir_3', title: 'Nude', artist: 'Radiohead', album: 'In Rainbows', coverImage: '/In Rainbows.jpg', duration: '4:13', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/11/2a/9b/112a9bdd-e778-feba-b80a-b599772545e0/mzaf_18162962909797141261.plus.aac.p.m4a' },
      { id: 'ir_4', title: 'Weird Fishes / Arpeggi', artist: 'Radiohead', album: 'In Rainbows', coverImage: '/In Rainbows.jpg', duration: '4:26', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/2e/48/d8/2e48d83b-0dd4-5336-ba90-a08a14771bc3/mzaf_6995897912540104374.plus.aac.p.m4a' },
      { id: 'ir_5', title: 'All I Need', artist: 'Radiohead', album: 'In Rainbows', coverImage: '/In Rainbows.jpg', duration: '3:51', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/32/26/e3/3226e3ba-b5e0-700d-3866-88842c2d15b8/mzaf_2819321088474335323.plus.aac.p.m4a' },
      { id: 'ir_6', title: 'Faust Arp', artist: 'Radiohead', album: 'In Rainbows', coverImage: '/In Rainbows.jpg', duration: '2:07', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cb/40/17/cb401722-5996-d200-7081-cc18c0673ea2/mzaf_1923661186614476707.plus.aac.p.m4a' },
      { id: 'ir_7', title: 'Reckoner', artist: 'Radiohead', album: 'In Rainbows', coverImage: '/In Rainbows.jpg', duration: '4:44', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/59/44/2f/59442fce-aab1-6d11-58a2-204588e61dcd/mzaf_8481954243559181948.plus.aac.p.m4a' },
      { id: 'ir_8', title: 'House of Cards', artist: 'Radiohead', album: 'In Rainbows', coverImage: '/In Rainbows.jpg', duration: '4:52', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/49/c8/67/49c8676d-ee26-77b6-a0e5-1134e91af4a1/mzaf_10511908633822741203.plus.aac.p.m4a' },
      { id: 'ir_9', title: 'Jigsaw Falling Into Place', artist: 'Radiohead', album: 'In Rainbows', coverImage: '/In Rainbows.jpg', duration: '4:31', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7a/1c/68/7a1c6810-0a1e-bca7-d3af-e9984fbd938b/mzaf_10305004532975521267.plus.aac.p.m4a' },
      { id: 'ir_10', title: 'Videotape', artist: 'Radiohead', album: 'In Rainbows', coverImage: '/In Rainbows.jpg', duration: '4:33', audioSrc: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ac/9f/7e/ac9f7eb6-0a30-5c2a-c571-82392d356592/mzaf_8676348198965838362.plus.aac.p.m4a' }
    ]
  },
  hatful_of_hollow: {
    id: 'hatful_of_hollow',
    title: 'Hatful of Hollow',
    artist: 'The Smiths',
    releaseDate: 'November 12, 1984',
    coverImage: '/12290-0-medium.jpg',
    bgColor: '#172728',
    accentColor: '#3a7f6f',
    songs: [
      { id: 'hoh_1', title: 'William, It Was Really Nothing', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '2:11', audioSrc: '/Hatful of Hollow/William, It Was Really Nothing - 2011 Remaster_spotdown.app.mp3' },
      { id: 'hoh_2', title: 'What Difference Does It Make?', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '3:14', audioSrc: '/Hatful of Hollow/What Difference Does It Make_ - John Peel Session 18_05_83_spotdown.app.mp3' },
      { id: 'hoh_3', title: 'These Things Take Time', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '2:33', audioSrc: '/Hatful of Hollow/These Things Take Time - David Jensen Session 26_06_83_spotdown.app.mp3' },
      { id: 'hoh_4', title: 'This Charming Man', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '2:46', audioSrc: '/Hatful of Hollow/This Charming Man - John Peel Session 14_09_83_spotdown.app.mp3' },
      { id: 'hoh_5', title: 'How Soon Is Now?', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '6:47', audioSrc: '/Hatful of Hollow/How Soon Is Now_ - 2011 Remaster_spotdown.app.mp3' },
      { id: 'hoh_6', title: 'Handsome Devil', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '2:44', audioSrc: '/Hatful of Hollow/Handsome Devil - John Peel Session 18_05_83_spotdown.app.mp3' },
      { id: 'hoh_7', title: 'Hand in Glove', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '3:17', audioSrc: '/Hatful of Hollow/Hand in Glove - 2011 Remaster_spotdown.app.mp3' },
      { id: 'hoh_8', title: 'Still Ill', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '3:34', audioSrc: '/Hatful of Hollow/Still Ill - John Peel Session 14_09_83_spotdown.app.mp3' },
      { id: 'hoh_9', title: "Heaven Knows I'm Miserable Now", artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', audioSrc: '/Hatful of Hollow/Heaven Knows Im Miserable Now - 2011 Remaster_spotdown.app.mp3' },
      { id: 'hoh_10', title: 'This Night Has Opened My Eyes', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '3:42', audioSrc: '/Hatful of Hollow/This Night Has Opened My Eyes - 2011 Remaster_spotdown.app.mp3' },
      { id: 'hoh_11', title: "You've Got Everything Now", artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', audioSrc: '/Hatful of Hollow/Youve Got Everything Now - David Jensen Session 26_06_83_spotdown.app.mp3' },
      { id: 'hoh_12', title: 'Accept Yourself', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '4:03', audioSrc: '/Hatful of Hollow/Accept Yourself - David Jensen Session 25_08_83_spotdown.app.mp3' },
      { id: 'hoh_13', title: 'Girl Afraid', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '2:46', audioSrc: '/Hatful of Hollow/Girl Afraid - 2011 Remaster_spotdown.app.mp3' },
      { id: 'hoh_14', title: 'Back to the Old House', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '3:04', audioSrc: '/Hatful of Hollow/Back to the Old House - John Peel Session 14_09_83_spotdown.app.mp3' },
      { id: 'hoh_15', title: 'Reel Around the Fountain', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '5:52', audioSrc: '/Hatful of Hollow/Reel Around the Fountain - John Peel Session 18_05_83_spotdown.app.mp3' },
      { id: 'hoh_16', title: 'Please, Please, Please Let Me Get What I Want', artist: 'The Smiths', album: 'Hatful of Hollow', coverImage: '/12290-0-medium.jpg', duration: '3:45', audioSrc: '/Hatful of Hollow/Please, Please, Please, Let Me Get What I Want - 2011 Remaster_spotdown.app.mp3' }
    ]
  }
};

// Map each album to its background cover file in /public/
export const ALBUM_BACKGROUNDS: Record<string, string> = {
  the_bends: '/the bends.png',
  kid_a: '/KId A.jpg',
  amnesiac: '/Radiohead_-_Amnesiac_cover.png',
  pablo_honey: '/creep.jpg',
  cigarettes_after_sex: '/cass.jpg',
  cry: '/cas2.webp',
  the_new_album: '/crush.jpg',
  k: '/i can.jpg',
  whatever_people_say_i_am: '/Whatever People Say.webp',
  humbug: '/Humbug.webp',
  suck_it_and_see: '/Suck It and See.webp',
  the_car: '/The Car.jpg',
  live_at_the_royal_albert_hall: '/Live at the Royal Albert Hall.jpg',
  tranquility_base_hotel_casino: '/Tranquility Base Hotel & Casino.jpg',
  a_rush_of_blood_to_the_head: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg',
  a_head_full_of_dreams: '/parachutes/A rush.jpeg',
  ghost_stories: '/parachutes/gost.jpeg',
  moon_music: '/parachutes/moon.jpeg',
  music_of_the_spheres: '/parachutes/music of.jpeg',
  everyday_life: '/parachutes/everyday life.jpeg',
  louder_than_bombs: '/Hatful of Hollow/louder.jpeg',
  the_smiths: '/Hatful of Hollow/the smiths.jpeg',
  rank: '/Hatful of Hollow/rank.jpeg',
  strangeways_here_we_come: '/Hatful of Hollow/strayway.jpeg',
  the_queen_is_dead_deluxe: '/Hatful of Hollow/the queen.jpeg',
  i_know_it: '/Hatful of Hollow/the queen.jpeg',
  rubber_ring: '/Hatful of Hollow/the queen.jpeg',
  in_utero: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg',
  mtv_unplugged: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg',
  bleach: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg',
  live_at_the_paramount: '/nirvana-nevermind-1991/nevermind.jpeg',

  ok_computer: '/3463771.jpg',
  the_queen_is_dead: '/1962338.jpg',
  am: '/5947610-modified.jpg',
  nevermind: '/5187073.jpg',
  hail_to_the_thief: '/2635548.jpg',
  favourite_worst_nightmare: '/9353289.jpg',
  parachutes: '/parachutes.jpg',
  hatful_of_hollow: '/1962415.jpg',
  in_rainbows: '/In Rainbows.jpg'
};

// Define structure for discography releases
export interface Release {
  title: string;
  year: number;
  type: 'Album' | 'Single' | 'EP';
  cover: string;
  albumRoute?: string;
}

export interface FanArtist {
  id: string;
  name: string;
  avatar: string;
  route: string;
}

export interface BandRichInfo extends Band {
  listeners: string;
  headerImage: string;
  popularTracks: Song[];
  trailerVideo: string;
  aboutImage: string;
  worldRank: string;
  aboutBio: string;
  popularReleases: Release[];
  albumsList: Release[];
  singlesList: Release[];
  fansAlsoLikeList: FanArtist[];
}

export const BANDS_RICH: BandRichInfo[] = [
  {
    id: 'radiohead',
    name: 'Radiohead',
    brandName: 'MELOVOID',
    videoSrc: '/loop-silk.webm',
    bgType: 'uncaged',
    route: '/artist/radiohead',
    bgColor: '#000000',
    accentColor: '#DC2626',
    description: 'Radiohead are an English indie rock band formed in Abingdon, Oxfordshire, in 1985.',
    listeners: '40,352,673',
    headerImage: '/3463805.jpg',
    aboutImage: '/3463765.jpg',
    worldRank: '#92',
    aboutBio: 'Radiohead is an English rock band formed in Abingdon, Oxfordshire, in 1985. The band consists of Thom Yorke (vocals, guitar, piano), Jonny Greenwood (lead guitar, keyboards, other instruments), Colin Greenwood (bass), Ed O\'Brien (guitar, backing vocals), and Philip Selway (drums, percussion). They have been praised for their experimental sound, lyrical depth, and constant evolution, making them one of the most influential bands of their generation.',
    popularTracks: [
      SONGS.creep,
      ALBUMS.hail_to_the_thief.songs[0],
      ALBUMS.hail_to_the_thief.songs[1],
      ALBUMS.hail_to_the_thief.songs[8],
      ALBUMS.hail_to_the_thief.songs[11]
    ],
    trailerVideo: '/Radiohead - Creep.mp4',
    albums: [ALBUMS.ok_computer, ALBUMS.hail_to_the_thief, ALBUMS.in_rainbows],
    popularReleases: [
      { title: 'OK Computer', year: 1997, type: 'Album', cover: '/OK_Computer.jpg', albumRoute: '/album/ok_computer' },
      { title: 'In Rainbows', year: 2007, type: 'Album', cover: '/In Rainbows.jpg',
        albumRoute: '/album/in_rainbows' },
      { title: 'The Bends', year: 1995, type: 'Album', cover: '/the bends.png',
        albumRoute: '/album/the_bends' },
      { title: 'Kid A', year: 2000, type: 'Album', cover: '/KId A.jpg',
        albumRoute: '/album/kid_a' },
      { title: 'Amnesiac', year: 2001, type: 'Album', cover: '/Radiohead_-_Amnesiac_cover.png',
        albumRoute: '/album/amnesiac' }
    ],
    albumsList: [
      { title: 'Pablo Honey', year: 1993, type: 'Album', cover: '/creep.jpg',
        albumRoute: '/album/pablo_honey' },
      { title: 'The Bends', year: 1995, type: 'Album', cover: '/the bends.png',
        albumRoute: '/album/the_bends' },
      { title: 'OK Computer', year: 1997, type: 'Album', cover: '/OK_Computer.jpg',
        albumRoute: '/album/ok_computer' },
      { title: 'Hail to the Thief', year: 2003, type: 'Album', cover: '/hail.jpg',
        albumRoute: '/album/hail_to_the_thief' },
      { title: 'In Rainbows', year: 2007, type: 'Album', cover: '/In Rainbows.jpg',
        albumRoute: '/album/in_rainbows' }
    ],
    singlesList: [
      { title: 'Creep', year: 1992, type: 'Single', cover: '/creep.jpg',
        albumRoute: '/album/creep' },
      { title: 'High and Dry', year: 1995, type: 'Single', cover: '/high.jpg',
        albumRoute: '/album/high_and_dry' },
      { title: 'Karma Police', year: 1997, type: 'Single', cover: '/karma police.jpg',
        albumRoute: '/album/karma_police' },
      { title: 'No Surprises', year: 1998, type: 'Single', cover: '/no.jpg',
        albumRoute: '/album/no_surprises' },
      { title: 'Pyramid Song', year: 2001, type: 'Single', cover: '/py.png',
        albumRoute: '/album/pyramid_song' }
    ],
    fansAlsoLikeList: [
      { id: 'cas', name: 'CAS', avatar: '/cas2.webp', route: '/artist/cas' },
      { id: 'coldplay', name: 'Coldplay', avatar: '/coldplay-parachutes-globe-album-cover-yp614nxh6ajo7w7i.jpg', route: '/artist/coldplay' },
      { id: 'arctic-monkeys', name: 'Arctic Monkeys', avatar: '/AM.jpg', route: '/artist/arctic-monkeys' },
      { id: 'nirvana', name: 'Nirvana', avatar: '/nirvana.jpg', route: '/artist/nirvana' },
      { id: 'the-smiths', name: 'The Smiths', avatar: '/Hatful of Hollow.jpg', route: '/artist/the-smiths' }
    ]
  },
  {
    id: 'cas',
    name: 'Cigarettes After Sex',
    brandName: 'MELOVOID',
    videoSrc: '/cas2.mp4',
    bgType: 'uncaged',
    route: '/artist/cas',
    bgColor: '#000000',
    accentColor: '#059669',
    description: 'Cigarettes After Sex is an American ambient pop band formed in El Paso, Texas, in 2008.',
    listeners: '21,940,183',
    headerImage: '/cas bg.jpg',
    aboutImage: '/cas.png',
    worldRank: '#178',
    aboutBio: 'Cigarettes After Sex is an American dream pop band formed in El Paso, Texas, in 2008 by Greg Gonzalez. The band is known for their ethereal, ambient, and romantic musical style, as well as Gonzalez\'s sweet, melancholic vocals.',
    popularTracks: [
      SONGS.cry,
      SONGS.apocalypse,
      SONGS.k,
      SONGS.sunsetz,
      SONGS.sweet
    ],
    trailerVideo: '/Cigarettes After Sex： A short documentary.mp4',
    albums: [],
    popularReleases: [
      { title: 'Cigarettes After Sex', year: 2017, type: 'Album', cover: '/cass.jpg',
        albumRoute: '/album/cigarettes_after_sex' },
      { title: 'Cry', year: 2019, type: 'Album', cover: '/cas2.webp',
        albumRoute: '/album/cry' },
      { title: 'Affection', year: 2015, type: 'Single', cover: '/cas af.webp',
        albumRoute: '/album/affection' },
      { title: 'K.', year: 2016, type: 'Single', cover: '/cas5.webp',
        albumRoute: '/album/k' },
      { title: 'Heavenly', year: 2019, type: 'Single', cover: '/crush.jpg',
        albumRoute: '/album/heavenly' }
    ],
    albumsList: [
      { title: 'Cigarettes After Sex', year: 2017, type: 'Album', cover: '/cass.jpg',
        albumRoute: '/album/cigarettes_after_sex' },
      { title: 'Cry', year: 2019, type: 'Album', cover: '/cas2.webp',
        albumRoute: '/album/cry' },
      { title: 'The New Album', year: 2024, type: 'Album', cover: '/crush.jpg',
        albumRoute: '/album/the_new_album' },
      { title: 'I.', year: 2012, type: 'EP', cover: '/romans.jpg',
        albumRoute: '/album/i' },
      { title: 'K.', year: 2016, type: 'Album', cover: '/i can.jpg',
        albumRoute: '/album/k' }
    ],
    singlesList: [
      { title: 'Affection', year: 2015, type: 'Single', cover: '/cas7.jpg',
        albumRoute: '/album/affection' },
      { title: 'K.', year: 2016, type: 'Single', cover: '/k.jpg',
        albumRoute: '/album/k' },
      { title: 'Heavenly', year: 2019, type: 'Single', cover: '/h.jpg',
        albumRoute: '/album/heavenly' },
      { title: 'Falling In Love', year: 2019, type: 'Single', cover: '/falling.webp',
        albumRoute: '/album/falling_in_love' },
      { title: 'Pistol', year: 2022, type: 'Single', cover: '/cas4.webp',
        albumRoute: '/album/pistol' }
    ],
    fansAlsoLikeList: [
      { id: 'radiohead', name: 'Radiohead', avatar: '/OK_Computer.jpg', route: '/artist/radiohead' },
      { id: 'coldplay', name: 'Coldplay', avatar: '/coldplay-parachutes-globe-album-cover-yp614nxh6ajo7w7i.jpg', route: '/artist/coldplay' },
      { id: 'arctic-monkeys', name: 'Arctic Monkeys', avatar: '/AM.jpg', route: '/artist/arctic-monkeys' }
    ]
  },
  {
    id: 'arctic-monkeys',
    name: 'Arctic Monkeys',
    brandName: 'melovoid',
    videoSrc: '/loop-instinct.webm',
    bgType: 'silk',
    route: '/artist/arctic-monkeys',
    bgColor: '#111111',
    accentColor: '#dc267f',
    description: 'Arctic Monkeys are an English rock band formed in Sheffield in 2002.',
    listeners: '56,431,092',
    headerImage: '/5947610-modified.jpg',
    aboutImage: '/AM.jpg',
    worldRank: '#54',
    aboutBio: 'Arctic Monkeys are an English rock band formed in Sheffield in 2002. The group consists of Alex Turner (lead vocals, guitar, keyboards), Jamie Cook (guitar, keyboards), Nick O\'Malley (bass guitar, backing vocals), and Matt Helders (drums, backing vocals). They became one of the first bands to attract public attention via the Internet.',
    popularTracks: [
      ALBUMS.am.songs[0],
      ALBUMS.am.songs[1],
      ALBUMS.am.songs[3],
      ALBUMS.favourite_worst_nightmare.songs[11],
      ALBUMS.favourite_worst_nightmare.songs[4]
    ],
    trailerVideo: '/Arctic Monkeys ｜ Official Trailer.mp4',
    albums: [ALBUMS.am, ALBUMS.favourite_worst_nightmare],
    popularReleases: [
      { title: 'AM', year: 2013, type: 'Album', cover: '/AM.jpg',
        albumRoute: '/album/am' },
      { title: 'Favourite Worst Nightmare', year: 2007, type: 'Album', cover: '/favourite-worst-nightmare-album.jpg',
        albumRoute: '/album/favourite_worst_nightmare' },
      { title: 'Whatever People Say I Am', year: 2006, type: 'Album', cover: '/Whatever People Say.webp',
        albumRoute: '/album/whatever_people_say_i_am' },
      { title: 'Humbug', year: 2009, type: 'Album', cover: '/Humbug.webp',
        albumRoute: '/album/humbug' },
      { title: 'Suck It and See', year: 2011, type: 'Album', cover: '/Suck It and See.webp',
        albumRoute: '/album/suck_it_and_see' }
    ],
    albumsList: [
      { title: 'The Car', year: 2022, type: 'Album', cover: '/The Car.jpg',
        albumRoute: '/album/the_car' },
      { title: 'Live at the Royal Albert Hall', year: 2020, type: 'Album', cover: '/Live at the Royal Albert Hall.jpg',
        albumRoute: '/album/live_at_the_royal_albert_hall' },
      { title: 'Tranquility Base Hotel & Casino', year: 2018, type: 'Album', cover: '/Tranquility Base Hotel & Casino.jpg',
        albumRoute: '/album/tranquility_base_hotel_casino' },
      { title: 'AM', year: 2013, type: 'Album', cover: '/AM.jpg',
        albumRoute: '/album/am' },
      { title: 'Suck It and See', year: 2011, type: 'Album', cover: '/Suck It and See.webp',
        albumRoute: '/album/suck_it_and_see' }
    ],
    singlesList: [
      { title: 'I Ain\'t Quite Where I Think I Am', year: 2022, type: 'Single', cover: '/The Car.jpg',
        albumRoute: '/album/i_ain_t_quite_where_i_think_i_am' },
      { title: 'Body Paint', year: 2022, type: 'Single', cover: '/Body Paint.webp',
        albumRoute: '/album/body_paint' },
      { title: 'There\'d Better Be a Mirrorball', year: 2022, type: 'Single', cover: '/Thered Better Be a Mirrorball.jpg',
        albumRoute: '/album/there_d_better_be_a_mirrorball' },
      { title: 'Arabella (Live)', year: 2020, type: 'Single', cover: '/Live at the Royal Albert Hall.jpg',
        albumRoute: '/album/arabella_live' },
      { title: '505 (Live)', year: 2020, type: 'Single', cover: '/Live at the Royal Albert Hall.jpg',
        albumRoute: '/album/505_live' }
    ],
    fansAlsoLikeList: [
      { id: 'radiohead', name: 'Radiohead', avatar: '/OK_Computer.jpg', route: '/artist/radiohead' },
      { id: 'the-smiths', name: 'The Smiths', avatar: '/Hatful of Hollow.jpg', route: '/artist/the-smiths' }
    ]
  },
  {
    id: 'coldplay',
    name: 'Coldplay',
    brandName: 'melovoid',
    videoSrc: '/13202035_3840_2160_24fps.mp4',
    bgType: 'uncaged',
    route: '/artist/coldplay',
    bgColor: '#150f24',
    accentColor: '#ffc107',
    description: 'Coldplay are a British rock band formed in London in 1996.',
    listeners: '81,950,111',
    headerImage: '/coldplay-8k-rock-2880x1800-19155.jpg',
    aboutImage: '/coldplay-meadow-group-photo-jntb8owv800nwx9e.jpg',
    worldRank: '#12',
    aboutBio: 'Coldplay are a British rock band formed in London in 1996. They consist of vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, drummer Will Champion, and creative director Phil Harvey. They are known for their spectacular live performances and melodic sound.',
    popularTracks: [
      ALBUMS.parachutes.songs[4],
      ALBUMS.parachutes.songs[1],
      ALBUMS.parachutes.songs[5],
      ALBUMS.parachutes.songs[0],
      ALBUMS.parachutes.songs[2]
    ],
    trailerVideo: '/Coldplay - A Head Full Of Dreams (Official Film Trailer).mp4',
    albums: [ALBUMS.parachutes],
    popularReleases: [
      { title: 'Parachutes', year: 2000, type: 'Album', cover: '/parachutes.jpg',
        albumRoute: '/album/parachutes' },
      { title: 'A Rush of Blood to the Head', year: 2002, type: 'Album', cover: '/parachutes/ab67616d0000b273de09e02aa7febf30b7c02d82.jpeg',
        albumRoute: '/album/a_rush_of_blood_to_the_head' },
      { title: 'A Head Full of Dreams', year: 2015, type: 'Album', cover: '/parachutes/A rush.jpeg',
        albumRoute: '/album/a_head_full_of_dreams' },
      { title: 'Ghost Stories', year: 2014, type: 'Album', cover: '/parachutes/gost.jpeg',
        albumRoute: '/album/ghost_stories' },
      { title: 'Moon Music', year: 2024, type: 'Album', cover: '/parachutes/moon.jpeg',
        albumRoute: '/album/moon_music' }
    ],
    albumsList: [
      { title: 'Moon Music', year: 2024, type: 'Album', cover: '/parachutes/moon.jpeg',
        albumRoute: '/album/moon_music' },
      { title: 'Music Of The Spheres', year: 2021, type: 'Album', cover: '/parachutes/music of.jpeg',
        albumRoute: '/album/music_of_the_spheres' },
      { title: 'Everyday Life', year: 2019, type: 'Album', cover: '/parachutes/everyday life.jpeg',
        albumRoute: '/album/everyday_life' },
      { title: 'A Head Full of Dreams', year: 2015, type: 'Album', cover: '/parachutes/A rush.jpeg',
        albumRoute: '/album/a_head_full_of_dreams' },
      { title: 'Ghost Stories', year: 2014, type: 'Album', cover: '/parachutes/gost.jpeg',
        albumRoute: '/album/ghost_stories' }
    ],
    singlesList: [
      { title: 'ALL MY LOVE', year: 2024, type: 'Single', cover: '/parachutes/all my love.jpeg',
        albumRoute: '/album/all_my_love' },
      { title: 'WE PRAY', year: 2025, type: 'Single', cover: '/parachutes/we pray.jpeg',
        albumRoute: '/album/we_pray' },
      { title: 'feelslikeimjustmissin', year: 2024, type: 'Single', cover: '/parachutes/feels like.jpeg',
        albumRoute: '/album/feelslikeimjustmissin' },
      { title: 'Higher Power', year: 2021, type: 'Single', cover: '/parachutes/my universe.jpeg',
        albumRoute: '/album/higher_power' },
      { title: 'My Universe', year: 2021, type: 'Single', cover: '/parachutes/higher power.jpeg',
        albumRoute: '/album/my_universe' }
    ],
    fansAlsoLikeList: [
      { id: 'radiohead', name: 'Radiohead', avatar: '/OK_Computer.jpg', route: '/artist/radiohead' },
      { id: 'cas', name: 'CAS', avatar: '/cas2.webp', route: '/artist/cas' }
    ]
  },
  {
    id: 'the-smiths',
    name: 'The Smiths',
    brandName: 'melovoid',
    videoSrc: '/the.mp4',
    bgType: 'uncaged',
    route: '/artist/the-smiths',
    bgColor: '#0d1813',
    accentColor: '#dc6626',
    description: 'The Smiths were an English rock band formed in Manchester in 1982.',
    listeners: '15,487,092',
    headerImage: '/147367 (1).jpg',
    aboutImage: '/the smiths.jpg',
    worldRank: '#412',
    aboutBio: 'The Smiths were an English rock band formed in Manchester in 1982. The group consisted of vocalist Morrissey, guitarist Johnny Marr, bassist Andy Rourke, and drummer Mike Joyce. They are widely regarded as one of the most important bands to emerge from the British independent music scene of the 1980s.',
    popularTracks: [
      ALBUMS.the_queen_is_dead.songs[8],
      ALBUMS.hatful_of_hollow.songs[3],
      ALBUMS.hatful_of_hollow.songs[4],
      ALBUMS.hatful_of_hollow.songs[13],
      ALBUMS.the_queen_is_dead.songs[5]
    ],
    trailerVideo: '/The Smiths LTD _ The Smiths Tribute Band _ Showreel 2024.mp4',
    albums: [ALBUMS.the_queen_is_dead, ALBUMS.hatful_of_hollow],
    popularReleases: [
      { title: 'The Queen Is Dead', year: 1986, type: 'Album', cover: '/Hatful of Hollow/the queen.jpeg',
        albumRoute: '/album/the_queen_is_dead' },
      { title: 'Hatful of Hollow', year: 1984, type: 'Album', cover: '/Hatful of Hollow/hateful.jpeg',
        albumRoute: '/album/hatful_of_hollow' },
      { title: 'Louder Than Bombs', year: 1987, type: 'Album', cover: '/Hatful of Hollow/louder.jpeg',
        albumRoute: '/album/louder_than_bombs' },
      { title: 'The Smiths', year: 1984, type: 'Album', cover: '/Hatful of Hollow/the smiths.jpeg',
        albumRoute: '/album/the_smiths' },
      { title: 'Rank', year: 1988, type: 'Album', cover: '/Hatful of Hollow/rank.jpeg',
        albumRoute: '/album/rank' }
    ],
    albumsList: [
      { title: 'Strangeways, Here We Come', year: 1987, type: 'Album', cover: '/Hatful of Hollow/strayway.jpeg',
        albumRoute: '/album/strangeways_here_we_come' },
      { title: 'The Queen Is Dead (Deluxe)', year: 2017, type: 'Album', cover: '/Hatful of Hollow/the queen.jpeg',
        albumRoute: '/album/the_queen_is_dead_deluxe' },
      { title: 'The Queen Is Dead', year: 1986, type: 'Album', cover: '/Hatful of Hollow/the queen.jpeg',
        albumRoute: '/album/the_queen_is_dead' },
      { title: 'I Know It', year: 1984, type: 'Album', cover: '/Hatful of Hollow/the queen.jpeg',
        albumRoute: '/album/i_know_it' },
      { title: 'Rubber Ring', year: 1985, type: 'Album', cover: '/Hatful of Hollow/the queen.jpeg',
        albumRoute: '/album/rubber_ring' }
    ],
    singlesList: [
      { title: 'There Is A Light That Never Goes Out', year: 1986, type: 'Single', cover: '/Hatful of Hollow/the queen.jpeg',
        albumRoute: '/album/there_is_a_light_that_never_goes_out' },
      { title: 'Hatful of Hollow', year: 1984, type: 'Single', cover: '/covers/hatful_of_hollow.jpg',
        albumRoute: '/album/hatful_of_hollow' },
      { title: 'Louder Than Bombs', year: 1987, type: 'Single', cover: '/covers/louder_than_bombs.jpg',
        albumRoute: '/album/louder_than_bombs' },
      { title: 'This Charming Man', year: 1983, type: 'Single', cover: '/12290-0-medium.jpg',
        albumRoute: '/album/this_charming_man' }
    ],
    fansAlsoLikeList: [
      { id: 'radiohead', name: 'Radiohead', avatar: '/OK_Computer.jpg', route: '/artist/radiohead' },
      { id: 'arctic-monkeys', name: 'Arctic Monkeys', avatar: '/AM.jpg', route: '/artist/arctic-monkeys' }
    ]
  },
  {
    id: 'nirvana',
    name: 'Nirvana',
    brandName: 'melovoid',
    videoSrc: '/4201700-hd_1080_1920_30fps.mp4',
    bgType: 'uncaged',
    route: '/artist/nirvana',
    bgColor: '#0b1620',
    accentColor: '#5DADE2',
    description: 'Nirvana was an American grunge rock band formed in Aberdeen, Washington, in 1987.',
    listeners: '32,492,019',
    headerImage: '/5383523.jpg',
    aboutImage: '/nirvana1.jpg',
    worldRank: '#123',
    aboutBio: 'Nirvana was an American grunge rock band formed in Aberdeen, Washington, in 1987. Founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers, most notably Dave Grohl, who joined in 1990. Nirvana\'s success popularized alternative rock, and they were often referenced as the figurehead band of Generation X.',
    popularTracks: [
      { 
        id: 'nirv_1', 
        title: 'Smells Like Teen Spirit', 
        artist: 'Nirvana', 
        album: 'Nevermind', 
        coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', 
        audioSrc: '/nirvana-nevermind-1991/01 Smells Like Teen Spirit.mp3' 
      },
      { 
        id: 'nirv_3', 
        title: 'Come as You Are', 
        artist: 'Nirvana', 
        album: 'Nevermind', 
        coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', 
        audioSrc: '/nirvana-nevermind-1991/03 Come as You Are (MTV Unplugged in New York).mp3' 
      },
      { 
        id: 'nirv_hb', 
        title: 'Heart-Shaped Box', 
        artist: 'Nirvana', 
        album: 'In Utero', 
        coverImage: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg', 
        audioSrc: '/nirvana-nevermind-1991/Heart-Shaped Box_spotdown.app.mp3' 
      },
      { 
        id: 'nirv_5', 
        title: 'Lithium', 
        artist: 'Nirvana', 
        album: 'Nevermind', 
        coverImage: '/nirvana-nevermind-1991/nevermind.jpeg', 
        audioSrc: '/nirvana-nevermind-1991/05 Lithium (Live at Reading).mp3' 
      },
      { 
        id: 'nirv_man', 
        title: 'The Man Who Sold The World - Live', 
        artist: 'Nirvana', 
        album: 'MTV Unplugged in New York', 
        coverImage: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg', 
        audioSrc: '/nirvana-nevermind-1991/The Man Who Sold The World - Live_spotmp3.app.mp3' 
      }
    ],
    trailerVideo: '/Cobain： Montage of Heck ｜ Official Movie Trailer.mp4',
    albums: [ALBUMS.nevermind],
    popularReleases: [
      { title: 'Nevermind', year: 1991, type: 'Album', cover: '/nirvana-nevermind-1991/nevermind.jpeg',
        albumRoute: '/album/smells_like_teen_spirit' },
      { title: 'In Utero', year: 1993, type: 'Album', cover: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg',
        albumRoute: '/album/in_utero' },
      { title: 'MTV Unplugged', year: 1994, type: 'Album', cover: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg',
        albumRoute: '/album/mtv_unplugged' },
      { title: 'Bleach', year: 1989, type: 'Album', cover: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg',
        albumRoute: '/album/bleach' }
    ],
    albumsList: [
      { title: 'Nevermind', year: 1991, type: 'Album', cover: '/nirvana-nevermind-1991/nevermind.jpeg',
        albumRoute: '/album/nevermind' },
      { title: 'In Utero', year: 1993, type: 'Album', cover: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg',
        albumRoute: '/album/in_utero' },
      { title: 'MTV Unplugged', year: 1994, type: 'Album', cover: '/nirvana-nevermind-1991/ab67616d0000b27336c5417732e53e23cb219246.jpeg',
        albumRoute: '/album/mtv_unplugged' },
      { title: 'Bleach', year: 1989, type: 'Album', cover: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg',
        albumRoute: '/album/bleach' },
      { title: 'Live At The Paramount', year: 2011, type: 'Album', cover: '/nirvana-nevermind-1991/nevermind.jpeg',
        albumRoute: '/album/live_at_the_paramount' }
    ],
    singlesList: [
      { title: 'Smells Like Teen Spirit', year: 1991, type: 'Single', cover: '/nirvana-nevermind-1991/nevermind.jpeg',
        albumRoute: '/album/smells_like_teen_spirit' },
      { title: 'In Bloom', year: 1992, type: 'Single', cover: '/nirvana-nevermind-1991/nevermind.jpeg',
        albumRoute: '/album/in_bloom' },
      { title: 'In Utero 30th', year: 2023, type: 'Single', cover: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg',
        albumRoute: '/album/in_utero_30th' },
      { title: 'Nevermind (30th Anniversary)', year: 2021, type: 'Single', cover: '/nirvana-nevermind-1991/nevermind.jpeg',
        albumRoute: '/album/nevermind_30th_anniversary' },
      { title: 'In Utero Deluxe', year: 2013, type: 'Single', cover: '/nirvana-nevermind-1991/ab67616d0000b273aca059cebc1841277db22d1c.jpeg',
        albumRoute: '/album/in_utero_deluxe' }
    ],
    fansAlsoLikeList: [
      { id: 'radiohead', name: 'Radiohead', avatar: '/OK_Computer.jpg', route: '/artist/radiohead' },
      { id: 'arctic-monkeys', name: 'Arctic Monkeys', avatar: '/AM.jpg', route: '/artist/arctic-monkeys' }
    ]
  }
];

export const HERO_SLIDES = [
  {
    albumId: 'ok_computer',
    albumTitle: 'OK COMPUTER',
    artistName: 'RADIOHEAD',
    releaseDate: 'Released June 16, 1997',
    coverImage: '/OK_Computer.jpg',
    route: '/album/ok_computer',
    artistTag: 'radiohead'
  },
  {
    albumId: 'the_queen_is_dead',
    albumTitle: 'THE QUEEN IS DEAD',
    artistName: 'THE SMITHS',
    releaseDate: 'Released June 16, 1986',
    coverImage: '/Smiths.webp',
    route: '/album/the_queen_is_dead',
    artistTag: 'the smiths'
  },
  {
    albumId: 'am',
    albumTitle: 'AM',
    artistName: 'ARCTIC MONKEYS',
    releaseDate: 'Released September 9, 2013',
    coverImage: '/AM.jpg',
    route: '/album/am',
    artistTag: 'arctic monkeys'
  },
  {
    albumId: 'nevermind',
    albumTitle: 'NEVERMIND',
    artistName: 'NIRVANA',
    releaseDate: 'Released September 24, 1991',
    coverImage: '/Nevermind.jpg',
    route: '/album/nevermind',
    artistTag: 'nirvana'
  }
];

export const TRENDING_SONGS_LIST = [
  SONGS.cry,
  SONGS.there_is_a_light,
  SONGS.sweater_weather,
  SONGS.creep,
  SONGS.ru_mine,
  SONGS.come_as_you_are
];

export const TRENDING_ALBUMS_LIST = [
  ALBUMS.hail_to_the_thief,
  ALBUMS.favourite_worst_nightmare,
  ALBUMS.parachutes,
  ALBUMS.hatful_of_hollow
];
