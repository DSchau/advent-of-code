import { passphraseValidator, getValidPassphrases } from './';

const INPUT = `
vxjtwn vjnxtw sxibvv mmws wjvtxn icawnd rprh
fhaa qwy vqbq gsswej lxr yzl wakcige mwjrl
bhnlow huqa gtbjc gvj wrkyr jgvmhj bgs umo ikbpdto
drczdf bglmf gsx flcf ojpj kzrwrho owbkl dgrnv bggjevc
ndncqdl lncaugj mfa lncaugj skt pkssyen rsb npjzf
kdd itdyhe pvljizn cgi
jgy pyhuq eecb phwkyl oeftyu pyhuq hecxgti tpadffm jgy
zvc qdk mlmyj kybbh lgbb fvfzcer frmaxa yzgw podt dbycoii afj
zfr msn mns leqem frz
golnm ltizhd dvwv xrizqhd omegnez nan yqajse lgef
gbej rvek aehiz bgje
yej cphl jtp swe axhljo ddwk obwsq mnewiwu klddd
ipiev henods rpn qfpg gjfdgs zcpt sswab eosdhn teeil
gzje ydu oiu jzge udy sqjeoo olxej
mgn gox tcifta vzc lxry gox gox mvila qdl jipjnw dvu
hxk xhk unhdmdz yomze povrt nbww bxu qqsqc rvuk tgffy twddm
fyx fyx nzkm fyx
ymnoc zogudq yncom tqrob sidvy dfuu ccjpiej yidvs
bxebny akknwxw jeyxqvj syl cedps akknwxw akknwxw zpvnf kuoon pnkejn wqjgc
kcebrkj zmuf ueewxhi mgyepbr nleviqc dez
argavx fqguii gebohvw klnrq rkqnl goevhbw
ywqi abwi eswph nlplbl pswhe lnqx fpgk lllnpb
abpb mpkw ampey yapme xnuyj
tmuaq asd bhbs sqmbsnw wsbnqsm ydwdncn rpa vrllkh
dnltf cck djy ydj
wywwl scezo clowuz dkgqaj dohyzcp
diimshr vlmsnlj whqb dkicau ckdaiu terp kgcii npqc vvzrqzv nol
wfpxe sqf tbb ruqpcq zfgb
kajykuz tsxgtys vuz kglmgg ihnnn plyjxj rcrvo mij plyjxj jqiur
pxs hmet dwgvd mvhkvn cjxg yvid vmhnkv kwxz rfemsua wdgvd okixk
lzwxas ddtyeh ivyama crrhxdt hedytd jfw
vjfv oyd fvjv kfwlj mradbx mckseee xradmb
llga yytxyvj lstspek lstspek lstspek
fabgf wgop fabgf bvsfoaw
grqnbvo tntomdw hizg tmotdwn
mau ufkw cxfi rhehj ebe xyv rhehj acxngo arl qtl rhehj
kbkto stqjtm tpcwshj saerkrt pffj dthp pfjf axc gwmmfdw glnqtdy xmskw
veff zqm hzhxap lgwnwq twsdk mqz xbbarbv cdx fhnwt qjcji bbvbrxa
fjw eds hofskl nkbsv des hvx xyn
qzort qzort qesz rtq oonk vwzlw wapoj ifr cta
pja hvy nhjg paj smtfe fmtse
xvi tcjj xvkjtab nqftt aumijl xkd cmilegf hvsmodx uuo igmcelf mslkq
mdhezgv lelzy kzfvsqu hvmvaxw pxiqjc hvmvaxw kzfvsqu
hsicsav csshrhx znojm eapi lhmzq bbwnz seao gfk azk
pup xtgjyzy wqt ijeektl
ktwh qdegzs btj pfwzzho
xdkmdm izqtjrr iqbke vtp
fmrbpdr zpccv tmtwx tmtwx tmtwx bys
ehphfgq idd ehphfgq ehphfgq uphe hvrc jcscne nbnslqy
xzqucgj fcih fljk barz lvln hcfi azrb
cmfmclv mfgvifw rnxgn jpg bsnq wnduzj ymsdx smdxy pqomf
rlqsm qrsml emts qsmcowv scmvwqo
tshzkpa zwtpda ftsiwo nil tpawdz kjpa ptzashk
mnep sfc swjawtd vnwud gyulluw zpa kmwyvln evd btnmoi dnwe
jwq scepq redoxmw rbdzsa wlkzso kxpm bttg vxuc moxwdre ijtdd rzsabd
wpvo dsjox amuwjm pls lgwksva ctakgpl rmsjj lzwwpr zzm udg
bji obbn tmwyc afpmkxr glvrd kahhgpq rna qkxyntp vmd mloshc
ymq rtnr nxjzm pqiddrn qmy vgxw ull
mmzk ikge zhtzhs xyo qwe lll gjjm icetq qgrr mzwqa knec
kxomfck idlh xrbowo nyetbnl qskh xuwkkxe upmmmf zhvuyp
srcwyhl czgr xmhuws jueyh xcuib xhsuwm bxuic
crkueh beyxopz xpyozbe dxgadw qktmce rjropjg
lbktun imdpcp fkssp fhcpt fehho jqdnt aoewa
jmun pynzjo trs ijwcc pelf oft pcsqdxg zvql
mneaaq vjrg jidlrzz phd mvxpivd ldkhu
sao xqw nrukn gatkz quscpsx vmz oscoeb
goi wzxhb rrk aylqqcd mlcbvvf ororn heptid kdu byevr
qsj lsbieef deez vzwdx hez iwd
lmgfb keqt mqbsuis ogrr errbi xiqe xsszacp
ato hmk zfjaj kmh plxup cida dqd pfwh nkbxvpr buajw pxkrvnb
cli bdwu vrwott vowtrt grle
zisgks ciuaqr zvk tcb kvz ugmtv
oegrojm wofpwp gnaocx rweyull ellhwow dtefylf dqsz oiw varr bcirpf oxusz
oydkmib oydkmib yefts gbl gbl
sruwjk pgkrp kea gppkr zdcky cfljh
obpxbax jhpcrj slcsa lgd fborz vvpaus wsrpsws ifijuzo
rixz jwh uhdaf hoacv hdfua
kntk qprmfow kntk tbmcjx
vnqe ooyxtb ixl hdmnpn orpz ykspl xromvj kowtq wmho gquos
ynk xjjqw sut lmtub bmtlu zdo dztlk bpkuul smhpx rbczg
zals csdbe sbj dibicq kdfwwt
coyy pjddlfc lwvhyms ldjdcfp ryubz kfwst dqjrjja jtv jjjaqrd
jaexhms iqoiln ewgyr exmnrr fsr lgmyy fdofhn
pjgyn hfoz zbcnz nczbz
ovntivq vcey vdrkse giu ohyaxy ionyy fvpn yvwrgrv qta
yelpz htbk njgeyub tggh mdthzp fwyux rduqli twlhfp pnh gywif ttn
yxhsbil vplsmmx rgtq grsf lyibxhs hctnkfr awg lmloz jroy lpgb wga
kzytass szyksat tyskasz ehmhhu
jkus hwjv ymnnkk yffugg cvtnits gbl lywkn szihcn dbrbalf rxqpbqh
koyfcef wkom mwok qgjrytl
slmhry lcr slmhry lcr
mvoxbt cfkz purnsui xar ouhtc thbx
xcdifw kvvxyrj knac qmypw bou tmukqy eusgaoo bktiu
ablgnhb axumg bwpxnjp zqpc vtw ghhoxu zqpc znfpvl ghhoxu jlg ntdk
vmvc cdkhrx cvz rvxk mmcuo udpcayd lsmm gufduzt linj
mgyeqkv hqionh rgnqgz kkc qrgnzg egkmqyv topdp
koa dimwx gjxa atlfdy
uuez ueuz zeuu ezo daq
ofpaw bgomvmt mqa dexpy mbipd epyzcoa nuwrh vwly xppz qkjrleo rwhnu
wok grxk lchvtg plrzr lwaax cfeu ijapws dmkdwc cfeu
zkd hysxxip hlydw wicsvy gbwoaw dapre ktjn dzg uri
blzh hblz qgmjceg fyf
vkhpn xnc ogva pjrh cxn hkpnv
aja cldzta tdcazl lorr fwmxxh knilf ges tdhp gnlo vihrl
ucpr peair nlbmc msfg
trv ppq bmo xqd vbui yegsr xqxawu fvuz aclhspo wnan
loiq fvg kare rmgq hir rzo ossd ziw renh ygtkjys vda
xmans kio alexs ujekfl vvf ddghn
fcxvsf bjuytet zrzsobo uhn mlfzhlq bjefs
zys htlqvky plno pbcqfuf fjwc vshkxrl lonp lyzmy dqmui vyyc glad
tlc krhcter krhcter bolk tlc opryl
idcii dverl uswb wusb zgax zhbt gjsnlso yhs
cti npri rcbxjdw ollj nirp ghfvxzh
blyhug aflnrrz zudyw ccnstq cyoju jxtqoj ntuknjq gunjiwy ycuoj igac cqctns
bul yehpnw jifjrhc ifetu ufrodp hqzpeqf hdvpc qtvgxg ibb wcxsitx xztshb
xzct scetn eoaufyo jtudgkx xrpgxip lpubtq juezstc nuc hokswh obkf ipbu
nfq lwpmn qltal xnphsqs zlrgf iewtrtd mqzsob duokpy kfbqs icg
vil zjz xkqrvni uay ystq
terrrnt lnfg clm lbs ptpiy ybcuup ayzjm pqugx lmc yppit mbf
dtajh vqivg vnblt fmn qxkw stiwna pclrrr fro khu wbslnqp tjyosu
uqlehn tjuiy obt uedct bbwiq uxndqn
hiqfovy xiimca zwne ivunvjk cmctzi mxnnrx dclib xzaoq ieztkg
shpr xuorihj chuwq poadbo mhtvex gymsp iltgl sypjfua fmyh sgiv
alv nxjt txnj bhact
vjvtrex obmrxk fgigs meixbc fggsi awi rxdjpeg
ypwo oicmbdw xbpeeyj uabzj cjvutvc oicmbdw immtmks
exijri hogl epr gzdqyur xiiejr pre ihzlgzu
rlh qfhx lrh qmvrx
kogq okhd mivmivb mivmivb okhd
taekt nhjaa znbaahn iaospxy jawwf
ytdvq ghtqwud jkiig mre kzmmjxu jba nwpykc
ktyzr aczd exgadhb uinrgac izazxky yyfe
yrifb qgc lsiuapg teyelxn ugezu
wdzkc ltx fkhncb hwrecp kfbchn sfcpc hjvq
rjdjyt ahwxh nvggsmx lmz oshd xbcik powse ahhxw yhiq gxmgsnv
qdr qjnam gag qjamn kooek mqnaj
pza gml opf ilfbblu kjp luilbfb rhfrzgp ixagj ofp
yphz runy dhull bozcsgk wfxekrd akgkbz urcphc
tfyxwol lhcl npik beug
szatel yfkve yfkve lzqhs
yjzqon pcjibu bdncmcl kczuymm pbmg nyn
rerqvs aoxucwi pmstl sstawu joqu abvcchg mvgjn mslpt vhmfkr utusuh
gqbec jjpqdh yeaiavi nledfi jhzwc vyxjpf momnm vnknjs nvgjzik ipm
psirt rispt lrkgma irtsp
jbbaph xvunete gsvnr mjd ifxhpry cpsx hmuokkx vhcm yth shrrl zbhd
gfa bcmlxtf sqyanrp cugg qxfvftz pbl ujsgc jajxltm gugc oil
xjuhyg aht vmyvzhh oby oyb ybo xbybgmx
atfk qjudfzz mky tfy
nxk yzy jqgg qxgjt bevvvv efi xcbw bohc zaqlqjq
hdc qpnx ygmtqw acvoa udboxw dhc klh mwgpk xfpuri
cycgbkq skwhyf skwhyf veaqss skwhyf
jnezf jowjt vsdu uck scgxd fvopomz vfajslp
djvi epgkyqn apzd cpm owm kpwih fsr adlhqu jicp pmc
erxlmhj wqxvofi ugj ttrmtsb
omku vmrgoy tdicbje ewml dfnwbap
gpih pyt ptsmzc gmdbu rqxkqmz objm nurxjz oozbere ztxug koth
jpnl jpnl dmeh qed
intdwv ksgw qwlzhq zpd lrl mwjl dozrjwq aujbet bsnf vhqyg
eqs uot qyz xor aem kmrh mrhk jqx tsbrf
irytjab mdzm qbb kkjt gofiwo xgbovg kyeyxqn tcks tljhx
zgejy qodgah nqavvx xnigdvt
eqve bizrxq lkhz yzwxgt nwe zfe sxypkz xnssept
bxqn lkfg yfxbszo sphwifz wnj crhbq dvokzw
vzn afatwye ogzvnu vnz rfjba xtugnj kpbgly ocsjd
xrc cxr rahv yvhk khyv bed ctgbuq cmqwpqa jlbg hpj vmesvw
jbshkya dgqw lfl mzcch jxsg czcmh ifruvlw ufwrlvi xcczlol cqqchmr
rbk mhn tnmqdc sxnnn kvoa mhn sxnnn mgemob ieiyajs
cqi ghxg ghxg ghxg
uqwdxn qli gdtkngp gnptdgk udxqwn
dmcczr dnjaqc qwdta rhrbi hkdwe qdjcan peic iulaz xns
tcmppb nzq ecy sitdud nft ecy afrbf wvnc vmfpzx tcmppb cgb
plitv efnpq mjqav nrxxo izg lpitv rwbzdo rdbzwo
day dntga adtng agndt hhvtd
yrg iudsh gyr ryg
qttyeew tco flq bszw jkzftc wdh efcwnp mja rfmju
moch prkze uslzyv plhjuy kxczyq qlmm hgq
xtg ypz izy ixg bvs xlqgj xcy sepza abiylsg
wxvsxn bqag jnlzgxq ikxwa dfd plqxl xlgqnjz nuqvoyb emhodso gaqb
bzjdsm xmxkj fhuqn gauyw ntl kjxmx zcxdr vrds
ofjcc uxyzlk ofjcc ofjcc
zwosex kkvwobl cpudsmb kes zklf bayuojr otqnyr udbbs
iqpvzh ybds piovrh oivprh voprih pov sfl
upns cpeelht xboyk itb hsxdmt dnwgfbw upns fygf kwdpxzm mli dyy
djwutl sikh shki ikhs gecd jqkon trqyw
prbbdf vdp bvvfjcg ydqb muxygg
vhpurzn psemqe xwqfk hrvonxu nxkxacq
xicmhss tnpja qiad woipfy uvadcq usljh hzgs jntvfv wzikk
mmupc twntp upcmm pumcm
qnisuzy lppnfd uiqr eyqbain uxlp eyrfwjo olgkrps sbikam zin vckr
nmokl skfni jcdfot njzqeaj nqzjjea
slmaxx offfzqp wudicrf nfn rwfcdui cwirufd
paffi murnjd oyj lbtjdqe babuas dtqh qkt stapzl yrqlp
eedc rig zmnfmn edec ecde
bcfdf edovdj lacx nzvze sordvxj ybs ujh zvvvp rzstejg ueosuq
xrrfsd okuvem znzlvmb jwzcb bfg bmuxbc qzwfry
pqgxybd cvgra acgn ocd ancg fvfcx fbb bfb zfzv
tmmv mpywyg fwl bnvcv lcnv flw
xxnfbro papc ianru beuzx apcp rnt
wuyhycj nrnc cka ebg rncn rvo wcyhjuy
thh cmoog hwf imqfp okzpxd
rzxiqt rtaiy ytria tyria
cjkmro myif myif xyirn aqxlol wlhwibi dhzsen pzwgm bfbz bufjs qwffg
mxhiui umiihx zomyll vfieccs
yyntf rjk iivgj mwh rjk
dsshx wsmaxhc xcwuelh rdsgtr wsmaxhc rgtsfj
rdh nwlxiwu xsjzbpr bsgps
ufyo vqtzkg kpeohu mxzt fyuo gawgaq youf
hzbhut bxsnjwb zuhhbt zhhtbu
pdz sgntypg ragev hrrji goitft yphnebs xjzoo sqf jsuzijq dsocb hcxg
pptsq woomypc woomypc woomypc
axcg wfbnpql ejqb cmnn nncm csvlc wraludb pkmp whtht tfpicer
moom oomm ommo vfqeii
xvrgpp rofl yxyrkb oage nypzau pwfnkn jxnhkw cyxsi clzb adwpuh
mfbz vdtt muzhm wvwwfl ttdv
cpqgvbu byc pgfrlkr aftl tqm zcqxi juu gnf ppovxh huoa
konpcp lzordid jqng lwxs nqgj gghkxmf kyn ngqj
iorhccj xfygc cnfr tysqc xpcyf vmjpitf nut zmrk mgbrtb tcblxwf dkadwrm
kov jtmp xoatesx qxkilp rmggpfx ltpxzwf vko reqms mqq nps
hjigmk fyqy wpuwe mwmso thsimfs okcmeyh mzqkez duzaq vzhyrm uyvpkox cwivpls
ukoerf korufe zhs ntwfz hugem vriyk enfaib hrrcdgf zllsk vkiyr
shkx khxs wntpjv qdevaw noqyht nwpvjt egh hgok mukdjfi law bzbvjz
dquk kczxsq tdu trnkjs wqtdc ybvcb
hlrotxn cumcjkm qwufgle ylm nejh hnje pvaigrx myl sfvsd
szmvisn aywic vsnimsz iufmybr
zjozr zojzr qmn ffrggdh wam dafvok
nxkvlhr posmf posmf posmf zhlzb
ywis kpqpyb qae zqxpuz pcj hbsfz ejlwa lajew znuom
qxsl ussivur dstd avojo
yoeagao egpaqm ymzf kkauy ivm illir wsvchne skmamvn nqxc
cldo ixzzy vhk nra zhypgab
qjdd ecxud tbuqq mpotbdk tjdpczn knncm tyy
rbfc fhhjf innia tsjbbbv fmtcuup rapvhqz ebpzt whdbms gvjoy lykl fquvcby
bihhfwi lhal udxz uwjwp dmb
fekxamy uophet yzvv rqj zawlp ldrv mdymkzy taauf
rcwxvmh edueui ltdyo xfghz dgjig senm ifj
qcu fii axmgijj ifi oixjfsg jxagijm
sdtyr rbdh yvnvq czzuig wro
lot xkto cmpiena nht ozcg aotcw xiegl cyaouj und lsclep cexn
pgihljk cmgmv sajhi zfvbqij ogwoc ajsih zmppe
jexwkdp dwpexjk mzjydfu bff rubgdb
yshfhx emkl hshxyf mkle
dxgti jdo tkwprv pbxbrqd oiz gsbdphd qotu utfdnq tzvve bqc
ovdf bshfxyl xspjpd vljdsm mgkd djlsvm mlsjdv
etyia eytai sfq qafj xzgp ewhsn snwhe lhqp
zjz mwh dorxm ges gexo rckwsa dltoq mmntha
hqkuj ypsjcxo dixbe rmvnhjh ovnr
edc iffaxc lolu xwrvpb gva vti vit
ceuxq xbwejr lzyvm rozseit cwe mham fivpwj qtv omaktaw
alzdrk tsxbuld mdbq pgbdtoo xwf vzalric nqe jqwlxsy cbtylu dtubxsl lqm
rqjmjcs exjpn kpilcgu ihcm lfadjm mlri hpd vqs cxqwqhu twxrtk
aeuvlcp aubvnw riedvz arypagp uuvg kliehx cokt ogh xsdw cdsyywv
ddwrgvp bscaq bbfv qrbutp
jpdg uey eyu uyarl zgbk qyhqq fdvlql zmwkp
kbt bkt lebhpfu smrzt xalw mmwa zmtzfry tkb
fcvcv oewfzu fvvcc mldww lwdmw
ejrltsu sqoyx wfvsdbp bfdspvw bfir jqhgrmt ofdmrjg ysq
jzwucwn erqjd eikq knpf cvk xvqnscy eei wvfjzmj xujq cqaim boev
jqhkmr ipjpj zwno ybu krhqjm zqfyyzb dyciy
ugwsw rpwteje qtvwi pwyhrzt hfcdfmc qbovk ibws
ffy kdder qjookz bfvmvvq yjzuaj fvxllfb pjyz jcezhye fimyydt qjookz qjookz
loupd nwsc yytvuqo ltcqxnf
iho ulvxguz fxbf iqu ofjtmvq xhs ybbusd kxg mebdnah ucttcf zufb
wzdb wumuhtv kef aavv buu xmjtlur faaccl wospwff bjasr eapfsi
jau qzszci ciu inagax
kui tqig fyovsp fvwol fyovsp mzth tcp nhoq
ajdla wtpj amylu jly tvq wjqef
ofqc einz bdze tows bdze eew
avwavzt aesrsjv lbmpi hllv chdbul ezelxn
imcprs cafb clfg rsjo iylqu nvk vkrq izezlnu vkqr tyhnv
rwj zboui reh buzio wuhpvid cpzy jrw tsbuiby hmxwqr ute
ixq luwbi uoiwsjh souz ysoubw uilbw ffwjvw ewzswoh hci zmfdaov whowzse
xrhgqf xrhgqf giyv giyv
toiqgzv gakg udgdlb wvi carrn pjyha muqclu
wuxthi srtszr ourab hpds bakvy fnk yefe yfee doowxcx
ijdc ujhvls xmy hwg yetsda qelbe nang xgywo wgh
bhm icq cnam dec enksf qfctz pwxoo bdf cnma xoowp rbls
jguzh fextz yax kesaunn waljo jltcza tfzxe dezs syi ebwxnks
flvq bzgd clvqw ahtyvu xbdyv wssxx boscm grgl nqcg
caskpli hqctxxc nwpyo wjlqfqf ebti dva
wmsz fzpd ikgeq gti ejftoou ezs cqef mybojc rgwz
mdaay yfppa pavl fuuvfkh hpod tpb dhxmia emdecm rbqcwbk vecyt
neha rmvl ndp vlrm dpn debghi vyhvc
bnp zkxdu iqqkesd abtlx hmjasdq kyvekr krt srrjyd oxmfev oot
dumlcqd ccm hyir oritdz madjjw
oakqrs advfmu verrc zkfdcn btndsp
onlkinl rdtm bscfxre bnu oumyrvv kgc zkj
tfxfsgm uwmic agswclg uofezgc
wpfdyjn kjlihk etbot fbu scm gwccce xgownte wig cuaijbo
bzbdk etozk qracb oftfoo lkooe
xupzw vmxwu sis wzpxu
gbz oqbgh jwgrru bzg kwmxcfc jrurgw
agyjnyc tuec imxlult omwiyjg fiwnoqx nhmnro qtg kbr agyjnyc
koiq llreotu elrtoul dubfvgy whq
htm lll crzppb gdjaae nsmxzh gnfvn obiuy ymspzbo iuboy
thm xlfrr pbxdfo mht tygi sapxgbv mmngzf dej
eus seu qmstw ues
yvfsw esut biblze kbjcpk estu xih qzki ezlbbi blzv
ohq ugc tqqeo jygvpwm vfs ldnfibp ycbpa sml rmime
kuuow gbg nzwdaf wiimtg lam oqmm
wsbwkdd hda nqk ticz mvt
gqbljyh zqugqs cjod sxwlqy qkfs wwvwvt dsojb qbhjlgy riusoa uosari
jkphfx dbt les jsvoij rnuw mxmmchu dol vto swn
qqxe vwvephr twdqlyg cvdu xjiych clooq vkwavl whvverp yuz vkwval
txtbudi tiutdbx wqhx tws utgbf amh hmf izsez ooz
egdube nhsxjs nxjshs xoy sjsxnh
egdziod diodegz ejxn zogedid uhhkr rnm cyvvuc uqbl
rbn pinwag sidwdwv jqdbe jlbemk blkeaqq ipfqbtn zkrbp
bdryz sbh wxvn mhot wemsfm oemkff
vxyn xvdwwo xhd vyca zxjaw vfkz xhg ofsphks dyq mmzzd
yjrqsjf iiesdh envwyx rmtbmiv ggzsg ukx bprfym qmyqc vag ymho hjtoh
fuxxrd wbweptd vkoffr wbweptd
gfwcez smetli yjyh pslpz qyokpsm qsy cxjymg wqfkf obuq awz
eqhm ceest kayf heqm
rdi dti vntcf ewkmpvf jjwoihc
sfq qlb xrm ocy vtnj zdznbal zvon stln zwnj wsgalvq vhphap
pya jay mgnyo pya xmapdn
hrwbj xhr gvwl ktq ktq gvwl
rzgqi hjwtthl kxhggbl wepc hgavj ctmqug
tzfwkc xeqfath iiuwq iiuwq dhwuvy
gibagy smq getjofc lum msq ulm xuxu bilrus ily
xlv ndrkch hdcknr nqltoze xvl
wmc vuzlrj mwc atp cvpx atv ujatz
hxpafgl ymjltv nvvpy ahycdk jhpdcks ettm lvqyw ertpivm dnezwxx usi kdhcay
vrh hqyomv mcq ilwjbkz yprjxad
ugv szfitxg zeluib pfj ijm zmiigxx gltxzz jzljhgh otskue
mxp bilj jlbi tce yfted zxsqas ftyed
ykasqv ehye kirmnl upmi dojwmw wzj ykasqv ifixn vreoypz
kerbgub nnroqk onkqnr gbebkur tjhl knjo ccsem yozvrcg
ygq evkoj wkn ffljhds scxeibh egsybeg mwvi vgjblj qda ywqpp
hocvpl ozgkxp xgmj ejzyxm
gernu kks lxe nxzv sypg xle goz
xoatis fjp wzlbo dzkonz jtutyj vdonj swro tqclemv xhomap ymeqkua vaxcw
mxcyjs ywyxndk wng vpftv nsuvu
jmiyyhh gwser shgcu jmyg cjzegc hmhe eopg kmkan
smdd dmds mgqhtkh qtamih haqmit skkcy
dnj rmggy rgymg uburbao rymgg
klcpjgq ons ajyv sqryt son pjlcgkq xlobdt
piw shonk tzi mcdumz noskh tebolw yaypn
ozm mvmjgtg nxj weommiq asnmhzq xjn uobztuo cqgjh utfb oydt ommiewq
qlwgsc vvpe xgft ahpjc zjtx iyof scwqlg dxgcokx ltrefj xyzq rwto
ggqdd dqgdg ggdqd kjkmmfp
htzjam fjbg iagc xls iagc iydtf ihxl boa iydtf
vhe nqj bwgdoi hhaoa qtulz
axvyja hpdkwee hnryj prou rgadv oubjdqg knjbc
caz xibj wqkzwe peioeya vmz hesy ftb
dudwcr gupj sjrtzc xsqbb hiet nujv bebcvsj eks uuzlcx gex
kywozi tfzuc mflssw hnxxxqt zzc tzfuc hkokuv mnjg lwkavjp lvpwjak xez
izgh zfv cingjt dkf cknite qox vfz zvf
ojpu dzk tehpgnt gntpteh
glxfxa uxq ajtles ahgzn ajlste zwgc mrpu adz wuunwhc zda
hdgdtn hnoyz aromkb qujfv yjgmn tbf atw
uyvsv oaopjv uyvemxk ldpp tthe iisjk txr hebmd yxevukm rkziao znt
ypdr mnwuzvw acpg kzwz ywbn wcrr umrnlbe lkult ljify azyhu mgqoo
abmpl omsd xmyl mxyl mgoq kracrf ufm ppwi zpggh
uxfdpv jnm vvc vchunhl ubv ktj mxolsxz
fcja eci edzrb nlvksaw lhf ycohh tfztt xso ceub tyv
rkwtp tcmmvv kufg cxui hdamg suuaej fgku cvjlv
oldbgy riadoyo djsi wca zxoeq pmemqap aijxa
nyy ruxcosx xisqoz yny jvzfpbe tlfdiaj ybd jifatdl zuzv
kxwdz qvrvx svllp ergmme
swjfuv eronk favcxfm acptbh pnbjn ciqcrlt rgvdnlt icgahb
ddza xxfn use obqka bfzwjp gmf bld fyvde mxdfdl
ame bmxbyf ame bmxbyf
rdgby pyfog dybrg gdryb lpztd
sntg impd uxgxai naoalb ntnk xgix
oadpmqj oso criln izih oos
ouzjq gtl ito xefqt phnv ouzjq hoyjjj
mlp rboq lpm roqb whvp
tghcw ggshevw dzsgj ggshevw kec ggshevw
kmwhb kfcb mbhkw gemz fdh
euve veue kplrq evue
hikfiw bcdktj hcnawja gjasvwc vcht igrzly rkxijxe ikfwhi dvmp
hvksis kafs ktcs sfyqzyt etctrgt vodwr wff tskc juobnm
dpcsodn ehwc pglywfl yhdp mdiyzx
ibog umftejh cfm pnxhna wqwx yabnk ygws dqw
dezz tqw qism rarfe fpmlab xvbau irwtfs wwmoyss yvn xetqp xtqep
pchqwk npsmd jefec qok uuc ucnpz rlkakn
kudh rjysb xrdbx bkbmjfo xrdbx
rogu ssdwsus voa ncw obkxsr
tflf hlevus scq rrbpat tau wxsq wxoblt
rzr lex kqdy whtj ffnys xlgkkff msjhy dimaq hrc wyde qkwf
ghtwd wernjpn tdgwh olrfvmr edq gxvp
rjirvf skhdgln aauit bipu mubjiwp kowz gyjfbjx cmgdqs
aftfpbv agajyy aqjll vsf twh robpys lebt eav yribup
sby ymkla sxkbfwl awmd nhb vlp
kizvjj ycjswr jkzjiv vuy jijzkv jcs
cwvch xzqfal tephz lqfzax cnkbdcr mql zflaxq
jjxzwl himpra ssjf bibfiui seeaq pzse
jogrn jogrn sqew jogrn oixgwr
khonpyw iiyxir vybhc ndnxxv kzlt ipmncn
okqkqu svbemi nfn ovd xgwy edd ujet nrrbv dde vdo
jobvf dus asvio vaosi sovia
knmz qbz nkmz zmkn
isbmopr unduey impobrs hea zswciev sopbmri duuj
ocs ntgnrdu kbvtzp cvyieu fiyn znmh lhrz ixtnzrj vktbpz lbpqx vzkpbt
muduhc sabc dlyoisz kuaz ogpyepw yuog ictiiqt
xjflsf nfklvml thfh uajnmby cichyj xxoqi lpime bxpyx
riahifn bohbgd obhdgb jni qzvkf ybp hjkkwq ytutd cakcsh smfdoe tuytd
iddku nccp zgtl yne ppzpqcx lwm
refpcz uqt uqt uqt
mtn czxkagb nmt caqacrg bcakxgz
itxjii uethxbj vpds bsqod diqax inv zrwt doepe
bfyaj nbvhg zmi buf
dtre dkwdr nrapm qtfth odvt bbcnae vxuk gqm enlg
ybt qcfozrk yzrh bfp euuozuz pzsdkxx mhi nbkzprb
vpuhqn gyx caint antci vfep incat kqdakdx
ddhi chgnjk ibg xbemitr mjtdph eovw
ngbtuvq qdttlsg dbqhhwk bkrqze qdttlsg qdttlsg
evn smvhi dgcmn xjo ascc ahbpj uvzc pwn tung
ksu thr omg onvsqzz rllakar ysfjtfj grxwyx oawix gpk suk
qvb iouav yhtndkd vuoia ouaiv
kud kofcip hcczrgc cvvxxlk rvyamwe duthdzr dftun
rgv ynw gph tmxwfup nwy
dnc trawj kwzbx trawj zvp
ogqxijy tbqtsg tbo vqinnlq jbvgl sfafh rve mcxqs ubh
qccr lpv puuvdyb tydaflf uxic
tlon tbfwkxg tlon tlon
iytiz qjlqaqw uixb lnt zwro uzgxqfi gklgnqs zwgoidw iifk wkwdo
tmvhxw tmvhxw tmvhxw fhiqpjy ejk kvysd
cmphg xjjz groiccd dvetuk xbwa zhm lyi ohhd neg bxaw yil
kdmzopy lxx bvhach goxmxu qbqvzcm qbbrhvb nrfom aixmio grpxz hbrqbbv lkucih
bnqn phqr uycuxc mopyyfh bbpesqm stgigq stggqi cwtjm asqhpl imvlxj lbmloo
pws iuvbvjr cwccm qbr srqnstz cjebq
bfh jobkcy gtbroe lpagq icmax jobyck fbh
ounqdo qrrr pwi alho rrqr beao rsioepe
vrccqge qvcgrce cbslkjs qnclw rvmjkw
aaxjns deupjs wtgxtp penad depbho tbrdt depbho qxg zhjxpgd
drqfo kbp jfa jaf
izn oczcitj cpae quvzqo iwwk jck idjdpm
ecort zgcvxx bvh vrprsf
fhubfvy ndcfjo kol hyufbfv hvpka
kpt zgajpc rjvsxa gayznjd
xeoixk peq kfu lqa mjnv mzvh bicl hlfk
wyt imdx lksy twy
xeptp ilxs qbsqzwn rsy slxi xtpep dsdkekl
rotvbt fuirp elos ciu nhx bxej trmtx ixn xbpc vrxtma
skcprn yns sao ghlq vftezvc aaryahy telt
fkaov gexa xijv yiksa xega dhgw okfva gxxs edkecag mqbqvrm nrzcqub
ljc jujxeof fdj gdzjzr mabbktu pmyrfv uspven zxry snt hrah
nhujhdr jdhrnuh midm bbavhpp cpjk zmpbasz eptrpou znq zqn
ywzfq wuu lfflon uuw rke qzwyf hjbms gakx
yqrq zsk jzn uuuzrml kzs lseupsg waynfh blech
gwyqej weyjqg uwuje uujwe
lxud rnwkc bgygkh csq rfvtos ystqp keb gkakodj uthcce eqxifl
elvj evj rfwo vvgkosh aarcgjs utsbh orwf jxcqvmh uowmktl qtgf
bqszre oxntty ombwiz mbiwzo
ccp iilcc tacf czk giwv erqi jgdfah wip xtrzhv wosvbyb
gymyw rwsxeg gvydr izyk spsonkg knospsg
djj tbr tbr tbr ice
yyzh zkykapw puydtik ysxc hjumhsd cuhhw dnnhida yyzh lnklymg
nhbcxsu ccrbbyw scbxunh ghxrkqh brcwcyb
latdaav sexa ipzuzjl ayusb etb fshh
giz akqd vjmabii arfuzgv efrww jxkvolg efrww vrnzgbx
jmcc vqy adkzj fqrkdo tjrczp ccmj cfponk rptzjc
jsviu sraw imsj fujm cdf xwqhl lhz ojejzuy trtqblg
ibz dulm muoq quom etvjzxn tuhrpp jfukac jqctqn qhgbae msgmcit ludm
zgx bpfa elhp rnyqtq wyceube nkeuxz
lzxfo vygpecv jszacku zfxlo
cpmv ysaaj xnp wbvqg hrsiuj venjxna yeqvwmk ftaga dcqxc jgapb rqdixp
xpbbe tyn hfdlu fto wrgzkou sxylv cqto wdv xqc pnu rapk
pkrxypl wnu oipq tzbhnc gpug tgzf ofjb
mvaz bwcv gll itgcye dessw szt gzimgeu bvmohh wbywyhc kzerxbr anjsive
lhvnrzs qkmjwy pnyciwp mgp jfdz ghvtf yusfzg upab
xbscukx aubulj snbcmc uscxkbx ddpucyg
hgv ollh yzpjmpy fcicyae vhg gvh
prd onyd iux oik xui
zipadig nvewx cir lbpcusx dljqy
ifyxzsc btmy lsu tmyb lus ldyzx
egmyxbe ieasvek dylmj qahtatr uyqgbk
mejjczw spj vaekp kdud
vwan mgenld mnlged vpfuil euoxlr rclkpi dfknyoa rhthij kcyxl qaxab crlpik
pqm eihogk iwml nuauxi ngilkoh jmu mbdi cqxz nblb rmuj zczdgp
pswbe mtzch wbeps fxtnc psa aioff pas
prwrpvz oadpqvz tgzrt giom pjyihh rxdir dmya xjolzxv
khdybe obqkjn kdq jkvmgwo enpat wyw qjbnko waid msest wwkoyts
yep liv ofmtpod imdd qyw
afnrx jgn gxarpb myltj ggrsajy mdaobjo vbtn vbtn zlziz eds
hqr kqu oub skoeqk icnfm cqvld aay bto
rga odaf exoosh pwevx zpbd plaa xoseoh
mbr gqu oxvchrt nqa larxmjx pfozej
ozuo ywubjbg xcua eblwqp nfdvw hmhen zkjfu gmhgp bsyi ktprtf
src vrysby srybvy znwjm hmypwdl gdmau pqe
cldr crhi lbaq fbuduyn hygbz uhida
qrxukq dygkp oaks soka oask
vpido ajgfq pwlv hezt fmg epwrxo rqvjke iovpd hhkjm
anxf ydl xnfa hqph olorp
exydcg onxjm psqlbv ehz boar hze qsblpv
mnzrvc ipj swg ijp sgw gdkntsd fzz grqwly
erpq qghpj fay gci uglm afy
jwbq hbxaub jpdilyt yvalrlk topl qup
eczonk ftcc paltirb owz tihhe dglxory wthvqcb qdnxm lirejh alyxsr
ooruaby gboyeu lkv arrz jcqyzl uxlfk fhmeony fcmh
wzr xjb pwmf okqj adwcedy lkidve uwekxf asbdzr biub
dikhur pxgh urdinjh wednf ulzdxs
iplf byt tyt qnnlba pzt bednml ljjtkvo tjovlkj uwms xat
htzk ltmfha xikeze atfmhl fchxhyz
lqala bqwgcul vetaa xuxjau zcb wtdmomu wfqmpq sief uyblyz ahv
aytvvo awm ojaaigg awm dbfaokz
abq npcyld fzbfku oia qss jkxldm wgtmki pasgxi dieix rpqnuac tecnfy
nmr qzfj qjfz lsz vnahex
djxoo jzlkh svy xige
tjlkkg glcuvmh fwzlhi ecun qlgulj hrfhyql qgdlf ofakqdf zokkvm gelxkq oowgs
upfpk gfstjlv lxc rjd nhj sbq jpzsz zsjzp
favd nzqfdid nekfjsf mtjndu
sgdqx uvpuefv vhwrgd aivav gsqxd jdhfoq
llaf cthbgy njrpw fqgkx jzf xqkgf lnrfrm gkxqf
wzdwlc wisst alw kyjeur sjsqfcr tta bijnyn whfyoxl
dtjr baxkj lmnyrlg nrmyllg
mtgky xmwf zdko nnocxye gytkm ygp hixk xwmf
maudjy okgjga uadjmy dzfrk omd
azz ajdcqkd bcafn zaz dcjaqdk gylyzo
xzvfbf fopmfxu mvftgr mfupoxf coyhof talcc vpkslo
`;

describe('part one', () => {
  [
    ['aa bb cc dd ee', true],
    ['aa bb cc dd aa', false],
    ['aa bb cc dd aaa', true]
  ].forEach(([input, expected], index) => {
    test(`${index} has expected result`, () => {
      expect(passphraseValidator(input as string)).toBe(expected);
    });
  });

  test('it can get all valid passphrases from input', () => {
    expect(getValidPassphrases(INPUT)).toBe(451);
  });
});

describe('part two', () => {
  [
    ['abcde fghij', true],
    ['abcde xyz ecdab', false],
    ['a ab abc abd abf abj', true],
    ['iiii oiii ooii oooi oooo', true],
    ['oiii ioii iioi iiio', false]
  ].forEach(([input, expected], index) => {
    test(`${index} has expected result`, () => {
      expect(passphraseValidator(input as string, true)).toBe(expected);
    });
  });

  test('it can get all valid passphrases from input', () => {
    expect(getValidPassphrases(INPUT, true)).toBe(223);
  });
});
