import type { Schema, Struct } from '@strapi/strapi';

export interface ProfilesProfile extends Struct.ComponentSchema {
  collectionName: 'components_profiles_profiles';
  info: {
    description: '';
    displayName: 'profile';
    icon: 'apps';
  };
  attributes: {
    box: Schema.Attribute.Integer;
    desc: Schema.Attribute.RichText;
    expand1: Schema.Attribute.String;
    expand2: Schema.Attribute.String;
    gr: Schema.Attribute.String;
    keywords: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    perc: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    statuss: Schema.Attribute.Enumeration<['draft', 'send', 'delete']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'draft'>;
    storage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0425\u0430\u0434\u0433\u0430\u043B\u0430\u0445 \u0436\u0443\u0440\u0430\u043C: '>;
    too: Schema.Attribute.Integer;
    type: Schema.Attribute.Enumeration<
      [
        '\u0413\u042D\u0420 \u0410\u0425\u0423\u0419 | \u0410\u0425\u0423\u0419\u041D \u0411\u0410\u0420\u0410\u0410',
        '\u0413\u042D\u0420 \u0410\u0425\u0423\u0419 | \u0426\u042D\u0412\u042D\u0420\u041B\u042D\u0413\u042D\u042D\u041D\u0418\u0419 \u0411\u041E\u0414\u0418\u0421',
        '\u0413\u041E\u041E \u0421\u0410\u0419\u0425\u0410\u041D | \u0410\u0420\u042C\u0421 \u0410\u0420\u0427\u0418\u041B\u0413\u0410\u0410',
        '\u0413\u041E\u041E \u0421\u0410\u0419\u0425\u0410\u041D | \u042D\u0420\u04AE\u04AE\u041B \u0410\u0425\u0423\u0419',
        '\u0425\u04AE\u041D\u0421 | \u0410\u041C\u0422\u0422\u0410\u041D',
        '\u0425\u04AE\u041D\u0421 | \u04E8\u0420\u0413\u04E8\u041D \u0425\u042D\u0420\u042D\u0413\u041B\u042D\u042D',
        '\u0425\u04AE\u041D\u0421 | \u0423\u041D\u0414\u0410\u0410, \u0428\u0418\u041D\u0413\u042D\u041D \u0425\u04AE\u041D\u0421',
        '\u0425\u04AE\u041D\u0421 |  \u04E8\u0413\u041B\u04E8\u04E8\u041D\u0418\u0419 \u0425\u041E\u041E\u041B',
        '\u0425\u04AE\u041D\u0421 | \u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u0425\u04AE\u041D\u0421',
        '\u0425\u04AE\u041D\u0421 | \u0426\u0410\u0419, \u041A\u041E\u0424\u0415, \u041A\u0410\u041A\u0410\u041E',
        '\u0425\u04AE\u041D\u0421 | \u041D\u04E8\u04E8\u0428\u0418\u041B\u0421\u04E8\u041D \u0425\u04AE\u041D\u0421',
        '\u0425\u04AE\u041D\u0421 | \u0410\u041C\u0422\u041B\u0410\u0413\u0427\u0423\u0423\u0414',
      ]
    > &
      Schema.Attribute.Required;
    uld: Schema.Attribute.Integer;
    une: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'profiles.profile': ProfilesProfile;
    }
  }
}
