import { Dispatch, MouseEvent, SetStateAction } from 'react'

export type StateDispatch<T> = Dispatch<SetStateAction<T>>

export interface LooseObject {
  [key: string]: any
}
export type TMQSignal =
  | '<'
  | 'small'
  | '<='
  | 'small='
  | '>'
  | 'big'
  | '>='
  | 'big='
  | '='
  | '=='
  | '==='
  | 'eq'
  | 'equal'
  | '!='
  | '!=='
  | 'diff'

export type Size = 'normal' | 'big' | 'big12' | 'wide' | 'full'
export type SizeLiteral = { [key in Size]?: key }

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type BreakpointLiteral = { [key in Breakpoint]?: key }

export type Color =
  | 'black'
  | 'blueblack'
  | 'bluegrey'
  | 'darkblue'
  | 'lightblue'
  | 'lightgrey'
  | 'orange'
  | 'transparent'
  | 'white'
  | 'grey'
  | 'teal'
  | 'purple'
  | 'yellow'
  | 'deep-purple'

export type ColorLiteral = { [key in Color]?: key }

export type ColorTint = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800'
export type ColorTintLiteral = { [key in Color]?: key }

export type Side = 'left' | 'right'
export type SideLiteral = { [key in Side]?: key }

export type Icon =
  | 'ui-16-arrowdown'
  | 'ui-16-arrowleft'
  | 'ui-16-arrowright'
  | 'ui-16-arrowup'
  | 'ui-16-bag'
  | 'ui-16-bookmark'
  | 'ui-16-call'
  | 'ui-16-caretdown'
  | 'ui-16-caretleft'
  | 'ui-16-caretright'
  | 'ui-16-caretup'
  | 'ui-16-checkmark'
  | 'ui-16-close'
  | 'ui-16-delete'
  | 'ui-16-document'
  | 'ui-16-done'
  | 'ui-16-download'
  | 'ui-16-edit'
  | 'ui-16-email'
  | 'ui-16-error'
  | 'ui-16-external'
  | 'ui-16-favorite'
  | 'ui-16-fullscreen'
  | 'ui-16-global'
  | 'ui-16-home'
  | 'ui-16-info'
  | 'ui-16-like'
  | 'ui-16-menu'
  | 'ui-16-message'
  | 'ui-16-minus'
  | 'ui-16-more'
  | 'ui-16-navigation'
  | 'ui-16-number1'
  | 'ui-16-number2'
  | 'ui-16-pause'
  | 'ui-16-plus'
  | 'ui-16-profile'
  | 'ui-16-question'
  | 'ui-16-recent'
  | 'ui-16-refresh'
  | 'ui-16-search'
  | 'ui-16-sendemail'
  | 'ui-16-settings'
  | 'ui-16-upload'
  | 'ui-16-video'
  | 'ui-16-warning'
  | 'ui-play'
  | 'ui-external'
  | 'ui-edit'
  | 'ui-pause'
  | 'ui-minus'
  | 'ui-search'
  | 'ui-menu'
  | 'ui-close'
  | 'ui-done'
  | 'ui-carrousselarrow2'
  | 'ui-carrousselarrow1'
  | 'ui-caretdown'
  | 'ui-fullscreen'
  | 'ui-done'
  | 'ui-caretleft'
  | 'ui-caretright'
  | 'ui-arrowdown'
  | 'ui-arrowleft'
  | 'ui-arrowright'
  | 'ui-arrowup'
  | 'ui-checkmark'
  | 'ui-error'
  | 'ui-bag'
  | 'ui-bookmark'
  | 'ui-call'
  | 'ui-caretup'
  | 'ui-delete'
  | 'ui-document'
  | 'ui-download'
  | 'ui-email'
  | 'ui-favorite'
  | 'ui-global'
  | 'ui-home'
  | 'ui-info'
  | 'ui-message'
  | 'ui-like'
  | 'ui-more'
  | 'ui-navigation'
  | 'ui-number1'
  | 'ui-number2'
  | 'ui-plus'
  | 'ui-profile'
  | 'ui-question'
  | 'ui-recent'
  | 'ui-refresh'
  | 'ui-sendemail'
  | 'ui-settings'
  | 'ui-upload'
  | 'ui-warning'
  | 'techdojo-sre'
  | 'techdojo-security'
  | 'techdojo-salesforce'
  | 'techdojo-salesengineer'
  | 'techdojo-qaautomations'
  | 'techdojo-mobile'
  | 'techdojo-fullstack'
  | 'techdojo-frontend'
  | 'techdojo-datascience'
  | 'techdojo-creative'
  | 'techdojo-backend'
  | 'social-youtube'
  | 'social-twitter'
  | 'social-email'
  | 'social-linkedin'
  | 'social-instagram'
  | 'social-google'
  | 'social-facebook'
  | 'features-xconnect'
  | 'features-wifi'
  | 'features-webtolead'
  | 'features-website'
  | 'features-web'
  | 'features-waiting'
  | 'features-voicemail'
  | 'features-voicecarrier'
  | 'features-voiceanalytics'
  | 'features-voice'
  | 'features-visualflowdesigner'
  | 'features-virtualagent'
  | 'features-video'
  | 'features-vendor'
  | 'features-upfrontpricing'
  | 'features-unlimitedconcurrentcalls'
  | 'features-ucaas'
  | 'features-travel'
  | 'features-transcript'
  | 'features-toppremium'
  | 'features-time'
  | 'features-talkdeskacademy'
  | 'features-survey'
  | 'features-supervisor'
  | 'features-studio'
  | 'features-sponsors'
  | 'features-sponsor'
  | 'features-speed'
  | 'features-speakers'
  | 'features-socialmedia'
  | 'features-smsgateway'
  | 'features-sms'
  | 'features-smart'
  | 'features-skillsbasedrouting'
  | 'features-sipproxy'
  | 'features-singlesignon'
  | 'features-simpletodeploy'
  | 'features-simple'
  | 'features-settings'
  | 'features-sessions'
  | 'features-servicelevel'
  | 'features-sentimentanalysis'
  | 'features-sentiment'
  | 'features-sendreceive'
  | 'features-selectcloud'
  | 'features-selfservice'
  | 'features-security'
  | 'features-search'
  | 'features-seamlesstransfercalls'
  | 'features-scrollformore'
  | 'features-scriptadherence'
  | 'features-screenpopnotifications'
  | 'features-scheduledreporting'
  | 'features-sbc'
  | 'features-saveyourcpu'
  | 'features-savetimesimplesetup'
  | 'features-routing'
  | 'features-ringgroups'
  | 'features-results'
  | 'features-regionalcloud'
  | 'features-responsive'
  | 'features-realtimeupdates'
  | 'features-realtimereporting'
  | 'features-realtimeshortcuts'
  | 'features-progressivesoftware'
  | 'features-qualitymanagement'
  | 'features-productivity'
  | 'features-privatenetwork'
  | 'features-priority'
  | 'features-presentation'
  | 'features-powerdialer'
  | 'features-prediction'
  | 'features-prescriptionforassistance'
  | 'features-platformtime'
  | 'features-platform'
  | 'features-personalizedgreetings'
  | 'features-permissionssecure'
  | 'features-pbxpabx'
  | 'features-pbx'
  | 'features-payasyougo'
  | 'features-outboundcallerid'
  | 'features-outbounddialer'
  | 'features-open'
  | 'features-outboundcall'
  | 'features-oneui'
  | 'features-oneclickinstall'
  | 'features-omnichannelreporting'
  | 'features-omnichannelchatemail'
  | 'features-omnichannel'
  | 'features-numbers'
  | 'features-monitoringreporting'
  | 'features-notifications'
  | 'features-mobiledev'
  | 'features-mmaudio'
  | 'features-missedcall'
  | 'features-mediaserver'
  | 'features-location'
  | 'features-localpresence2'
  | 'features-localpresence'
  | 'features-live'
  | 'features-link'
  | 'features-leadgeneration'
  | 'features-ivr'
  | 'features-launchpad'
  | 'features-iqpoweredwfm'
  | 'features-iqpoweredstudio'
  | 'features-iqpoweredmobile'
  | 'features-iqpoweredassistant'
  | 'features-iqpoweredanalytics'
  | 'features-iq'
  | 'features-internationalnumbers'
  | 'features-integrations'
  | 'features-innovation'
  | 'features-inboundcallblocking'
  | 'features-industryeducation'
  | 'features-industryfinancial'
  | 'features-industryhealthcare'
  | 'features-industryhealthcareprescription'
  | 'features-industryhealthcarevaccine'
  | 'features-industryretail'
  | 'features-industryretailrestaurant'
  | 'features-industrytravel'
  | 'features-historicalreporting'
  | 'features-healthcare'
  | 'features-googlechrome'
  | 'features-guardian'
  | 'features-globalloadbalancers'
  | 'features-fullscreen'
  | 'features-forwardtophone'
  | 'features-finantialservices'
  | 'features-flag'
  | 'features-expansion'
  | 'features-explore'
  | 'features-externalvisitors'
  | 'features-facetime'
  | 'features-eventstrials'
  | 'features-error'
  | 'features-establishtheprojections'
  | 'features-enterpriselevel'
  | 'features-enterpriseintegrations'
  | 'features-enterpriseclass'
  | 'features-ensurecredit'
  | 'features-enhancedcaller'
  | 'features-enhancedcallerconfiguration'
  | 'features-emailnotifications'
  | 'features-emaildownloadlink'
  | 'features-email'
  | 'features-emailalerts'
  | 'features-ecommerce'
  | 'features-easytouse'
  | 'features-donotcall'
  | 'features-dispersedworkforce'
  | 'features-dev'
  | 'features-deal'
  | 'features-dataimportsynchronization'
  | 'features-datadrivendecisions1'
  | 'features-datadrivendecisions'
  | 'features-customstatus'
  | 'features-cxsensors'
  | 'features-cxtalent'
  | 'features-customreporting'
  | 'features-customfields'
  | 'features-customersgroupalerts'
  | 'features-customerservice'
  | 'features-customers'
  | 'features-customerjourney'
  | 'features-customerjourneydesigntools'
  | 'features-creditcard'
  | 'features-createtickets'
  | 'features-cpaas'
  | 'features-costs'
  | 'features-conversionrate'
  | 'features-contextmobile'
  | 'features-conversationmonitor'
  | 'features-contacttags'
  | 'features-contactsync'
  | 'features-contacthistory'
  | 'features-contacts'
  | 'features-contact360'
  | 'features-consumergradeux'
  | 'features-connections'
  | 'features-compilecontactlists'
  | 'features-communicationsecurity'
  | 'features-clicktocall'
  | 'features-cloud'
  | 'features-chat'
  | 'features-challenge'
  | 'features-callscrorecards'
  | 'features-calltranscriptioncards'
  | 'features-calls'
  | 'features-callrecording'
  | 'features-callqueues'
  | 'features-callmonitoring'
  | 'features-callforwarding'
  | 'features-calldispositioncodes'
  | 'features-callcontrol'
  | 'features-callbarpowerdialer'
  | 'features-callbarging'
  | 'features-callbar'
  | 'features-callanswered'
  | 'features-callagent'
  | 'features-businesshours'
  | 'features-builtincrm'
  | 'features-behaviour'
  | 'features-adaptable'
  | 'features-automatedtasks'
  | 'features-automaticdataentry'
  | 'features-authentication'
  | 'features-attendees'
  | 'features-assumptions'
  | 'features-assignto'
  | 'features-assistance'
  | 'features-appconnect'
  | 'features-ai'
  | 'features-agenttoagent'
  | 'features-agentreporting'
  | 'features-agentsurvey'
  | 'features-agentcollaboration'
  | 'features-agent'
  | 'features-agenda'
  | 'features-admin'
  | 'features-acd'
  | 'features-abp'
  | 'features-abandonedcall'
export type IconLiteral = { [key in Icon]?: key }

export type Target = '_self' | '_blank'
export type TargetLiteral = { [key in Target]?: key }

export type Rel =
  | 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noopener'
  | 'noreferrer'
  | 'opener'
  | 'prev'
  | 'search'
  | 'tag'
export type RelLiteral = { [key in Rel]?: key }

export type clickEvent = (event: MouseEvent<HTMLElement>, ...args: any[]) => any

export type UIType = 'field' | 'filter'
export type UITypeLiteral = { [key in UIType]?: key }

export type UIInputsType =
  | 'text'
  | 'number'
  | 'password'
  | 'email'
  | 'checkbox'
  | 'radio'
  | 'dropdown'
export type UIInputsTypeLeteral = { [key in UIInputsType]?: key }

export type UIOptionsType = 'dropdown' | 'checkbox' | 'radio' | 'tab'
export type UIOptionsTypeLeteral = { [key in UIOptionsType]?: key }

export type UIVariantType = '-primary' | '-secondary'
export type UIVariantTypeLiteral = { [key in UIVariantType]?: key }

export type TOffset = {
  left: number
  top: number
}

export default {}
