import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  GraphQLBigInt: unknown;
  GraphQLStringOrFloat: unknown;
  Hash: unknown;
  JSON: unknown;
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly create_address_item?: Maybe<Address>;
  readonly create_address_items: ReadonlyArray<Address>;
  readonly create_events_item?: Maybe<Events>;
  readonly create_events_items: ReadonlyArray<Events>;
  readonly create_events_translations_item?: Maybe<Events_Translations>;
  readonly create_events_translations_items: ReadonlyArray<Events_Translations>;
  readonly create_languages_item?: Maybe<Languages>;
  readonly create_languages_items: ReadonlyArray<Languages>;
  readonly create_links_item?: Maybe<Links>;
  readonly create_links_items: ReadonlyArray<Links>;
  readonly create_members_item?: Maybe<Members>;
  readonly create_members_items: ReadonlyArray<Members>;
  readonly create_menu_item?: Maybe<Menu>;
  readonly create_menu_items: ReadonlyArray<Menu>;
  readonly create_names_item?: Maybe<Names>;
  readonly create_names_items: ReadonlyArray<Names>;
  readonly create_pages_item?: Maybe<Pages>;
  readonly create_pages_items: ReadonlyArray<Pages>;
  readonly create_pages_translations_item?: Maybe<Pages_Translations>;
  readonly create_pages_translations_items: ReadonlyArray<Pages_Translations>;
  readonly delete_address_item?: Maybe<Delete_One>;
  readonly delete_address_items?: Maybe<Delete_Many>;
  readonly delete_events_item?: Maybe<Delete_One>;
  readonly delete_events_items?: Maybe<Delete_Many>;
  readonly delete_events_translations_item?: Maybe<Delete_One>;
  readonly delete_events_translations_items?: Maybe<Delete_Many>;
  readonly delete_languages_item?: Maybe<Delete_One>;
  readonly delete_languages_items?: Maybe<Delete_Many>;
  readonly delete_links_item?: Maybe<Delete_One>;
  readonly delete_links_items?: Maybe<Delete_Many>;
  readonly delete_members_item?: Maybe<Delete_One>;
  readonly delete_members_items?: Maybe<Delete_Many>;
  readonly delete_menu_item?: Maybe<Delete_One>;
  readonly delete_menu_items?: Maybe<Delete_Many>;
  readonly delete_names_item?: Maybe<Delete_One>;
  readonly delete_names_items?: Maybe<Delete_Many>;
  readonly delete_pages_item?: Maybe<Delete_One>;
  readonly delete_pages_items?: Maybe<Delete_Many>;
  readonly delete_pages_translations_item?: Maybe<Delete_One>;
  readonly delete_pages_translations_items?: Maybe<Delete_Many>;
  readonly update_address_batch: ReadonlyArray<Address>;
  readonly update_address_item?: Maybe<Address>;
  readonly update_address_items: ReadonlyArray<Address>;
  readonly update_events_batch: ReadonlyArray<Events>;
  readonly update_events_item?: Maybe<Events>;
  readonly update_events_items: ReadonlyArray<Events>;
  readonly update_events_translations_batch: ReadonlyArray<Events_Translations>;
  readonly update_events_translations_item?: Maybe<Events_Translations>;
  readonly update_events_translations_items: ReadonlyArray<Events_Translations>;
  readonly update_languages_batch: ReadonlyArray<Languages>;
  readonly update_languages_item?: Maybe<Languages>;
  readonly update_languages_items: ReadonlyArray<Languages>;
  readonly update_links_batch: ReadonlyArray<Links>;
  readonly update_links_item?: Maybe<Links>;
  readonly update_links_items: ReadonlyArray<Links>;
  readonly update_members_batch: ReadonlyArray<Members>;
  readonly update_members_item?: Maybe<Members>;
  readonly update_members_items: ReadonlyArray<Members>;
  readonly update_menu_batch: ReadonlyArray<Menu>;
  readonly update_menu_item?: Maybe<Menu>;
  readonly update_menu_items: ReadonlyArray<Menu>;
  readonly update_names_batch: ReadonlyArray<Names>;
  readonly update_names_item?: Maybe<Names>;
  readonly update_names_items: ReadonlyArray<Names>;
  readonly update_pages_batch: ReadonlyArray<Pages>;
  readonly update_pages_item?: Maybe<Pages>;
  readonly update_pages_items: ReadonlyArray<Pages>;
  readonly update_pages_translations_batch: ReadonlyArray<Pages_Translations>;
  readonly update_pages_translations_item?: Maybe<Pages_Translations>;
  readonly update_pages_translations_items: ReadonlyArray<Pages_Translations>;
};


export type MutationCreate_Address_ItemArgs = {
  data: Create_Address_Input;
};


