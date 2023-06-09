// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/types';
import type * as prismicClient from '@prismicio/client';

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Blog Post documents */
interface BlogPostDocumentData {
  /**
   * Publish Date field in *Blog Post*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.publish_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  publish_date: prismic.DateField;
  /**
   * Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Content field in *Blog Post*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  content: prismic.RichTextField;
}
/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<BlogPostDocumentData>,
    'blog_post',
    Lang
  >;
/** Content for Content Page documents */
interface ContentPageDocumentData {
  /**
   * Title field in *Content Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Content field in *Content Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_page.content
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  content: prismic.RichTextField;
}
/**
 * Content Page document from Prismic
 *
 * - **API ID**: `content_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContentPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContentPageDocumentData>,
    'content_page',
    Lang
  >;
export type AllDocumentTypes = BlogPostDocument | ContentPageDocument;
declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismicClient.ClientConfig
    ): prismicClient.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      BlogPostDocumentData,
      BlogPostDocument,
      ContentPageDocumentData,
      ContentPageDocument,
      AllDocumentTypes,
    };
  }
}