export type MutationCreate_Address_ItemsArgs = {
  data?: InputMaybe<ReadonlyArray<Create_Address_Input>>;
  filter?: InputMaybe<Address_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Events_ItemArgs = {
  data: Create_Events_Input;
};


export type MutationCreate_Events_ItemsArgs = {
  data?: InputMaybe<ReadonlyArray<Create_Events_Input>>;
  filter?: InputMaybe<Events_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Events_Translations_ItemArgs = {
  data: Create_Events_Translations_Input;
};


export type MutationCreate_Events_Translations_ItemsArgs = {
  data?: InputMaybe<ReadonlyArray<Create_Events_Translations_Input>>;
  filter?: InputMaybe<Events_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Languages_ItemArgs = {
  data: Create_Languages_Input;
};


export type MutationCreate_Languages_ItemsArgs = {
  data?: InputMaybe<ReadonlyArray<Create_Languages_Input>>;
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Links_ItemArgs = {
  data: Create_Links_Input;
};


export type MutationCreate_Links_ItemsArgs = {
  data?: InputMaybe<ReadonlyArray<Create_Links_Input>>;
  filter?: InputMaybe<Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Members_ItemArgs = {
  data: Create_Members_Input;
};


export type MutationCreate_Members_ItemsArgs = {
  data?: InputMaybe<ReadonlyArray<Create_Members_Input>>;
  filter?: InputMaybe<Members_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Menu_ItemArgs = {
  data: Create_Menu_Input;
};


export type MutationCreate_Menu_ItemsArgs = {
  data?: InputMaybe<ReadonlyArray<Create_Menu_Input>>;
  filter?: InputMaybe<Menu_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Names_ItemArgs = {
  data: Create_Names_Input;
};


export type MutationCreate_Names_ItemsArgs = {
  data?: InputMaybe<ReadonlyArray<Create_Names_Input>>;
  filter?: InputMaybe<Names_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Pages_ItemArgs = {
  data: Create_Pages_Input;
};


export type MutationCreate_Pages_ItemsArgs = {
  data?: InputMaybe<ReadonlyArray<Create_Pages_Input>>;
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Pages_Translations_ItemArgs = {
  data: Create_Pages_Translations_Input;
};


export type MutationCreate_Pages_Translations_ItemsArgs = {
  data?: InputMaybe<ReadonlyArray<Create_Pages_Translations_Input>>;
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationDelete_Address_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Address_ItemsArgs = {
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Events_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Events_ItemsArgs = {
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Events_Translations_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Events_Translations_ItemsArgs = {
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Languages_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Languages_ItemsArgs = {
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Links_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Links_ItemsArgs = {
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Members_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Members_ItemsArgs = {
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Menu_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Menu_ItemsArgs = {
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Names_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Names_ItemsArgs = {
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Pages_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Pages_ItemsArgs = {
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Pages_Translations_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Pages_Translations_ItemsArgs = {
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdate_Address_BatchArgs = {
  data?: InputMaybe<ReadonlyArray<Update_Address_Input>>;
  filter?: InputMaybe<Address_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Address_ItemArgs = {
  data: Update_Address_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Address_ItemsArgs = {
  data: Update_Address_Input;
  filter?: InputMaybe<Address_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Events_BatchArgs = {
  data?: InputMaybe<ReadonlyArray<Update_Events_Input>>;
  filter?: InputMaybe<Events_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Events_ItemArgs = {
  data: Update_Events_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Events_ItemsArgs = {
  data: Update_Events_Input;
  filter?: InputMaybe<Events_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Events_Translations_BatchArgs = {
  data?: InputMaybe<ReadonlyArray<Update_Events_Translations_Input>>;
  filter?: InputMaybe<Events_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Events_Translations_ItemArgs = {
  data: Update_Events_Translations_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Events_Translations_ItemsArgs = {
  data: Update_Events_Translations_Input;
  filter?: InputMaybe<Events_Translations_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Languages_BatchArgs = {
  data?: InputMaybe<ReadonlyArray<Update_Languages_Input>>;
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Languages_ItemArgs = {
  data: Update_Languages_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Languages_ItemsArgs = {
  data: Update_Languages_Input;
  filter?: InputMaybe<Languages_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Links_BatchArgs = {
  data?: InputMaybe<ReadonlyArray<Update_Links_Input>>;
  filter?: InputMaybe<Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Links_ItemArgs = {
  data: Update_Links_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Links_ItemsArgs = {
  data: Update_Links_Input;
  filter?: InputMaybe<Links_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Members_BatchArgs = {
  data?: InputMaybe<ReadonlyArray<Update_Members_Input>>;
  filter?: InputMaybe<Members_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Members_ItemArgs = {
  data: Update_Members_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Members_ItemsArgs = {
  data: Update_Members_Input;
  filter?: InputMaybe<Members_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Menu_BatchArgs = {
  data?: InputMaybe<ReadonlyArray<Update_Menu_Input>>;
  filter?: InputMaybe<Menu_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Menu_ItemArgs = {
  data: Update_Menu_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Menu_ItemsArgs = {
  data: Update_Menu_Input;
  filter?: InputMaybe<Menu_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Names_BatchArgs = {
  data?: InputMaybe<ReadonlyArray<Update_Names_Input>>;
  filter?: InputMaybe<Names_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Names_ItemArgs = {
  data: Update_Names_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Names_ItemsArgs = {
  data: Update_Names_Input;
  filter?: InputMaybe<Names_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Pages_BatchArgs = {
  data?: InputMaybe<ReadonlyArray<Update_Pages_Input>>;
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Pages_ItemArgs = {
  data: Update_Pages_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Pages_ItemsArgs = {
  data: Update_Pages_Input;
  filter?: InputMaybe<Pages_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Pages_Translations_BatchArgs = {
  data?: InputMaybe<ReadonlyArray<Update_Pages_Translations_Input>>;
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Pages_Translations_ItemArgs = {
  data: Update_Pages_Translations_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Pages_Translations_ItemsArgs = {
  data: Update_Pages_Translations_Input;
  filter?: InputMaybe<Pages_Translations_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly address: ReadonlyArray<Address>;
  readonly address_aggregated: ReadonlyArray<Address_Aggregated>;
  readonly address_by_id?: Maybe<Address>;
  readonly events: ReadonlyArray<Events>;
  readonly events_aggregated: ReadonlyArray<Events_Aggregated>;
  readonly events_by_id?: Maybe<Events>;
  readonly events_translations: ReadonlyArray<Events_Translations>;
  readonly events_translations_aggregated: ReadonlyArray<Events_Translations_Aggregated>;
  readonly events_translations_by_id?: Maybe<Events_Translations>;
  readonly languages: ReadonlyArray<Languages>;
  readonly languages_aggregated: ReadonlyArray<Languages_Aggregated>;
  readonly languages_by_id?: Maybe<Languages>;
  readonly links: ReadonlyArray<Links>;
  readonly links_aggregated: ReadonlyArray<Links_Aggregated>;
  readonly links_by_id?: Maybe<Links>;
  readonly members: ReadonlyArray<Members>;
  readonly members_aggregated: ReadonlyArray<Members_Aggregated>;
  readonly members_by_id?: Maybe<Members>;
  readonly menu: ReadonlyArray<Menu>;
  readonly menu_aggregated: ReadonlyArray<Menu_Aggregated>;
  readonly menu_by_id?: Maybe<Menu>;
  readonly names: ReadonlyArray<Names>;
  readonly names_aggregated: ReadonlyArray<Names_Aggregated>;
  readonly names_by_id?: Maybe<Names>;
  readonly pages: ReadonlyArray<Pages>;
  readonly pages_aggregated: ReadonlyArray<Pages_Aggregated>;
  readonly pages_by_id?: Maybe<Pages>;
  readonly pages_translations: ReadonlyArray<Pages_Translations>;
  readonly pages_translations_aggregated: ReadonlyArray<Pages_Translations_Aggregated>;
  readonly pages_translations_by_id?: Maybe<Pages_Translations>;
};


export type QueryAddressArgs = {
  filter?: InputMaybe<Address_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryAddress_AggregatedArgs = {
  filter?: InputMaybe<Address_Filter>;
  groupBy?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryAddress_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryEventsArgs = {
  filter?: InputMaybe<Events_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryEvents_AggregatedArgs = {
  filter?: InputMaybe<Events_Filter>;
  groupBy?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryEvents_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryEvents_TranslationsArgs = {
  filter?: InputMaybe<Events_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryEvents_Translations_AggregatedArgs = {
  filter?: InputMaybe<Events_Translations_Filter>;
  groupBy?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryEvents_Translations_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryLanguages_AggregatedArgs = {
  filter?: InputMaybe<Languages_Filter>;
  groupBy?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryLanguages_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryLinksArgs = {
  filter?: InputMaybe<Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryLinks_AggregatedArgs = {
  filter?: InputMaybe<Links_Filter>;
  groupBy?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryLinks_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryMembersArgs = {
  filter?: InputMaybe<Members_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryMembers_AggregatedArgs = {
  filter?: InputMaybe<Members_Filter>;
  groupBy?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryMembers_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryMenuArgs = {
  filter?: InputMaybe<Menu_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryMenu_AggregatedArgs = {
  filter?: InputMaybe<Menu_Filter>;
  groupBy?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryMenu_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryNamesArgs = {
  filter?: InputMaybe<Names_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryNames_AggregatedArgs = {
  filter?: InputMaybe<Names_Filter>;
  groupBy?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryNames_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPagesArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_AggregatedArgs = {
  filter?: InputMaybe<Pages_Filter>;
  groupBy?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPages_TranslationsArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_Translations_AggregatedArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  groupBy?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_Translations_By_IdArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly address_mutated?: Maybe<Address_Mutated>;
  readonly directus_activity_mutated?: Maybe<Directus_Activity_Mutated>;
  readonly directus_dashboards_mutated?: Maybe<Directus_Dashboards_Mutated>;
  readonly directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  readonly directus_flows_mutated?: Maybe<Directus_Flows_Mutated>;
  readonly directus_folders_mutated?: Maybe<Directus_Folders_Mutated>;
  readonly directus_notifications_mutated?: Maybe<Directus_Notifications_Mutated>;
  readonly directus_operations_mutated?: Maybe<Directus_Operations_Mutated>;
  readonly directus_panels_mutated?: Maybe<Directus_Panels_Mutated>;
  readonly directus_permissions_mutated?: Maybe<Directus_Permissions_Mutated>;
  readonly directus_presets_mutated?: Maybe<Directus_Presets_Mutated>;
  readonly directus_revisions_mutated?: Maybe<Directus_Revisions_Mutated>;
  readonly directus_roles_mutated?: Maybe<Directus_Roles_Mutated>;
  readonly directus_settings_mutated?: Maybe<Directus_Settings_Mutated>;
  readonly directus_shares_mutated?: Maybe<Directus_Shares_Mutated>;
  readonly directus_translations_mutated?: Maybe<Directus_Translations_Mutated>;
  readonly directus_users_mutated?: Maybe<Directus_Users_Mutated>;
  readonly directus_webhooks_mutated?: Maybe<Directus_Webhooks_Mutated>;
  readonly events_mutated?: Maybe<Events_Mutated>;
  readonly events_translations_mutated?: Maybe<Events_Translations_Mutated>;
  readonly languages_mutated?: Maybe<Languages_Mutated>;
  readonly links_mutated?: Maybe<Links_Mutated>;
  readonly members_mutated?: Maybe<Members_Mutated>;
  readonly menu_mutated?: Maybe<Menu_Mutated>;
  readonly names_mutated?: Maybe<Names_Mutated>;
  readonly pages_mutated?: Maybe<Pages_Mutated>;
  readonly pages_translations_mutated?: Maybe<Pages_Translations_Mutated>;
};


export type SubscriptionAddress_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Activity_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Dashboards_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Flows_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Folders_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Notifications_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Operations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Panels_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Permissions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Presets_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Revisions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Roles_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Shares_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Webhooks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionEvents_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionEvents_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLanguages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLinks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionMembers_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionMenu_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionNames_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionPages_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Address = {
  readonly __typename?: 'address';
  readonly city: Scalars['String'];
  readonly country: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly street: Scalars['String'];
  readonly zip: Scalars['String'];
};

export type Address_Aggregated = {
  readonly __typename?: 'address_aggregated';
  readonly avg?: Maybe<Address_Aggregated_Fields>;
  readonly avgDistinct?: Maybe<Address_Aggregated_Fields>;
  readonly count?: Maybe<Address_Aggregated_Count>;
  readonly countAll?: Maybe<Scalars['Int']>;
  readonly countDistinct?: Maybe<Address_Aggregated_Count>;
  readonly group?: Maybe<Scalars['JSON']>;
  readonly max?: Maybe<Address_Aggregated_Fields>;
  readonly min?: Maybe<Address_Aggregated_Fields>;
  readonly sum?: Maybe<Address_Aggregated_Fields>;
  readonly sumDistinct?: Maybe<Address_Aggregated_Fields>;
};

export type Address_Aggregated_Count = {
  readonly __typename?: 'address_aggregated_count';
  readonly city?: Maybe<Scalars['Int']>;
  readonly country?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly street?: Maybe<Scalars['Int']>;
  readonly zip?: Maybe<Scalars['Int']>;
};

export type Address_Aggregated_Fields = {
  readonly __typename?: 'address_aggregated_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

export type Address_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Address_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Address_Filter>>>;
  readonly city?: InputMaybe<String_Filter_Operators>;
  readonly country?: InputMaybe<String_Filter_Operators>;
  readonly id?: InputMaybe<Number_Filter_Operators>;
  readonly street?: InputMaybe<String_Filter_Operators>;
  readonly zip?: InputMaybe<String_Filter_Operators>;
};

export type Address_Mutated = {
  readonly __typename?: 'address_mutated';
  readonly data?: Maybe<Address>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Boolean_Filter_Operators = {
  readonly _eq?: InputMaybe<Scalars['Boolean']>;
  readonly _neq?: InputMaybe<Scalars['Boolean']>;
  readonly _nnull?: InputMaybe<Scalars['Boolean']>;
  readonly _null?: InputMaybe<Scalars['Boolean']>;
};

export type Count_Function_Filter_Operators = {
  readonly count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  readonly __typename?: 'count_functions';
  readonly count?: Maybe<Scalars['Int']>;
};

export type Create_Address_Input = {
  readonly city: Scalars['String'];
  readonly country: Scalars['String'];
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly street: Scalars['String'];
  readonly zip: Scalars['String'];
};

export type Create_Directus_Files_Input = {
  readonly charset?: InputMaybe<Scalars['String']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly duration?: InputMaybe<Scalars['Int']>;
  readonly embed?: InputMaybe<Scalars['String']>;
  readonly filename_disk?: InputMaybe<Scalars['String']>;
  readonly filename_download: Scalars['String'];
  readonly filesize?: InputMaybe<Scalars['GraphQLBigInt']>;
  readonly folder?: InputMaybe<Create_Directus_Folders_Input>;
  readonly height?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly location?: InputMaybe<Scalars['String']>;
  readonly metadata?: InputMaybe<Scalars['JSON']>;
  readonly modified_by?: InputMaybe<Create_Directus_Users_Input>;
  readonly modified_on?: InputMaybe<Scalars['Date']>;
  readonly storage: Scalars['String'];
  readonly tags?: InputMaybe<Scalars['JSON']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['String']>;
  readonly uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  readonly uploaded_on?: InputMaybe<Scalars['Date']>;
  readonly width?: InputMaybe<Scalars['Int']>;
};

export type Create_Directus_Folders_Input = {
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly name: Scalars['String'];
  readonly parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Roles_Input = {
  readonly admin_access: Scalars['Boolean'];
  readonly app_access?: InputMaybe<Scalars['Boolean']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly enforce_tfa: Scalars['Boolean'];
  readonly icon?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly ip_access?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly name: Scalars['String'];
  readonly users?: InputMaybe<ReadonlyArray<InputMaybe<Create_Directus_Users_Input>>>;
};

export type Create_Directus_Users_Input = {
  readonly auth_data?: InputMaybe<Scalars['JSON']>;
  readonly avatar?: InputMaybe<Create_Directus_Files_Input>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly email_notifications?: InputMaybe<Scalars['Boolean']>;
  readonly external_identifier?: InputMaybe<Scalars['String']>;
  readonly first_name?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly language?: InputMaybe<Scalars['String']>;
  readonly last_access?: InputMaybe<Scalars['Date']>;
  readonly last_name?: InputMaybe<Scalars['String']>;
  readonly last_page?: InputMaybe<Scalars['String']>;
  readonly location?: InputMaybe<Scalars['String']>;
  readonly password?: InputMaybe<Scalars['Hash']>;
  readonly provider?: InputMaybe<Scalars['String']>;
  readonly role?: InputMaybe<Create_Directus_Roles_Input>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly tags?: InputMaybe<Scalars['JSON']>;
  readonly tfa_secret?: InputMaybe<Scalars['Hash']>;
  readonly theme?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly token?: InputMaybe<Scalars['Hash']>;
};

export type Create_Events_Input = {
  /** Date of the event */
  readonly date: Scalars['Date'];
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly location: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly status?: InputMaybe<Scalars['String']>;
  readonly time?: InputMaybe<Scalars['String']>;
  readonly translations?: InputMaybe<ReadonlyArray<InputMaybe<Create_Events_Translations_Input>>>;
  readonly type: Scalars['String'];
};

export type Create_Events_Translations_Input = {
  readonly body: Scalars['String'];
  readonly events_id?: InputMaybe<Create_Events_Input>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly languages_id?: InputMaybe<Create_Languages_Input>;
  readonly title: Scalars['String'];
};

export type Create_Languages_Input = {
  readonly code: Scalars['ID'];
  readonly name?: InputMaybe<Scalars['String']>;
};

export type Create_Links_Input = {
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly href: Scalars['String'];
  readonly huge?: InputMaybe<Scalars['Boolean']>;
  readonly icon?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly label: Scalars['String'];
  readonly sort?: InputMaybe<Scalars['Int']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly user_created?: InputMaybe<Create_Directus_Users_Input>;
  readonly user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Members_Input = {
  readonly address?: InputMaybe<Create_Address_Input>;
  readonly birthday: Scalars['String'];
  /** The yearly contribution for the member */
  readonly contribution?: InputMaybe<Scalars['Float']>;
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly email: Scalars['String'];
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly membership?: InputMaybe<Scalars['Date']>;
  readonly mollie_customer_id?: InputMaybe<Scalars['String']>;
  readonly name: Scalars['String'];
  /** Automatically renew membership after expiration */
  readonly renew?: InputMaybe<Scalars['Boolean']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly user_created?: InputMaybe<Create_Directus_Users_Input>;
  readonly user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Menu_Input = {
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly slug: Scalars['ID'];
  readonly user_created?: InputMaybe<Create_Directus_Users_Input>;
  readonly user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Names_Input = {
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly name: Scalars['String'];
  readonly sort?: InputMaybe<Scalars['Int']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly user_created?: InputMaybe<Create_Directus_Users_Input>;
  readonly user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Pages_Input = {
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly slug: Scalars['String'];
  readonly sort?: InputMaybe<Scalars['Int']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly translations?: InputMaybe<ReadonlyArray<InputMaybe<Create_Pages_Translations_Input>>>;
};

export type Create_Pages_Translations_Input = {
  readonly body: Scalars['String'];
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly languages_id?: InputMaybe<Create_Languages_Input>;
  readonly pages_id?: InputMaybe<Create_Pages_Input>;
  readonly title: Scalars['String'];
};

export type Date_Filter_Operators = {
  readonly _between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  readonly _eq?: InputMaybe<Scalars['String']>;
  readonly _gt?: InputMaybe<Scalars['String']>;
  readonly _gte?: InputMaybe<Scalars['String']>;
  readonly _in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly _lt?: InputMaybe<Scalars['String']>;
  readonly _lte?: InputMaybe<Scalars['String']>;
  readonly _nbetween?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  readonly _neq?: InputMaybe<Scalars['String']>;
  readonly _nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly _nnull?: InputMaybe<Scalars['Boolean']>;
  readonly _null?: InputMaybe<Scalars['Boolean']>;
};

export type Date_Function_Filter_Operators = {
  readonly day?: InputMaybe<Number_Filter_Operators>;
  readonly month?: InputMaybe<Number_Filter_Operators>;
  readonly week?: InputMaybe<Number_Filter_Operators>;
  readonly weekday?: InputMaybe<Number_Filter_Operators>;
  readonly year?: InputMaybe<Number_Filter_Operators>;
};

export type Date_Functions = {
  readonly __typename?: 'date_functions';
  readonly day?: Maybe<Scalars['Int']>;
  readonly month?: Maybe<Scalars['Int']>;
  readonly week?: Maybe<Scalars['Int']>;
  readonly weekday?: Maybe<Scalars['Int']>;
  readonly year?: Maybe<Scalars['Int']>;
};

export type Datetime_Function_Filter_Operators = {
  readonly day?: InputMaybe<Number_Filter_Operators>;
  readonly hour?: InputMaybe<Number_Filter_Operators>;
  readonly minute?: InputMaybe<Number_Filter_Operators>;
  readonly month?: InputMaybe<Number_Filter_Operators>;
  readonly second?: InputMaybe<Number_Filter_Operators>;
  readonly week?: InputMaybe<Number_Filter_Operators>;
  readonly weekday?: InputMaybe<Number_Filter_Operators>;
  readonly year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  readonly __typename?: 'datetime_functions';
  readonly day?: Maybe<Scalars['Int']>;
  readonly hour?: Maybe<Scalars['Int']>;
  readonly minute?: Maybe<Scalars['Int']>;
  readonly month?: Maybe<Scalars['Int']>;
  readonly second?: Maybe<Scalars['Int']>;
  readonly week?: Maybe<Scalars['Int']>;
  readonly weekday?: Maybe<Scalars['Int']>;
  readonly year?: Maybe<Scalars['Int']>;
};

export type Delete_Many = {
  readonly __typename?: 'delete_many';
  readonly ids: ReadonlyArray<Maybe<Scalars['ID']>>;
};

export type Delete_One = {
  readonly __typename?: 'delete_one';
  readonly id: Scalars['ID'];
};

export type Directus_Activity = {
  readonly __typename?: 'directus_activity';
  readonly action: Scalars['String'];
  readonly collection: Scalars['String'];
  readonly comment?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly ip?: Maybe<Scalars['String']>;
  readonly item: Scalars['String'];
  readonly origin?: Maybe<Scalars['String']>;
  readonly revisions?: Maybe<ReadonlyArray<Maybe<Directus_Revisions>>>;
  readonly revisions_func?: Maybe<Count_Functions>;
  readonly timestamp?: Maybe<Scalars['Date']>;
  readonly timestamp_func?: Maybe<Datetime_Functions>;
  readonly user?: Maybe<Directus_Users>;
  readonly user_agent?: Maybe<Scalars['String']>;
};


export type Directus_ActivityRevisionsArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_ActivityUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Activity_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Activity_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Activity_Filter>>>;
  readonly action?: InputMaybe<String_Filter_Operators>;
  readonly collection?: InputMaybe<String_Filter_Operators>;
  readonly comment?: InputMaybe<String_Filter_Operators>;
  readonly id?: InputMaybe<Number_Filter_Operators>;
  readonly ip?: InputMaybe<String_Filter_Operators>;
  readonly item?: InputMaybe<String_Filter_Operators>;
  readonly origin?: InputMaybe<String_Filter_Operators>;
  readonly revisions?: InputMaybe<Directus_Revisions_Filter>;
  readonly revisions_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly timestamp?: InputMaybe<Date_Filter_Operators>;
  readonly timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly user?: InputMaybe<Directus_Users_Filter>;
  readonly user_agent?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Activity_Mutated = {
  readonly __typename?: 'directus_activity_mutated';
  readonly data?: Maybe<Directus_Activity>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Dashboards = {
  readonly __typename?: 'directus_dashboards';
  readonly color?: Maybe<Scalars['String']>;
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  readonly icon?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly note?: Maybe<Scalars['String']>;
  readonly panels?: Maybe<ReadonlyArray<Maybe<Directus_Panels>>>;
  readonly panels_func?: Maybe<Count_Functions>;
  readonly user_created?: Maybe<Directus_Users>;
};


export type Directus_DashboardsPanelsArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_DashboardsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Dashboards_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Dashboards_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Dashboards_Filter>>>;
  readonly color?: InputMaybe<String_Filter_Operators>;
  readonly date_created?: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly icon?: InputMaybe<String_Filter_Operators>;
  readonly id?: InputMaybe<String_Filter_Operators>;
  readonly name?: InputMaybe<String_Filter_Operators>;
  readonly note?: InputMaybe<String_Filter_Operators>;
  readonly panels?: InputMaybe<Directus_Panels_Filter>;
  readonly panels_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Dashboards_Mutated = {
  readonly __typename?: 'directus_dashboards_mutated';
  readonly data?: Maybe<Directus_Dashboards>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Files = {
  readonly __typename?: 'directus_files';
  readonly charset?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['Int']>;
  readonly embed?: Maybe<Scalars['String']>;
  readonly filename_disk?: Maybe<Scalars['String']>;
  readonly filename_download: Scalars['String'];
  readonly filesize?: Maybe<Scalars['GraphQLBigInt']>;
  readonly folder?: Maybe<Directus_Folders>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly location?: Maybe<Scalars['String']>;
  readonly metadata?: Maybe<Scalars['JSON']>;
  readonly metadata_func?: Maybe<Count_Functions>;
  readonly modified_by?: Maybe<Directus_Users>;
  readonly modified_on?: Maybe<Scalars['Date']>;
  readonly modified_on_func?: Maybe<Datetime_Functions>;
  readonly storage: Scalars['String'];
  readonly tags?: Maybe<Scalars['JSON']>;
  readonly tags_func?: Maybe<Count_Functions>;
  readonly title?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly uploaded_by?: Maybe<Directus_Users>;
  readonly uploaded_on?: Maybe<Scalars['Date']>;
  readonly uploaded_on_func?: Maybe<Datetime_Functions>;
  readonly width?: Maybe<Scalars['Int']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Files_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly charset?: InputMaybe<String_Filter_Operators>;
  readonly description?: InputMaybe<String_Filter_Operators>;
  readonly duration?: InputMaybe<Number_Filter_Operators>;
  readonly embed?: InputMaybe<String_Filter_Operators>;
  readonly filename_disk?: InputMaybe<String_Filter_Operators>;
  readonly filename_download?: InputMaybe<String_Filter_Operators>;
  readonly filesize?: InputMaybe<Number_Filter_Operators>;
  readonly folder?: InputMaybe<Directus_Folders_Filter>;
  readonly height?: InputMaybe<Number_Filter_Operators>;
  readonly id?: InputMaybe<String_Filter_Operators>;
  readonly location?: InputMaybe<String_Filter_Operators>;
  readonly metadata?: InputMaybe<String_Filter_Operators>;
  readonly metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly modified_by?: InputMaybe<Directus_Users_Filter>;
  readonly modified_on?: InputMaybe<Date_Filter_Operators>;
  readonly modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly storage?: InputMaybe<String_Filter_Operators>;
  readonly tags?: InputMaybe<String_Filter_Operators>;
  readonly tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly title?: InputMaybe<String_Filter_Operators>;
  readonly type?: InputMaybe<String_Filter_Operators>;
  readonly uploaded_by?: InputMaybe<Directus_Users_Filter>;
  readonly uploaded_on?: InputMaybe<Date_Filter_Operators>;
  readonly uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  readonly __typename?: 'directus_files_mutated';
  readonly data?: Maybe<Directus_Files>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Flows = {
  readonly __typename?: 'directus_flows';
  readonly accountability?: Maybe<Scalars['String']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  readonly description?: Maybe<Scalars['String']>;
  readonly icon?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly operation?: Maybe<Directus_Operations>;
  readonly operations?: Maybe<ReadonlyArray<Maybe<Directus_Operations>>>;
  readonly operations_func?: Maybe<Count_Functions>;
  readonly options?: Maybe<Scalars['JSON']>;
  readonly options_func?: Maybe<Count_Functions>;
  readonly status?: Maybe<Scalars['String']>;
  readonly trigger?: Maybe<Scalars['String']>;
  readonly user_created?: Maybe<Directus_Users>;
};


export type Directus_FlowsOperationArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_FlowsOperationsArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_FlowsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Flows_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Flows_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Flows_Filter>>>;
  readonly accountability?: InputMaybe<String_Filter_Operators>;
  readonly color?: InputMaybe<String_Filter_Operators>;
  readonly date_created?: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly description?: InputMaybe<String_Filter_Operators>;
  readonly icon?: InputMaybe<String_Filter_Operators>;
  readonly id?: InputMaybe<String_Filter_Operators>;
  readonly name?: InputMaybe<String_Filter_Operators>;
  readonly operation?: InputMaybe<Directus_Operations_Filter>;
  readonly operations?: InputMaybe<Directus_Operations_Filter>;
  readonly operations_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly options?: InputMaybe<String_Filter_Operators>;
  readonly options_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly status?: InputMaybe<String_Filter_Operators>;
  readonly trigger?: InputMaybe<String_Filter_Operators>;
  readonly user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Flows_Mutated = {
  readonly __typename?: 'directus_flows_mutated';
  readonly data?: Maybe<Directus_Flows>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Folders = {
  readonly __typename?: 'directus_folders';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Folders_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Folders_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Folders_Filter>>>;
  readonly id?: InputMaybe<String_Filter_Operators>;
  readonly name?: InputMaybe<String_Filter_Operators>;
  readonly parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Folders_Mutated = {
  readonly __typename?: 'directus_folders_mutated';
  readonly data?: Maybe<Directus_Folders>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Notifications = {
  readonly __typename?: 'directus_notifications';
  readonly collection?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly item?: Maybe<Scalars['String']>;
  readonly message?: Maybe<Scalars['String']>;
  readonly recipient?: Maybe<Directus_Users>;
  readonly sender?: Maybe<Directus_Users>;
  readonly status?: Maybe<Scalars['String']>;
  readonly subject: Scalars['String'];
  readonly timestamp?: Maybe<Scalars['Date']>;
  readonly timestamp_func?: Maybe<Datetime_Functions>;
};


export type Directus_NotificationsRecipientArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_NotificationsSenderArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Notifications_Mutated = {
  readonly __typename?: 'directus_notifications_mutated';
  readonly data?: Maybe<Directus_Notifications>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Operations = {
  readonly __typename?: 'directus_operations';
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  readonly flow?: Maybe<Directus_Flows>;
  readonly id: Scalars['ID'];
  readonly key: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly options?: Maybe<Scalars['JSON']>;
  readonly options_func?: Maybe<Count_Functions>;
  readonly position_x: Scalars['Int'];
  readonly position_y: Scalars['Int'];
  readonly reject?: Maybe<Directus_Operations>;
  readonly resolve?: Maybe<Directus_Operations>;
  readonly type: Scalars['String'];
  readonly user_created?: Maybe<Directus_Users>;
};


export type Directus_OperationsFlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_OperationsRejectArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_OperationsResolveArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_OperationsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Operations_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Operations_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Operations_Filter>>>;
  readonly date_created?: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly flow?: InputMaybe<Directus_Flows_Filter>;
  readonly id?: InputMaybe<String_Filter_Operators>;
  readonly key?: InputMaybe<String_Filter_Operators>;
  readonly name?: InputMaybe<String_Filter_Operators>;
  readonly options?: InputMaybe<String_Filter_Operators>;
  readonly options_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly position_x?: InputMaybe<Number_Filter_Operators>;
  readonly position_y?: InputMaybe<Number_Filter_Operators>;
  readonly reject?: InputMaybe<Directus_Operations_Filter>;
  readonly resolve?: InputMaybe<Directus_Operations_Filter>;
  readonly type?: InputMaybe<String_Filter_Operators>;
  readonly user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Operations_Mutated = {
  readonly __typename?: 'directus_operations_mutated';
  readonly data?: Maybe<Directus_Operations>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Panels = {
  readonly __typename?: 'directus_panels';
  readonly color?: Maybe<Scalars['String']>;
  readonly dashboard?: Maybe<Directus_Dashboards>;
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  readonly height: Scalars['Int'];
  readonly icon?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
  readonly note?: Maybe<Scalars['String']>;
  readonly options?: Maybe<Scalars['JSON']>;
  readonly options_func?: Maybe<Count_Functions>;
  readonly position_x: Scalars['Int'];
  readonly position_y: Scalars['Int'];
  readonly show_header: Scalars['Boolean'];
  readonly type: Scalars['String'];
  readonly user_created?: Maybe<Directus_Users>;
  readonly width: Scalars['Int'];
};


export type Directus_PanelsDashboardArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_PanelsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Panels_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Panels_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Panels_Filter>>>;
  readonly color?: InputMaybe<String_Filter_Operators>;
  readonly dashboard?: InputMaybe<Directus_Dashboards_Filter>;
  readonly date_created?: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly height?: InputMaybe<Number_Filter_Operators>;
  readonly icon?: InputMaybe<String_Filter_Operators>;
  readonly id?: InputMaybe<String_Filter_Operators>;
  readonly name?: InputMaybe<String_Filter_Operators>;
  readonly note?: InputMaybe<String_Filter_Operators>;
  readonly options?: InputMaybe<String_Filter_Operators>;
  readonly options_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly position_x?: InputMaybe<Number_Filter_Operators>;
  readonly position_y?: InputMaybe<Number_Filter_Operators>;
  readonly show_header?: InputMaybe<Boolean_Filter_Operators>;
  readonly type?: InputMaybe<String_Filter_Operators>;
  readonly user_created?: InputMaybe<Directus_Users_Filter>;
  readonly width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Panels_Mutated = {
  readonly __typename?: 'directus_panels_mutated';
  readonly data?: Maybe<Directus_Panels>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Permissions = {
  readonly __typename?: 'directus_permissions';
  readonly action: Scalars['String'];
  readonly collection: Scalars['String'];
  readonly fields?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly id: Scalars['ID'];
  readonly permissions?: Maybe<Scalars['JSON']>;
  readonly permissions_func?: Maybe<Count_Functions>;
  readonly presets?: Maybe<Scalars['JSON']>;
  readonly presets_func?: Maybe<Count_Functions>;
  readonly role?: Maybe<Directus_Roles>;
  readonly validation?: Maybe<Scalars['JSON']>;
  readonly validation_func?: Maybe<Count_Functions>;
};


export type Directus_PermissionsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Permissions_Mutated = {
  readonly __typename?: 'directus_permissions_mutated';
  readonly data?: Maybe<Directus_Permissions>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Presets = {
  readonly __typename?: 'directus_presets';
  readonly bookmark?: Maybe<Scalars['String']>;
  readonly collection?: Maybe<Scalars['String']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly filter?: Maybe<Scalars['JSON']>;
  readonly filter_func?: Maybe<Count_Functions>;
  readonly icon?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly layout?: Maybe<Scalars['String']>;
  readonly layout_options?: Maybe<Scalars['JSON']>;
  readonly layout_options_func?: Maybe<Count_Functions>;
  readonly layout_query?: Maybe<Scalars['JSON']>;
  readonly layout_query_func?: Maybe<Count_Functions>;
  readonly refresh_interval?: Maybe<Scalars['Int']>;
  readonly role?: Maybe<Directus_Roles>;
  readonly search?: Maybe<Scalars['String']>;
  readonly user?: Maybe<Directus_Users>;
};


export type Directus_PresetsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_PresetsUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Presets_Mutated = {
  readonly __typename?: 'directus_presets_mutated';
  readonly data?: Maybe<Directus_Presets>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Revisions = {
  readonly __typename?: 'directus_revisions';
  readonly activity?: Maybe<Directus_Activity>;
  readonly collection: Scalars['String'];
  readonly data?: Maybe<Scalars['JSON']>;
  readonly data_func?: Maybe<Count_Functions>;
  readonly delta?: Maybe<Scalars['JSON']>;
  readonly delta_func?: Maybe<Count_Functions>;
  readonly id: Scalars['ID'];
  readonly item: Scalars['String'];
  readonly parent?: Maybe<Directus_Revisions>;
};


export type Directus_RevisionsActivityArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_RevisionsParentArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Revisions_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Revisions_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Revisions_Filter>>>;
  readonly activity?: InputMaybe<Directus_Activity_Filter>;
  readonly collection?: InputMaybe<String_Filter_Operators>;
  readonly data?: InputMaybe<String_Filter_Operators>;
  readonly data_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly delta?: InputMaybe<String_Filter_Operators>;
  readonly delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly id?: InputMaybe<Number_Filter_Operators>;
  readonly item?: InputMaybe<String_Filter_Operators>;
  readonly parent?: InputMaybe<Directus_Revisions_Filter>;
};

export type Directus_Revisions_Mutated = {
  readonly __typename?: 'directus_revisions_mutated';
  readonly data?: Maybe<Directus_Revisions>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Roles = {
  readonly __typename?: 'directus_roles';
  readonly admin_access: Scalars['Boolean'];
  readonly app_access?: Maybe<Scalars['Boolean']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly enforce_tfa: Scalars['Boolean'];
  readonly icon?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly ip_access?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly name: Scalars['String'];
  readonly users?: Maybe<ReadonlyArray<Maybe<Directus_Users>>>;
  readonly users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Roles_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Roles_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Roles_Filter>>>;
  readonly admin_access?: InputMaybe<Boolean_Filter_Operators>;
  readonly app_access?: InputMaybe<Boolean_Filter_Operators>;
  readonly description?: InputMaybe<String_Filter_Operators>;
  readonly enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  readonly icon?: InputMaybe<String_Filter_Operators>;
  readonly id?: InputMaybe<String_Filter_Operators>;
  readonly ip_access?: InputMaybe<String_Filter_Operators>;
  readonly name?: InputMaybe<String_Filter_Operators>;
  readonly users?: InputMaybe<Directus_Users_Filter>;
  readonly users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Roles_Mutated = {
  readonly __typename?: 'directus_roles_mutated';
  readonly data?: Maybe<Directus_Roles>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Settings = {
  readonly __typename?: 'directus_settings';
  readonly auth_login_attempts?: Maybe<Scalars['Int']>;
  readonly auth_password_policy?: Maybe<Scalars['String']>;
  readonly basemaps?: Maybe<Scalars['JSON']>;
  readonly basemaps_func?: Maybe<Count_Functions>;
  readonly custom_aspect_ratios?: Maybe<Scalars['JSON']>;
  readonly custom_aspect_ratios_func?: Maybe<Count_Functions>;
  readonly custom_css?: Maybe<Scalars['String']>;
  readonly default_language?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly mapbox_key?: Maybe<Scalars['String']>;
  readonly module_bar?: Maybe<Scalars['JSON']>;
  readonly module_bar_func?: Maybe<Count_Functions>;
  /** $t:field_options.directus_settings.project_color_note */
  readonly project_color?: Maybe<Scalars['String']>;
  readonly project_descriptor?: Maybe<Scalars['String']>;
  readonly project_logo?: Maybe<Directus_Files>;
  readonly project_name?: Maybe<Scalars['String']>;
  readonly project_url?: Maybe<Scalars['String']>;
  readonly public_background?: Maybe<Directus_Files>;
  readonly public_foreground?: Maybe<Directus_Files>;
  readonly public_note?: Maybe<Scalars['String']>;
  readonly storage_asset_presets?: Maybe<Scalars['JSON']>;
  readonly storage_asset_presets_func?: Maybe<Count_Functions>;
  readonly storage_asset_transform?: Maybe<Scalars['String']>;
  readonly storage_default_folder?: Maybe<Directus_Folders>;
};


export type Directus_SettingsProject_LogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_SettingsPublic_BackgroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_SettingsPublic_ForegroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_SettingsStorage_Default_FolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Settings_Mutated = {
  readonly __typename?: 'directus_settings_mutated';
  readonly data?: Maybe<Directus_Settings>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Shares = {
  readonly __typename?: 'directus_shares';
  readonly collection?: Maybe<Scalars['String']>;
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  readonly date_end?: Maybe<Scalars['Date']>;
  readonly date_end_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  readonly date_start?: Maybe<Scalars['Date']>;
  readonly date_start_func?: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID'];
  readonly item?: Maybe<Scalars['String']>;
  /** $t:shared_leave_blank_for_unlimited */
  readonly max_uses?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  /** $t:shared_leave_blank_for_unlimited */
  readonly password?: Maybe<Scalars['Hash']>;
  readonly role?: Maybe<Directus_Roles>;
  readonly times_used?: Maybe<Scalars['Int']>;
  readonly user_created?: Maybe<Directus_Users>;
};


export type Directus_SharesRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_SharesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Shares_Mutated = {
  readonly __typename?: 'directus_shares_mutated';
  readonly data?: Maybe<Directus_Shares>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Translations = {
  readonly __typename?: 'directus_translations';
  readonly id: Scalars['ID'];
  readonly key: Scalars['String'];
  readonly language: Scalars['String'];
  readonly value: Scalars['String'];
};

export type Directus_Translations_Mutated = {
  readonly __typename?: 'directus_translations_mutated';
  readonly data?: Maybe<Directus_Translations>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Users = {
  readonly __typename?: 'directus_users';
  readonly auth_data?: Maybe<Scalars['JSON']>;
  readonly auth_data_func?: Maybe<Count_Functions>;
  readonly avatar?: Maybe<Directus_Files>;
  readonly description?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly email_notifications?: Maybe<Scalars['Boolean']>;
  readonly external_identifier?: Maybe<Scalars['String']>;
  readonly first_name?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly language?: Maybe<Scalars['String']>;
  readonly last_access?: Maybe<Scalars['Date']>;
  readonly last_access_func?: Maybe<Datetime_Functions>;
  readonly last_name?: Maybe<Scalars['String']>;
  readonly last_page?: Maybe<Scalars['String']>;
  readonly location?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['Hash']>;
  readonly provider?: Maybe<Scalars['String']>;
  readonly role?: Maybe<Directus_Roles>;
  readonly status?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<Scalars['JSON']>;
  readonly tags_func?: Maybe<Count_Functions>;
  readonly tfa_secret?: Maybe<Scalars['Hash']>;
  readonly theme?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly token?: Maybe<Scalars['Hash']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Directus_Users_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Users_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Directus_Users_Filter>>>;
  readonly auth_data?: InputMaybe<String_Filter_Operators>;
  readonly auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly avatar?: InputMaybe<Directus_Files_Filter>;
  readonly description?: InputMaybe<String_Filter_Operators>;
  readonly email?: InputMaybe<String_Filter_Operators>;
  readonly email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  readonly external_identifier?: InputMaybe<String_Filter_Operators>;
  readonly first_name?: InputMaybe<String_Filter_Operators>;
  readonly id?: InputMaybe<String_Filter_Operators>;
  readonly language?: InputMaybe<String_Filter_Operators>;
  readonly last_access?: InputMaybe<Date_Filter_Operators>;
  readonly last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly last_name?: InputMaybe<String_Filter_Operators>;
  readonly last_page?: InputMaybe<String_Filter_Operators>;
  readonly location?: InputMaybe<String_Filter_Operators>;
  readonly password?: InputMaybe<Hash_Filter_Operators>;
  readonly provider?: InputMaybe<String_Filter_Operators>;
  readonly role?: InputMaybe<Directus_Roles_Filter>;
  readonly status?: InputMaybe<String_Filter_Operators>;
  readonly tags?: InputMaybe<String_Filter_Operators>;
  readonly tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  readonly theme?: InputMaybe<String_Filter_Operators>;
  readonly title?: InputMaybe<String_Filter_Operators>;
  readonly token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  readonly __typename?: 'directus_users_mutated';
  readonly data?: Maybe<Directus_Users>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Directus_Webhooks = {
  readonly __typename?: 'directus_webhooks';
  readonly actions: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly collections: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly data?: Maybe<Scalars['Boolean']>;
  readonly headers?: Maybe<Scalars['JSON']>;
  readonly headers_func?: Maybe<Count_Functions>;
  readonly id: Scalars['ID'];
  readonly method?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly status?: Maybe<Scalars['String']>;
  readonly url: Scalars['String'];
};

export type Directus_Webhooks_Mutated = {
  readonly __typename?: 'directus_webhooks_mutated';
  readonly data?: Maybe<Directus_Webhooks>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Events = {
  readonly __typename?: 'events';
  /** Date of the event */
  readonly date: Scalars['Date'];
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  readonly date_func?: Maybe<Date_Functions>;
  readonly date_updated?: Maybe<Scalars['Date']>;
  readonly date_updated_func?: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID'];
  readonly location: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly status?: Maybe<Scalars['String']>;
  readonly time?: Maybe<Scalars['String']>;
  readonly time_func?: Maybe<Time_Functions>;
  readonly translations?: Maybe<ReadonlyArray<Maybe<Events_Translations>>>;
  readonly translations_func?: Maybe<Count_Functions>;
  readonly type: Scalars['String'];
};


export type EventsTranslationsArgs = {
  filter?: InputMaybe<Events_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Events_Aggregated = {
  readonly __typename?: 'events_aggregated';
  readonly avg?: Maybe<Events_Aggregated_Fields>;
  readonly avgDistinct?: Maybe<Events_Aggregated_Fields>;
  readonly count?: Maybe<Events_Aggregated_Count>;
  readonly countAll?: Maybe<Scalars['Int']>;
  readonly countDistinct?: Maybe<Events_Aggregated_Count>;
  readonly group?: Maybe<Scalars['JSON']>;
  readonly max?: Maybe<Events_Aggregated_Fields>;
  readonly min?: Maybe<Events_Aggregated_Fields>;
  readonly sum?: Maybe<Events_Aggregated_Fields>;
  readonly sumDistinct?: Maybe<Events_Aggregated_Fields>;
};

export type Events_Aggregated_Count = {
  readonly __typename?: 'events_aggregated_count';
  /** Date of the event */
  readonly date?: Maybe<Scalars['Int']>;
  readonly date_created?: Maybe<Scalars['Int']>;
  readonly date_updated?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly location?: Maybe<Scalars['Int']>;
  readonly slug?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['Int']>;
  readonly time?: Maybe<Scalars['Int']>;
  readonly translations?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<Scalars['Int']>;
};

export type Events_Aggregated_Fields = {
  readonly __typename?: 'events_aggregated_fields';
  readonly id?: Maybe<Scalars['Float']>;
};

export type Events_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Events_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Events_Filter>>>;
  readonly date?: InputMaybe<Date_Filter_Operators>;
  readonly date_created?: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_func?: InputMaybe<Date_Function_Filter_Operators>;
  readonly date_updated?: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly id?: InputMaybe<Number_Filter_Operators>;
  readonly location?: InputMaybe<String_Filter_Operators>;
  readonly slug?: InputMaybe<String_Filter_Operators>;
  readonly status?: InputMaybe<String_Filter_Operators>;
  readonly time?: InputMaybe<String_Filter_Operators>;
  readonly time_func?: InputMaybe<Time_Function_Filter_Operators>;
  readonly translations?: InputMaybe<Events_Translations_Filter>;
  readonly translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  readonly type?: InputMaybe<String_Filter_Operators>;
};

export type Events_Mutated = {
  readonly __typename?: 'events_mutated';
  readonly data?: Maybe<Events>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Events_Translations = {
  readonly __typename?: 'events_translations';
  readonly body: Scalars['String'];
  readonly events_id?: Maybe<Events>;
  readonly id: Scalars['ID'];
  readonly languages_id?: Maybe<Languages>;
  readonly title: Scalars['String'];
};


export type Events_TranslationsEvents_IdArgs = {
  filter?: InputMaybe<Events_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Events_TranslationsLanguages_IdArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Events_Translations_Aggregated = {
  readonly __typename?: 'events_translations_aggregated';
  readonly avg?: Maybe<Events_Translations_Aggregated_Fields>;
  readonly avgDistinct?: Maybe<Events_Translations_Aggregated_Fields>;
  readonly count?: Maybe<Events_Translations_Aggregated_Count>;
  readonly countAll?: Maybe<Scalars['Int']>;
  readonly countDistinct?: Maybe<Events_Translations_Aggregated_Count>;
  readonly group?: Maybe<Scalars['JSON']>;
  readonly max?: Maybe<Events_Translations_Aggregated_Fields>;
  readonly min?: Maybe<Events_Translations_Aggregated_Fields>;
  readonly sum?: Maybe<Events_Translations_Aggregated_Fields>;
  readonly sumDistinct?: Maybe<Events_Translations_Aggregated_Fields>;
};

export type Events_Translations_Aggregated_Count = {
  readonly __typename?: 'events_translations_aggregated_count';
  readonly body?: Maybe<Scalars['Int']>;
  readonly events_id?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly languages_id?: Maybe<Scalars['Int']>;
  readonly title?: Maybe<Scalars['Int']>;
};

export type Events_Translations_Aggregated_Fields = {
  readonly __typename?: 'events_translations_aggregated_fields';
  readonly events_id?: Maybe<Scalars['Float']>;
  readonly id?: Maybe<Scalars['Float']>;
};

export type Events_Translations_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Events_Translations_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Events_Translations_Filter>>>;
  readonly body?: InputMaybe<String_Filter_Operators>;
  readonly events_id?: InputMaybe<Events_Filter>;
  readonly id?: InputMaybe<Number_Filter_Operators>;
  readonly languages_id?: InputMaybe<Languages_Filter>;
  readonly title?: InputMaybe<String_Filter_Operators>;
};

export type Events_Translations_Mutated = {
  readonly __typename?: 'events_translations_mutated';
  readonly data?: Maybe<Events_Translations>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Hash_Filter_Operators = {
  readonly _empty?: InputMaybe<Scalars['Boolean']>;
  readonly _nempty?: InputMaybe<Scalars['Boolean']>;
  readonly _nnull?: InputMaybe<Scalars['Boolean']>;
  readonly _null?: InputMaybe<Scalars['Boolean']>;
};

export type Languages = {
  readonly __typename?: 'languages';
  readonly code: Scalars['ID'];
  readonly name?: Maybe<Scalars['String']>;
};

export type Languages_Aggregated = {
  readonly __typename?: 'languages_aggregated';
  readonly count?: Maybe<Languages_Aggregated_Count>;
  readonly countAll?: Maybe<Scalars['Int']>;
  readonly countDistinct?: Maybe<Languages_Aggregated_Count>;
  readonly group?: Maybe<Scalars['JSON']>;
};

export type Languages_Aggregated_Count = {
  readonly __typename?: 'languages_aggregated_count';
  readonly code?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['Int']>;
};

export type Languages_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Languages_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Languages_Filter>>>;
  readonly code?: InputMaybe<String_Filter_Operators>;
  readonly name?: InputMaybe<String_Filter_Operators>;
};

export type Languages_Mutated = {
  readonly __typename?: 'languages_mutated';
  readonly data?: Maybe<Languages>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Links = {
  readonly __typename?: 'links';
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  readonly date_updated?: Maybe<Scalars['Date']>;
  readonly date_updated_func?: Maybe<Datetime_Functions>;
  readonly href: Scalars['String'];
  readonly huge?: Maybe<Scalars['Boolean']>;
  readonly icon?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly label: Scalars['String'];
  readonly sort?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly user_created?: Maybe<Directus_Users>;
  readonly user_updated?: Maybe<Directus_Users>;
};


export type LinksUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type LinksUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Links_Aggregated = {
  readonly __typename?: 'links_aggregated';
  readonly avg?: Maybe<Links_Aggregated_Fields>;
  readonly avgDistinct?: Maybe<Links_Aggregated_Fields>;
  readonly count?: Maybe<Links_Aggregated_Count>;
  readonly countAll?: Maybe<Scalars['Int']>;
  readonly countDistinct?: Maybe<Links_Aggregated_Count>;
  readonly group?: Maybe<Scalars['JSON']>;
  readonly max?: Maybe<Links_Aggregated_Fields>;
  readonly min?: Maybe<Links_Aggregated_Fields>;
  readonly sum?: Maybe<Links_Aggregated_Fields>;
  readonly sumDistinct?: Maybe<Links_Aggregated_Fields>;
};

export type Links_Aggregated_Count = {
  readonly __typename?: 'links_aggregated_count';
  readonly date_created?: Maybe<Scalars['Int']>;
  readonly date_updated?: Maybe<Scalars['Int']>;
  readonly href?: Maybe<Scalars['Int']>;
  readonly huge?: Maybe<Scalars['Int']>;
  readonly icon?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly label?: Maybe<Scalars['Int']>;
  readonly sort?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['Int']>;
  readonly user_created?: Maybe<Scalars['Int']>;
  readonly user_updated?: Maybe<Scalars['Int']>;
};

export type Links_Aggregated_Fields = {
  readonly __typename?: 'links_aggregated_fields';
  readonly id?: Maybe<Scalars['Float']>;
  readonly sort?: Maybe<Scalars['Float']>;
};

export type Links_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Links_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Links_Filter>>>;
  readonly date_created?: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated?: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly href?: InputMaybe<String_Filter_Operators>;
  readonly huge?: InputMaybe<Boolean_Filter_Operators>;
  readonly icon?: InputMaybe<String_Filter_Operators>;
  readonly id?: InputMaybe<Number_Filter_Operators>;
  readonly label?: InputMaybe<String_Filter_Operators>;
  readonly sort?: InputMaybe<Number_Filter_Operators>;
  readonly status?: InputMaybe<String_Filter_Operators>;
  readonly user_created?: InputMaybe<Directus_Users_Filter>;
  readonly user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Links_Mutated = {
  readonly __typename?: 'links_mutated';
  readonly data?: Maybe<Links>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Members = {
  readonly __typename?: 'members';
  readonly address?: Maybe<Address>;
  readonly birthday: Scalars['String'];
  /** The yearly contribution for the member */
  readonly contribution?: Maybe<Scalars['Float']>;
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  readonly date_updated?: Maybe<Scalars['Date']>;
  readonly date_updated_func?: Maybe<Datetime_Functions>;
  readonly email: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly membership?: Maybe<Scalars['Date']>;
  readonly membership_func?: Maybe<Date_Functions>;
  readonly mollie_customer_id?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  /** Automatically renew membership after expiration */
  readonly renew?: Maybe<Scalars['Boolean']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly user_created?: Maybe<Directus_Users>;
  readonly user_updated?: Maybe<Directus_Users>;
};


export type MembersAddressArgs = {
  filter?: InputMaybe<Address_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MembersUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MembersUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Members_Aggregated = {
  readonly __typename?: 'members_aggregated';
  readonly avg?: Maybe<Members_Aggregated_Fields>;
  readonly avgDistinct?: Maybe<Members_Aggregated_Fields>;
  readonly count?: Maybe<Members_Aggregated_Count>;
  readonly countAll?: Maybe<Scalars['Int']>;
  readonly countDistinct?: Maybe<Members_Aggregated_Count>;
  readonly group?: Maybe<Scalars['JSON']>;
  readonly max?: Maybe<Members_Aggregated_Fields>;
  readonly min?: Maybe<Members_Aggregated_Fields>;
  readonly sum?: Maybe<Members_Aggregated_Fields>;
  readonly sumDistinct?: Maybe<Members_Aggregated_Fields>;
};

export type Members_Aggregated_Count = {
  readonly __typename?: 'members_aggregated_count';
  readonly address?: Maybe<Scalars['Int']>;
  readonly birthday?: Maybe<Scalars['Int']>;
  /** The yearly contribution for the member */
  readonly contribution?: Maybe<Scalars['Int']>;
  readonly date_created?: Maybe<Scalars['Int']>;
  readonly date_updated?: Maybe<Scalars['Int']>;
  readonly email?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly membership?: Maybe<Scalars['Int']>;
  readonly mollie_customer_id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['Int']>;
  /** Automatically renew membership after expiration */
  readonly renew?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['Int']>;
  readonly type?: Maybe<Scalars['Int']>;
  readonly user_created?: Maybe<Scalars['Int']>;
  readonly user_updated?: Maybe<Scalars['Int']>;
};

export type Members_Aggregated_Fields = {
  readonly __typename?: 'members_aggregated_fields';
  readonly address?: Maybe<Scalars['Float']>;
  /** The yearly contribution for the member */
  readonly contribution?: Maybe<Scalars['Float']>;
};

export type Members_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Members_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Members_Filter>>>;
  readonly address?: InputMaybe<Address_Filter>;
  readonly birthday?: InputMaybe<String_Filter_Operators>;
  readonly contribution?: InputMaybe<Number_Filter_Operators>;
  readonly date_created?: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated?: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly email?: InputMaybe<String_Filter_Operators>;
  readonly id?: InputMaybe<String_Filter_Operators>;
  readonly membership?: InputMaybe<Date_Filter_Operators>;
  readonly membership_func?: InputMaybe<Date_Function_Filter_Operators>;
  readonly mollie_customer_id?: InputMaybe<String_Filter_Operators>;
  readonly name?: InputMaybe<String_Filter_Operators>;
  readonly renew?: InputMaybe<Boolean_Filter_Operators>;
  readonly status?: InputMaybe<String_Filter_Operators>;
  readonly type?: InputMaybe<String_Filter_Operators>;
  readonly user_created?: InputMaybe<Directus_Users_Filter>;
  readonly user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Members_Mutated = {
  readonly __typename?: 'members_mutated';
  readonly data?: Maybe<Members>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Menu = {
  readonly __typename?: 'menu';
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  readonly date_updated?: Maybe<Scalars['Date']>;
  readonly date_updated_func?: Maybe<Datetime_Functions>;
  readonly slug: Scalars['ID'];
  readonly user_created?: Maybe<Directus_Users>;
  readonly user_updated?: Maybe<Directus_Users>;
};


export type MenuUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type MenuUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Menu_Aggregated = {
  readonly __typename?: 'menu_aggregated';
  readonly count?: Maybe<Menu_Aggregated_Count>;
  readonly countAll?: Maybe<Scalars['Int']>;
  readonly countDistinct?: Maybe<Menu_Aggregated_Count>;
  readonly group?: Maybe<Scalars['JSON']>;
};

export type Menu_Aggregated_Count = {
  readonly __typename?: 'menu_aggregated_count';
  readonly date_created?: Maybe<Scalars['Int']>;
  readonly date_updated?: Maybe<Scalars['Int']>;
  readonly slug?: Maybe<Scalars['Int']>;
  readonly user_created?: Maybe<Scalars['Int']>;
  readonly user_updated?: Maybe<Scalars['Int']>;
};

export type Menu_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Menu_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Menu_Filter>>>;
  readonly date_created?: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated?: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly slug?: InputMaybe<String_Filter_Operators>;
  readonly user_created?: InputMaybe<Directus_Users_Filter>;
  readonly user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Menu_Mutated = {
  readonly __typename?: 'menu_mutated';
  readonly data?: Maybe<Menu>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Names = {
  readonly __typename?: 'names';
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  readonly date_updated?: Maybe<Scalars['Date']>;
  readonly date_updated_func?: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly sort?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly user_created?: Maybe<Directus_Users>;
  readonly user_updated?: Maybe<Directus_Users>;
};


export type NamesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type NamesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Names_Aggregated = {
  readonly __typename?: 'names_aggregated';
  readonly avg?: Maybe<Names_Aggregated_Fields>;
  readonly avgDistinct?: Maybe<Names_Aggregated_Fields>;
  readonly count?: Maybe<Names_Aggregated_Count>;
  readonly countAll?: Maybe<Scalars['Int']>;
  readonly countDistinct?: Maybe<Names_Aggregated_Count>;
  readonly group?: Maybe<Scalars['JSON']>;
  readonly max?: Maybe<Names_Aggregated_Fields>;
  readonly min?: Maybe<Names_Aggregated_Fields>;
  readonly sum?: Maybe<Names_Aggregated_Fields>;
  readonly sumDistinct?: Maybe<Names_Aggregated_Fields>;
};

export type Names_Aggregated_Count = {
  readonly __typename?: 'names_aggregated_count';
  readonly date_created?: Maybe<Scalars['Int']>;
  readonly date_updated?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['Int']>;
  readonly sort?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['Int']>;
  readonly user_created?: Maybe<Scalars['Int']>;
  readonly user_updated?: Maybe<Scalars['Int']>;
};

export type Names_Aggregated_Fields = {
  readonly __typename?: 'names_aggregated_fields';
  readonly id?: Maybe<Scalars['Float']>;
  readonly sort?: Maybe<Scalars['Float']>;
};

export type Names_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Names_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Names_Filter>>>;
  readonly date_created?: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated?: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly id?: InputMaybe<Number_Filter_Operators>;
  readonly name?: InputMaybe<String_Filter_Operators>;
  readonly sort?: InputMaybe<Number_Filter_Operators>;
  readonly status?: InputMaybe<String_Filter_Operators>;
  readonly user_created?: InputMaybe<Directus_Users_Filter>;
  readonly user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Names_Mutated = {
  readonly __typename?: 'names_mutated';
  readonly data?: Maybe<Names>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Number_Filter_Operators = {
  readonly _between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  readonly _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  readonly _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  readonly _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  readonly _in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  readonly _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  readonly _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  readonly _nbetween?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  readonly _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']>;
  readonly _nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
  readonly _nnull?: InputMaybe<Scalars['Boolean']>;
  readonly _null?: InputMaybe<Scalars['Boolean']>;
};

export type Pages = {
  readonly __typename?: 'pages';
  readonly date_created?: Maybe<Scalars['Date']>;
  readonly date_created_func?: Maybe<Datetime_Functions>;
  readonly date_updated?: Maybe<Scalars['Date']>;
  readonly date_updated_func?: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID'];
  readonly slug: Scalars['String'];
  readonly sort?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['String']>;
  readonly translations?: Maybe<ReadonlyArray<Maybe<Pages_Translations>>>;
  readonly translations_func?: Maybe<Count_Functions>;
};


export type PagesTranslationsArgs = {
  filter?: InputMaybe<Pages_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Pages_Aggregated = {
  readonly __typename?: 'pages_aggregated';
  readonly avg?: Maybe<Pages_Aggregated_Fields>;
  readonly avgDistinct?: Maybe<Pages_Aggregated_Fields>;
  readonly count?: Maybe<Pages_Aggregated_Count>;
  readonly countAll?: Maybe<Scalars['Int']>;
  readonly countDistinct?: Maybe<Pages_Aggregated_Count>;
  readonly group?: Maybe<Scalars['JSON']>;
  readonly max?: Maybe<Pages_Aggregated_Fields>;
  readonly min?: Maybe<Pages_Aggregated_Fields>;
  readonly sum?: Maybe<Pages_Aggregated_Fields>;
  readonly sumDistinct?: Maybe<Pages_Aggregated_Fields>;
};

export type Pages_Aggregated_Count = {
  readonly __typename?: 'pages_aggregated_count';
  readonly date_created?: Maybe<Scalars['Int']>;
  readonly date_updated?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly slug?: Maybe<Scalars['Int']>;
  readonly sort?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<Scalars['Int']>;
  readonly translations?: Maybe<Scalars['Int']>;
};

export type Pages_Aggregated_Fields = {
  readonly __typename?: 'pages_aggregated_fields';
  readonly id?: Maybe<Scalars['Float']>;
  readonly sort?: Maybe<Scalars['Float']>;
};

export type Pages_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Pages_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Pages_Filter>>>;
  readonly date_created?: InputMaybe<Date_Filter_Operators>;
  readonly date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly date_updated?: InputMaybe<Date_Filter_Operators>;
  readonly date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly id?: InputMaybe<Number_Filter_Operators>;
  readonly slug?: InputMaybe<String_Filter_Operators>;
  readonly sort?: InputMaybe<Number_Filter_Operators>;
  readonly status?: InputMaybe<String_Filter_Operators>;
  readonly translations?: InputMaybe<Pages_Translations_Filter>;
  readonly translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Pages_Mutated = {
  readonly __typename?: 'pages_mutated';
  readonly data?: Maybe<Pages>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type Pages_Translations = {
  readonly __typename?: 'pages_translations';
  readonly body: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly languages_id?: Maybe<Languages>;
  readonly pages_id?: Maybe<Pages>;
  readonly title: Scalars['String'];
};


export type Pages_TranslationsLanguages_IdArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};


export type Pages_TranslationsPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
};

export type Pages_Translations_Aggregated = {
  readonly __typename?: 'pages_translations_aggregated';
  readonly avg?: Maybe<Pages_Translations_Aggregated_Fields>;
  readonly avgDistinct?: Maybe<Pages_Translations_Aggregated_Fields>;
  readonly count?: Maybe<Pages_Translations_Aggregated_Count>;
  readonly countAll?: Maybe<Scalars['Int']>;
  readonly countDistinct?: Maybe<Pages_Translations_Aggregated_Count>;
  readonly group?: Maybe<Scalars['JSON']>;
  readonly max?: Maybe<Pages_Translations_Aggregated_Fields>;
  readonly min?: Maybe<Pages_Translations_Aggregated_Fields>;
  readonly sum?: Maybe<Pages_Translations_Aggregated_Fields>;
  readonly sumDistinct?: Maybe<Pages_Translations_Aggregated_Fields>;
};

export type Pages_Translations_Aggregated_Count = {
  readonly __typename?: 'pages_translations_aggregated_count';
  readonly body?: Maybe<Scalars['Int']>;
  readonly id?: Maybe<Scalars['Int']>;
  readonly languages_id?: Maybe<Scalars['Int']>;
  readonly pages_id?: Maybe<Scalars['Int']>;
  readonly title?: Maybe<Scalars['Int']>;
};

export type Pages_Translations_Aggregated_Fields = {
  readonly __typename?: 'pages_translations_aggregated_fields';
  readonly id?: Maybe<Scalars['Float']>;
  readonly pages_id?: Maybe<Scalars['Float']>;
};

export type Pages_Translations_Filter = {
  readonly _and?: InputMaybe<ReadonlyArray<InputMaybe<Pages_Translations_Filter>>>;
  readonly _or?: InputMaybe<ReadonlyArray<InputMaybe<Pages_Translations_Filter>>>;
  readonly body?: InputMaybe<String_Filter_Operators>;
  readonly id?: InputMaybe<Number_Filter_Operators>;
  readonly languages_id?: InputMaybe<Languages_Filter>;
  readonly pages_id?: InputMaybe<Pages_Filter>;
  readonly title?: InputMaybe<String_Filter_Operators>;
};

export type Pages_Translations_Mutated = {
  readonly __typename?: 'pages_translations_mutated';
  readonly data?: Maybe<Pages_Translations>;
  readonly event?: Maybe<EventEnum>;
  readonly key: Scalars['ID'];
};

export type String_Filter_Operators = {
  readonly _contains?: InputMaybe<Scalars['String']>;
  readonly _empty?: InputMaybe<Scalars['Boolean']>;
  readonly _ends_with?: InputMaybe<Scalars['String']>;
  readonly _eq?: InputMaybe<Scalars['String']>;
  readonly _icontains?: InputMaybe<Scalars['String']>;
  readonly _iends_with?: InputMaybe<Scalars['String']>;
  readonly _in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly _istarts_with?: InputMaybe<Scalars['String']>;
  readonly _ncontains?: InputMaybe<Scalars['String']>;
  readonly _nempty?: InputMaybe<Scalars['Boolean']>;
  readonly _nends_with?: InputMaybe<Scalars['String']>;
  readonly _neq?: InputMaybe<Scalars['String']>;
  readonly _niends_with?: InputMaybe<Scalars['String']>;
  readonly _nin?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly _nistarts_with?: InputMaybe<Scalars['String']>;
  readonly _nnull?: InputMaybe<Scalars['Boolean']>;
  readonly _nstarts_with?: InputMaybe<Scalars['String']>;
  readonly _null?: InputMaybe<Scalars['Boolean']>;
  readonly _starts_with?: InputMaybe<Scalars['String']>;
};

export type Time_Function_Filter_Operators = {
  readonly hour?: InputMaybe<Number_Filter_Operators>;
  readonly minute?: InputMaybe<Number_Filter_Operators>;
  readonly second?: InputMaybe<Number_Filter_Operators>;
};

export type Time_Functions = {
  readonly __typename?: 'time_functions';
  readonly hour?: Maybe<Scalars['Int']>;
  readonly minute?: Maybe<Scalars['Int']>;
  readonly second?: Maybe<Scalars['Int']>;
};

export type Update_Address_Input = {
  readonly city?: InputMaybe<Scalars['String']>;
  readonly country?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly street?: InputMaybe<Scalars['String']>;
  readonly zip?: InputMaybe<Scalars['String']>;
};

export type Update_Directus_Files_Input = {
  readonly charset?: InputMaybe<Scalars['String']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly duration?: InputMaybe<Scalars['Int']>;
  readonly embed?: InputMaybe<Scalars['String']>;
  readonly filename_disk?: InputMaybe<Scalars['String']>;
  readonly filename_download?: InputMaybe<Scalars['String']>;
  readonly filesize?: InputMaybe<Scalars['GraphQLBigInt']>;
  readonly folder?: InputMaybe<Update_Directus_Folders_Input>;
  readonly height?: InputMaybe<Scalars['Int']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly location?: InputMaybe<Scalars['String']>;
  readonly metadata?: InputMaybe<Scalars['JSON']>;
  readonly modified_by?: InputMaybe<Update_Directus_Users_Input>;
  readonly modified_on?: InputMaybe<Scalars['Date']>;
  readonly storage?: InputMaybe<Scalars['String']>;
  readonly tags?: InputMaybe<Scalars['JSON']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['String']>;
  readonly uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  readonly uploaded_on?: InputMaybe<Scalars['Date']>;
  readonly width?: InputMaybe<Scalars['Int']>;
};

export type Update_Directus_Folders_Input = {
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Roles_Input = {
  readonly admin_access?: InputMaybe<Scalars['Boolean']>;
  readonly app_access?: InputMaybe<Scalars['Boolean']>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly enforce_tfa?: InputMaybe<Scalars['Boolean']>;
  readonly icon?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly ip_access?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly users?: InputMaybe<ReadonlyArray<InputMaybe<Update_Directus_Users_Input>>>;
};

export type Update_Directus_Users_Input = {
  readonly auth_data?: InputMaybe<Scalars['JSON']>;
  readonly avatar?: InputMaybe<Update_Directus_Files_Input>;
  readonly description?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly email_notifications?: InputMaybe<Scalars['Boolean']>;
  readonly external_identifier?: InputMaybe<Scalars['String']>;
  readonly first_name?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly language?: InputMaybe<Scalars['String']>;
  readonly last_access?: InputMaybe<Scalars['Date']>;
  readonly last_name?: InputMaybe<Scalars['String']>;
  readonly last_page?: InputMaybe<Scalars['String']>;
  readonly location?: InputMaybe<Scalars['String']>;
  readonly password?: InputMaybe<Scalars['Hash']>;
  readonly provider?: InputMaybe<Scalars['String']>;
  readonly role?: InputMaybe<Update_Directus_Roles_Input>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly tags?: InputMaybe<Scalars['JSON']>;
  readonly tfa_secret?: InputMaybe<Scalars['Hash']>;
  readonly theme?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly token?: InputMaybe<Scalars['Hash']>;
};

export type Update_Events_Input = {
  /** Date of the event */
  readonly date?: InputMaybe<Scalars['Date']>;
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly location?: InputMaybe<Scalars['String']>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly time?: InputMaybe<Scalars['String']>;
  readonly translations?: InputMaybe<ReadonlyArray<InputMaybe<Update_Events_Translations_Input>>>;
  readonly type?: InputMaybe<Scalars['String']>;
};

export type Update_Events_Translations_Input = {
  readonly body?: InputMaybe<Scalars['String']>;
  readonly events_id?: InputMaybe<Update_Events_Input>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly languages_id?: InputMaybe<Update_Languages_Input>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type Update_Languages_Input = {
  readonly code?: InputMaybe<Scalars['ID']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type Update_Links_Input = {
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly href?: InputMaybe<Scalars['String']>;
  readonly huge?: InputMaybe<Scalars['Boolean']>;
  readonly icon?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly label?: InputMaybe<Scalars['String']>;
  readonly sort?: InputMaybe<Scalars['Int']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly user_created?: InputMaybe<Update_Directus_Users_Input>;
  readonly user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Members_Input = {
  readonly address?: InputMaybe<Update_Address_Input>;
  readonly birthday?: InputMaybe<Scalars['String']>;
  /** The yearly contribution for the member */
  readonly contribution?: InputMaybe<Scalars['Float']>;
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly membership?: InputMaybe<Scalars['Date']>;
  readonly mollie_customer_id?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  /** Automatically renew membership after expiration */
  readonly renew?: InputMaybe<Scalars['Boolean']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly type?: InputMaybe<Scalars['String']>;
  readonly user_created?: InputMaybe<Update_Directus_Users_Input>;
  readonly user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Menu_Input = {
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly slug?: InputMaybe<Scalars['ID']>;
  readonly user_created?: InputMaybe<Update_Directus_Users_Input>;
  readonly user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Names_Input = {
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly sort?: InputMaybe<Scalars['Int']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly user_created?: InputMaybe<Update_Directus_Users_Input>;
  readonly user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Pages_Input = {
  readonly date_created?: InputMaybe<Scalars['Date']>;
  readonly date_updated?: InputMaybe<Scalars['Date']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly slug?: InputMaybe<Scalars['String']>;
  readonly sort?: InputMaybe<Scalars['Int']>;
  readonly status?: InputMaybe<Scalars['String']>;
  readonly translations?: InputMaybe<ReadonlyArray<InputMaybe<Update_Pages_Translations_Input>>>;
};

export type Update_Pages_Translations_Input = {
  readonly body?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['ID']>;
  readonly languages_id?: InputMaybe<Update_Languages_Input>;
  readonly pages_id?: InputMaybe<Update_Pages_Input>;
  readonly title?: InputMaybe<Scalars['String']>;
};

export type EventTranslationsFragment = { readonly __typename?: 'events_translations', readonly title: string, readonly body: string, readonly languages_id?: { readonly __typename?: 'languages', readonly code: string } | null };

export type EventFragment = { readonly __typename?: 'events', readonly slug: string, readonly location: string, readonly date: string, readonly time?: string | null, readonly type: string, readonly date_created?: string | null, readonly date_updated?: string | null, readonly translations?: ReadonlyArray<{ readonly __typename?: 'events_translations', readonly title: string, readonly body: string, readonly languages_id?: { readonly __typename?: 'languages', readonly code: string } | null } | null> | null };

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = { readonly __typename?: 'Query', readonly events: ReadonlyArray<{ readonly __typename?: 'events', readonly slug: string, readonly location: string, readonly date: string, readonly time?: string | null, readonly type: string, readonly date_created?: string | null, readonly date_updated?: string | null, readonly translations?: ReadonlyArray<{ readonly __typename?: 'events_translations', readonly title: string, readonly body: string, readonly languages_id?: { readonly __typename?: 'languages', readonly code: string } | null } | null> | null }> };

export type EventQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type EventQuery = { readonly __typename?: 'Query', readonly events: ReadonlyArray<{ readonly __typename?: 'events', readonly slug: string, readonly location: string, readonly date: string, readonly time?: string | null, readonly type: string, readonly date_created?: string | null, readonly date_updated?: string | null, readonly translations?: ReadonlyArray<{ readonly __typename?: 'events_translations', readonly title: string, readonly body: string, readonly languages_id?: { readonly __typename?: 'languages', readonly code: string } | null } | null> | null }> };

export type UpcomingEventSinceQueryVariables = Exact<{
  date: Scalars['String'];
}>;


export type UpcomingEventSinceQuery = { readonly __typename?: 'Query', readonly events: ReadonlyArray<{ readonly __typename?: 'events', readonly slug: string, readonly location: string, readonly date: string, readonly time?: string | null, readonly type: string, readonly date_created?: string | null, readonly date_updated?: string | null, readonly translations?: ReadonlyArray<{ readonly __typename?: 'events_translations', readonly title: string, readonly body: string, readonly languages_id?: { readonly __typename?: 'languages', readonly code: string } | null } | null> | null }> };

export type LinkFragment = { readonly __typename?: 'links', readonly icon?: string | null, readonly huge?: boolean | null, readonly href: string, readonly label: string };

export type LinksQueryVariables = Exact<{ [key: string]: never; }>;


export type LinksQuery = { readonly __typename?: 'Query', readonly links: ReadonlyArray<{ readonly __typename?: 'links', readonly icon?: string | null, readonly huge?: boolean | null, readonly href: string, readonly label: string }> };

export type MemberFragment = { readonly __typename?: 'members', readonly id: string, readonly status?: string | null, readonly type: string, readonly mollie_customer_id?: string | null, readonly membership?: string | null, readonly contribution?: number | null, readonly renew?: boolean | null, readonly name: string, readonly email: string, readonly birthday: string, readonly address?: { readonly __typename?: 'address', readonly street: string, readonly zip: string, readonly city: string, readonly country: string } | null };

export type GetMemberQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetMemberQuery = { readonly __typename?: 'Query', readonly members_by_id?: { readonly __typename?: 'members', readonly id: string, readonly status?: string | null, readonly type: string, readonly mollie_customer_id?: string | null, readonly membership?: string | null, readonly contribution?: number | null, readonly renew?: boolean | null, readonly name: string, readonly email: string, readonly birthday: string, readonly address?: { readonly __typename?: 'address', readonly street: string, readonly zip: string, readonly city: string, readonly country: string } | null } | null };

export type GetMemberByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetMemberByEmailQuery = { readonly __typename?: 'Query', readonly members: ReadonlyArray<{ readonly __typename?: 'members', readonly id: string, readonly status?: string | null, readonly type: string, readonly mollie_customer_id?: string | null, readonly membership?: string | null, readonly contribution?: number | null, readonly renew?: boolean | null, readonly name: string, readonly email: string, readonly birthday: string, readonly address?: { readonly __typename?: 'address', readonly street: string, readonly zip: string, readonly city: string, readonly country: string } | null }> };

export type GetMemberByMollieCustomerIdQueryVariables = Exact<{
  mollie_customer_id: Scalars['String'];
}>;


export type GetMemberByMollieCustomerIdQuery = { readonly __typename?: 'Query', readonly members: ReadonlyArray<{ readonly __typename?: 'members', readonly id: string, readonly status?: string | null, readonly type: string, readonly mollie_customer_id?: string | null, readonly membership?: string | null, readonly contribution?: number | null, readonly renew?: boolean | null, readonly name: string, readonly email: string, readonly birthday: string, readonly address?: { readonly __typename?: 'address', readonly street: string, readonly zip: string, readonly city: string, readonly country: string } | null }> };

export type GetMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMembersQuery = { readonly __typename?: 'Query', readonly members: ReadonlyArray<{ readonly __typename?: 'members', readonly id: string, readonly status?: string | null, readonly type: string, readonly mollie_customer_id?: string | null, readonly membership?: string | null, readonly contribution?: number | null, readonly renew?: boolean | null, readonly name: string, readonly email: string, readonly birthday: string, readonly address?: { readonly __typename?: 'address', readonly street: string, readonly zip: string, readonly city: string, readonly country: string } | null }> };

export type GetMembersByIDsQueryVariables = Exact<{
  ids?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetMembersByIDsQuery = { readonly __typename?: 'Query', readonly members: ReadonlyArray<{ readonly __typename?: 'members', readonly id: string, readonly status?: string | null, readonly type: string, readonly mollie_customer_id?: string | null, readonly membership?: string | null, readonly contribution?: number | null, readonly renew?: boolean | null, readonly name: string, readonly email: string, readonly birthday: string, readonly address?: { readonly __typename?: 'address', readonly street: string, readonly zip: string, readonly city: string, readonly country: string } | null }> };

export type CreateMemberMutationVariables = Exact<{
  data: Create_Members_Input;
}>;


export type CreateMemberMutation = { readonly __typename?: 'Mutation', readonly create_members_item?: { readonly __typename?: 'members', readonly id: string, readonly status?: string | null, readonly type: string, readonly mollie_customer_id?: string | null, readonly membership?: string | null, readonly contribution?: number | null, readonly renew?: boolean | null, readonly name: string, readonly email: string, readonly birthday: string, readonly address?: { readonly __typename?: 'address', readonly street: string, readonly zip: string, readonly city: string, readonly country: string } | null } | null };

export type UpdateMemberMutationVariables = Exact<{
  id: Scalars['ID'];
  data: Update_Members_Input;
}>;


export type UpdateMemberMutation = { readonly __typename?: 'Mutation', readonly update_members_item?: { readonly __typename?: 'members', readonly id: string, readonly status?: string | null, readonly type: string, readonly mollie_customer_id?: string | null, readonly membership?: string | null, readonly contribution?: number | null, readonly renew?: boolean | null, readonly name: string, readonly email: string, readonly birthday: string, readonly address?: { readonly __typename?: 'address', readonly street: string, readonly zip: string, readonly city: string, readonly country: string } | null } | null };

export type NamesQueryVariables = Exact<{ [key: string]: never; }>;


export type NamesQuery = { readonly __typename?: 'Query', readonly names: ReadonlyArray<{ readonly __typename?: 'names', readonly name: string }> };

export type PageTranslationsFragment = { readonly __typename?: 'pages_translations', readonly title: string, readonly body: string, readonly languages_id?: { readonly __typename?: 'languages', readonly code: string } | null };

export type PageFragment = { readonly __typename?: 'pages', readonly slug: string, readonly date_created?: string | null, readonly date_updated?: string | null, readonly translations?: ReadonlyArray<{ readonly __typename?: 'pages_translations', readonly title: string, readonly body: string, readonly languages_id?: { readonly __typename?: 'languages', readonly code: string } | null } | null> | null };

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = { readonly __typename?: 'Query', readonly pages: ReadonlyArray<{ readonly __typename?: 'pages', readonly slug: string, readonly date_created?: string | null, readonly date_updated?: string | null, readonly translations?: ReadonlyArray<{ readonly __typename?: 'pages_translations', readonly title: string, readonly body: string, readonly languages_id?: { readonly __typename?: 'languages', readonly code: string } | null } | null> | null }> };

export type PageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PageQuery = { readonly __typename?: 'Query', readonly pages: ReadonlyArray<{ readonly __typename?: 'pages', readonly slug: string, readonly date_created?: string | null, readonly date_updated?: string | null, readonly translations?: ReadonlyArray<{ readonly __typename?: 'pages_translations', readonly title: string, readonly body: string, readonly languages_id?: { readonly __typename?: 'languages', readonly code: string } | null } | null> | null }> };

export const EventTranslationsFragmentDoc = gql`
    fragment EventTranslations on events_translations {
  title
  body
  languages_id {
    code
  }
}
    `;
export const EventFragmentDoc = gql`
    fragment Event on events {
  slug
  location
  date
  time
  type
  date_created
  date_updated
  translations {
    ...EventTranslations
  }
}
    `;
export const LinkFragmentDoc = gql`
    fragment Link on links {
  icon
  huge
  href
  label
}
    `;
export const MemberFragmentDoc = gql`
    fragment Member on members {
  id
  status
  type
  mollie_customer_id
  membership
  contribution
  renew
  name
  email
  birthday
  address {
    street
    zip
    city
    country
  }
}
    `;
export const PageTranslationsFragmentDoc = gql`
    fragment PageTranslations on pages_translations {
  title
  body
  languages_id {
    code
  }
}
    `;
export const PageFragmentDoc = gql`
    fragment Page on pages {
  slug
  date_created
  date_updated
  translations {
    ...PageTranslations
  }
}
    `;
export const EventsDocument = gql`
    query Events {
  events(sort: ["-date"], limit: -1, filter: {status: {_eq: "published"}}) {
    ...Event
  }
}
    ${EventFragmentDoc}
${EventTranslationsFragmentDoc}`;
export const EventDocument = gql`
    query Event($slug: String!) {
  events(filter: {slug: {_eq: $slug}, status: {_eq: "published"}}, limit: 1) {
    ...Event
  }
}
    ${EventFragmentDoc}
${EventTranslationsFragmentDoc}`;
export const UpcomingEventSinceDocument = gql`
    query UpcomingEventSince($date: String!) {
  events(
    sort: ["date"]
    limit: 1
    filter: {status: {_eq: "published"}, date: {_gt: $date}}
  ) {
    ...Event
  }
}
    ${EventFragmentDoc}
${EventTranslationsFragmentDoc}`;
export const LinksDocument = gql`
    query Links {
  links(limit: -1, filter: {status: {_eq: "published"}}) {
    ...Link
  }
}
    ${LinkFragmentDoc}`;
export const GetMemberDocument = gql`
    query GetMember($id: ID!) {
  members_by_id(id: $id) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export const GetMemberByEmailDocument = gql`
    query GetMemberByEmail($email: String!) {
  members(limit: 1, filter: {email: {_eq: $email}}) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export const GetMemberByMollieCustomerIdDocument = gql`
    query GetMemberByMollieCustomerID($mollie_customer_id: String!) {
  members(limit: 1, filter: {mollie_customer_id: {_eq: $mollie_customer_id}}) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export const GetMembersDocument = gql`
    query GetMembers {
  members(limit: -1) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export const GetMembersByIDsDocument = gql`
    query GetMembersByIDs($ids: [String]) {
  members(filter: {id: {_in: $ids}}) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export const CreateMemberDocument = gql`
    mutation CreateMember($data: create_members_input!) {
  create_members_item(data: $data) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export const UpdateMemberDocument = gql`
    mutation UpdateMember($id: ID!, $data: update_members_input!) {
  update_members_item(id: $id, data: $data) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export const NamesDocument = gql`
    query Names {
  names(filter: {status: {_eq: "published"}}, limit: -1) {
    name
  }
}
    `;
export const PagesDocument = gql`
    query Pages {
  pages(limit: -1, filter: {status: {_eq: "published"}}) {
    ...Page
  }
}
    ${PageFragmentDoc}
${PageTranslationsFragmentDoc}`;
export const PageDocument = gql`
    query Page($slug: String!) {
  pages(limit: -1, filter: {slug: {_eq: $slug}, status: {_eq: "published"}}) {
    ...Page
  }
}
    ${PageFragmentDoc}
${PageTranslationsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Events(variables?: EventsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventsQuery>(EventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Events', 'query');
    },
    Event(variables: EventQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventQuery>(EventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Event', 'query');
    },
    UpcomingEventSince(variables: UpcomingEventSinceQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpcomingEventSinceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpcomingEventSinceQuery>(UpcomingEventSinceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpcomingEventSince', 'query');
    },
    Links(variables?: LinksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LinksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LinksQuery>(LinksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Links', 'query');
    },
    GetMember(variables: GetMemberQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMemberQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMemberQuery>(GetMemberDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMember', 'query');
    },
    GetMemberByEmail(variables: GetMemberByEmailQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMemberByEmailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMemberByEmailQuery>(GetMemberByEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMemberByEmail', 'query');
    },
    GetMemberByMollieCustomerID(variables: GetMemberByMollieCustomerIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMemberByMollieCustomerIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMemberByMollieCustomerIdQuery>(GetMemberByMollieCustomerIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMemberByMollieCustomerID', 'query');
    },
    GetMembers(variables?: GetMembersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMembersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMembersQuery>(GetMembersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMembers', 'query');
    },
    GetMembersByIDs(variables?: GetMembersByIDsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMembersByIDsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMembersByIDsQuery>(GetMembersByIDsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMembersByIDs', 'query');
    },
    CreateMember(variables: CreateMemberMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateMemberMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateMemberMutation>(CreateMemberDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateMember', 'mutation');
    },
    UpdateMember(variables: UpdateMemberMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateMemberMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateMemberMutation>(UpdateMemberDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateMember', 'mutation');
    },
    Names(variables?: NamesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NamesQuery>(NamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Names', 'query');
    },
    Pages(variables?: PagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PagesQuery>(PagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Pages', 'query');
    },
    Page(variables: PageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageQuery>(PageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Page', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;